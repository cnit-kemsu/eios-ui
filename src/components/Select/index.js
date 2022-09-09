import React from 'react'

import InputField from '../InputField'
import Ripple from '../Ripple'
import { useTheme } from '../../theme'
import { toArray, createUIComponent } from '../../utils'

import {
    dynContainerCss,
    displayedSelectOptionsCss,
    dynOptionCss,
    dynOptionsCss,
    dynSelectCss
} from './style'
import propMetadata from './propMetadata'


const nativeSelectStyle = { display: 'none' }


export default createUIComponent(propMetadata, function Select({
    name, open, onClick, selectStyle, onChange,
    valueProp, contentProp, selectableProp, 
    getContent, getValue, getSelectable,
    disabled, items, value, size, itemStyle, placeholder, css,
    borderless, flat, fullWidth, valueIsIndex, ...props
}, ref) {

    const theme = useTheme()

    const item = React.useMemo(() => items.find((item, index) => getValue(item, valueProp, index) === value) || placeholder, [items, valueProp, value])

    const selectRef = React.useRef()
    const listRef = React.useRef()


    React.useLayoutEffect(() => {

        if (fullWidth) {
            const listStyle = window.getComputedStyle(listRef.current)
            selectRef.current.style.width = `calc(${listStyle.width} + ${theme.select.height})`
        }

    }, [fullWidth, theme])

    React.useLayoutEffect(() => {

        if (typeof size === 'number' && size > 0 && listRef.current.children.length > 0) {
            const itemHeight = listRef.current.children[0].clientHeight
            listRef.current.style.maxHeight = `calc(${itemHeight}px * ${size})`
        }

    }, [items, size])


    return (
        <>
            <div ref={ref} {...props} css={[dynContainerCss({ theme }), ...toArray(css)]}>
                <div
                    ref={selectRef}
                    onClick={onClick}
                    style={selectStyle}
                    css={[
                        dynSelectCss({ theme, borderless, flat, disabled, open })
                    ]}
                >
                    <Ripple color='rgba(0,0,0,0.2)' />
                    <span>{item ? getContent(item, contentProp) : placeholder}</span>
                    <i style={{ userSelect: 'none' }} className="material-icons">arrow_drop_down</i>
                </div>

                <div
                    ref={listRef}
                    css={[itemStyle, dynOptionsCss({ theme, borderless, flat }), open && displayedSelectOptionsCss]}
                >
                    {
                        items.map((item, index) => {

                            const curValue = valueIsIndex ? index : getValue(item, valueProp, index)

                            return (
                                <div
                                    key={curValue}
                                    css={dynOptionCss({ theme })}
                                    onClick={onChange && getSelectable(item, selectableProp, index) ?
                                        (e) => onChange(curValue, item, e) : undefined}
                                >
                                    {getContent(item, contentProp, index)}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <select name={name} readOnly value={value} style={nativeSelectStyle}>
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