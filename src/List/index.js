import React from 'react'

import {
    rootCss, dynRootCss,
    itemCss, dynItemCss,
    dynSelectedItemCss
} from './style'
import propMetadata from './propMetadata'

import { useTheme } from '../theme'
import { toArray, createUi, getValue } from '../utils'



export default createUi(propMetadata, function List({
    name, items, borderless, flat, colorStyle, css,
    value, disabled, onChange, valueFromContent, ...props
}, ref) {

    const theme = useTheme()

    return (
        <>
            <ul ref={ref} {...props} css={[rootCss, dynRootCss({ disabled, borderless, theme, flat }), ...toArray(css)]}>
                {
                    items.map((item, index) => (
                        <li
                            key={index}
                            onClick={onChange ? () => onChange(getValue(valueFromContent, item, index), item.content ? item.content : item) : undefined}
                            css={[
                                itemCss,
                                dynItemCss({ theme, colorStyle }),
                                (getValue(valueFromContent, item, index) === value) && dynSelectedItemCss({ theme, colorStyle })
                            ]}
                        >
                            {item.content || item}
                        </li>
                    ))
                }
            </ul>
            <select readOnly value={value} style={{ display: 'none' }}>
                {
                    items.map((item, index) => (<option key={index} value={getValue(valueFromContent, item, index)} />))
                }
            </select>
        </>
    )
})