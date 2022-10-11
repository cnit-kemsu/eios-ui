import React from 'react'
import {useTheme} from '../../theme'
import {isPrimitive, toArray} from '../../utils'
import {dynItemCss, dynRootCss, dynSelectedItemCss, itemCss, rootCss} from './style'
import {ListProps} from "./ListProps";

const defGetValue = (item, valueProp, itemIndex) => isPrimitive(item) ? item : item[valueProp];
const defGetContent = (item, contentProp, itemIndex) => isPrimitive(item) ? item : item[contentProp];
const defGetSelectable = (item, selectableProp, itemIndex) => item[selectableProp] || typeof item[selectableProp] === 'undefined';

export function List({
                         name,
                         items = [],
                         borderless,
                         flat,
                         colorStyle = "primary",
                         css,
                         valueIsIndex,
                         valueProp = "value",
                         contentProp = "content",
                         selectableProp = "selectable",
                         getContent = defGetContent,
                         getValue = defGetValue,
                         getSelectable = defGetSelectable,
                         value,
                         disabled,
                         onChange,
                         ...props
                     }: ListProps) {

    const theme = useTheme();

    return (
        <>
            <ul {...props} css={[rootCss, dynRootCss({disabled, borderless, theme, flat}), ...toArray(css)]}>
                {
                    items.map((item, index) => {

                        const curValue = valueIsIndex ? index : getValue(item, valueProp, index)

                        return <li
                            key={curValue}
                            onClick={onChange && getSelectable(item, selectableProp, index) ?
                                () => onChange(curValue, item) : undefined}
                            css={[
                                itemCss,
                                dynItemCss({theme, colorStyle}),
                                (curValue === value) && dynSelectedItemCss({theme, colorStyle})
                            ]}
                        >
                            {getContent(item, contentProp, index)}
                        </li>
                    })
                }
            </ul>
            <select value={value} style={{display: 'none'}}>
                {
                    items.map((item, index) => {
                        const curValue = valueIsIndex ? index : getValue(item, valueProp, index)
                        return (<option key={curValue} value={curValue}/>)
                    })
                }
            </select>
        </>
    )
}