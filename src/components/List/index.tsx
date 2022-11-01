import React, {forwardRef} from 'react'
import {useTheme} from '../../theme'
import {toArray} from '../../utils'
import {dynItemCss, dynRootCss, dynSelectedItemCss, itemCss, rootCss} from './style'
import {ListProps} from "./ListProps";
import {defGetContent, defGetSelectable, defGetValue} from "./defaults";
import {Ripple} from "../Ripple";


export const List: React.FC<ListProps> = forwardRef<HTMLUListElement, ListProps>(({
                                                                                      name,
                                                                                      items = [],
                                                                                      borderless = false,
                                                                                      flat = false,
                                                                                      colorStyle = "primary",
                                                                                      css,
                                                                                      valueIsIndex = false,
                                                                                      valueProp = "value",
                                                                                      contentProp = "content",
                                                                                      selectableProp = "selectable",
                                                                                      getContent = defGetContent,
                                                                                      getValue = defGetValue,
                                                                                      getSelectable = defGetSelectable,
                                                                                      value,
                                                                                      disabled = false,
                                                                                      onChange,
                                                                                      ...props
                                                                                  }: ListProps, ref) => {

    const theme = useTheme();

    return (
        <>
            <ul ref={ref} {...props} css={[rootCss, dynRootCss({disabled, borderless, theme, flat}), ...toArray(css)]}>
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
                            <Ripple color={theme.colorStyles[colorStyle].ripple}/>
                            {getContent(item, contentProp)}
                        </li>
                    })
                }
            </ul>
            <select disabled value={value} style={{display: 'none'}}>
                {
                    items.map((item, index) => {
                        const curValue = valueIsIndex ? index : getValue(item, valueProp, index)
                        return (<option key={curValue} value={curValue}/>)
                    })
                }
            </select>
        </>
    )
});