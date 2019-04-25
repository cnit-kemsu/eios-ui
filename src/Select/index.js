import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import Ripple from '../Ripple'

import { useTheme } from '../theme'
import {
    addPropMetadataTo,
    listItemsType, stringOrNumberType
} from '../prop-types'
import {
    containerCss,
    displayedSelectOptionsCss,
    dynOptionCss,
    dynOptionsCss,
    dynSelectCss,
    dynOpenedSelectCss
} from './style'


function getValue(valueFromContent, item, index) {

    if (valueFromContent) return item.content || item

    return item.value === undefined ? index : item.value
}

const Select = forwardRef(({
    name, open, onClick, selectStyle, onChange, valueFromContent,
    disabled, items, value, size, itemStyle, placeholder,
    borderless, flat, ...props
}, ref) => {

    const theme = useTheme()
    const item = items.find((item, index) => getValue(valueFromContent, item, index) === value) || placeholder || ""

    return (
        <>
            <div ref={ref} {...props} css={containerCss}>
                <div
                    onClick={onClick}
                    style={selectStyle}
                    css={[
                        dynSelectCss({ theme, borderless, flat, disabled }),
                        open && dynOpenedSelectCss({ theme })
                    ]}
                >
                    <Ripple color='rgba(0,0,0,0.2)' />
                    <span>{item.content || item}</span>
                    <i style={{ userSelect: 'none' }} className="material-icons">arrow_drop_down</i>
                </div>

                <div
                    css={[itemStyle, dynOptionsCss({ theme, borderless, flat }), open && displayedSelectOptionsCss]}
                    style={{ maxHeight: size ? `calc(${size}em + ${size} * 12px)` : undefined }}
                >
                    {
                        items.map((item, index) => (
                            <div
                                key={index}
                                css={dynOptionCss({ theme })}
                                onClick={onChange ? () => onChange(getValue(valueFromContent, item, index)) : undefined}
                            >
                                {item.content || item || ""}
                            </div>
                        ))
                    }
                </div>
            </div>
            <select name={name} readOnly value={value} style={{ display: 'none' }}>
                {
                    items.map((item, index) => <option key={index} value={getValue(valueFromContent, item, index)} />)
                }
            </select>
        </>
    )
})

Select.displayName = 'Select'

export default Select

addPropMetadataTo(Select, {
    placeholder: { type: PropTypes.string },
    size: { type: PropTypes.number },
    borderless: { type: PropTypes.bool, def: true },
    flat: { type: PropTypes.bool },
    open: { type: PropTypes.bool },
    name: {
        type: PropTypes.string,
        info: 'form element name'
    },
    value: {
        type: stringOrNumberType,
        info: 'if an array of primitives is passed and property `valueFromContent=false`, then the element number is used as value'
    },
    valueFromContent: { type: PropTypes.bool },
    disabled: { type: PropTypes.bool },
    items: { type: listItemsType.isRequired },
    onChange: { type: PropTypes.func },
    onClick: { type: PropTypes.func }
})