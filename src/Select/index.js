import React from 'react'

import Ripple from '../Ripple'
import { useTheme } from '../theme'
import { toArray, createUIComponent, getValue } from '../utils'

import {
    containerCss,
    displayedSelectOptionsCss,
    dynOptionCss,
    dynOptionsCss,
    dynSelectCss,
    dynOpenedSelectCss
} from './style'
import propMetadata from './propMetadata'


export default createUIComponent(propMetadata, function Select({
    name, open, onClick, selectStyle, onChange, valueFromContent,
    disabled, items, value, size, itemStyle, placeholder, css,
    borderless, flat, ...props
}, ref) {

    const theme = useTheme()
    const item = items.find((item, index) => getValue(valueFromContent, item, index) === value) || placeholder || ""

    return (
        <>
            <div ref={ref} {...props} css={[containerCss, ...toArray(css)]}>
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
                                onClick={onChange ? () => onChange(getValue(valueFromContent, item, index), item.content ? item.content : item) : undefined}
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