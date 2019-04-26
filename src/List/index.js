import React from 'react'
import PropTypes from 'prop-types'

import {
    colorStyleType, stringOrNumberType,
    listItemsType, addPropMetadataTo
} from '../prop-types'
import { useTheme } from '../theme'
import {
    rootCss, dynRootCss,
    itemCss, dynItemCss,
    dynSelectedItemCss
} from './style'

import { toArray } from '../utils'

function getValue(valueFromContent, item, index) {

    if (valueFromContent) return (item.content || item || "").toString()

    return item.value === undefined ? index : item.value
}

export default function List({
    name, items, borderless, flat, colorStyle, css,
    value, disabled, onChange, valueFromContent, ...props
}) {

    const theme = useTheme()

    return (
        <>
            <ul {...props} css={[rootCss, dynRootCss({ disabled, borderless, theme, flat }), ...toArray(css)]}>
                {
                    items.map((item, index) => (
                        <li
                            key={index}
                            onClick={onChange ? () => onChange(getValue(valueFromContent, item, index)) : undefined}
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
}

addPropMetadataTo(List, {
    valueFromContent: { type: PropTypes.bool },
    name: {
        type: PropTypes.string,
        info: 'form element name'
    },
    colorStyle: {
        type: colorStyleType,
        def: 'primary'
    },
    value: {
        type: stringOrNumberType,
        info: 'if an array of string/number is passed, then the element number is used as value'
    },
    disabled: { type: PropTypes.bool },
    borderless: { type: PropTypes.bool, def: true },
    flat: { type: PropTypes.bool },
    items: { type: listItemsType.isRequired },
    onChange: { type: PropTypes.func }
})