import React from 'react'
import {useTheme} from '../../theme'
import {toArray} from '../../utils'
import {dynItemCss, dynRootCss, dynSelectedItemCss, itemCss, rootCss} from './style'
import {ListProps} from "./ListProps";
import {defGetContent, defGetSelectable, defGetValue} from "./defaults";


export function List({
                         name,
                         items = [],
                         borderless= false,
                         flat= false,
                         colorStyle = "primary",
                         css,
                         valueIsIndex= false,
                         valueProp = "value",
                         contentProp = "content",
                         selectableProp = "selectable",
                         getContent = defGetContent,
                         getValue = defGetValue,
                         getSelectable = defGetSelectable,
                         value,
                         disabled= false,
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
                            {getContent(item, contentProp)}
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