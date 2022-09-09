import React from 'react'

import {
    rootCss, dynRootCss,
    itemCss, dynItemCss,
    dynSelectedItemCss
} from './style'
import propMetadata from './propMetadata'

import { useTheme } from '../../theme'
import { toArray, createUIComponent } from '../../utils'



export default createUIComponent(propMetadata, function List({
    name, items, borderless, flat, colorStyle, css, valueIsIndex,
    valueProp, contentProp, selectableProp, getContent, getValue, getSelectable,
    value, disabled, onChange, valueFromContent, ...props
}, ref) {

    const theme = useTheme()

    return (
        <>
            <ul ref={ref} {...props} css={[rootCss, dynRootCss({ disabled, borderless, theme, flat }), ...toArray(css)]}>
                {
                    items.map((item, index) => {

                        const curValue = valueIsIndex ? index : getValue(item, valueProp, index)

                        return <li
                            key={curValue}
                            onClick={onChange && getSelectable(item, selectableProp, index) ?
                                () => onChange(curValue, item) : undefined}
                            css={[
                                itemCss,
                                dynItemCss({ theme, colorStyle }),
                                (curValue === value) && dynSelectedItemCss({ theme, colorStyle })
                            ]}
                        >
                            {getContent(item, contentProp, index)}
                        </li>
                    })
                }
            </ul>
            <select readOnly value={value} style={{ display: 'none' }}>
                {
                    items.map((item, index) => {
                        const curValue = valueIsIndex ? index : getValue(item, valueProp, index)
                        return (<option key={curValue} value={curValue} />)
                    })
                }
            </select>
        </>
    )
})