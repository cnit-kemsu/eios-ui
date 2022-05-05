import React from "react"
import { buttonCss, dynButtonCss } from "../Button/style"
import Ripple from '../Ripple'
import Message from '../Message'
import { useTheme } from "../theme"
import { createUIComponent, toArray } from "../utils"
import propMetadata from "./propMetadata"
import {
    rootCss,
    inputCss
} from "./style"



export default createUIComponent(propMetadata, function FileInput({
    title, css, colorStyle, transparent, fillable, borderless, stickOnHover, flat, disabled,
    ...props
}, ref) {

    const theme = useTheme()
    const { colorStyles, button } = theme

    const finalCss = [        
        buttonCss,
        dynButtonCss({ theme, flat, stickOnHover, disabled, colorStyle, transparent, fillable, borderless }),
        button.css,
        ...toArray(css)
    ]

    return (
        <div css={rootCss}>
            <label css={finalCss}>
                <Ripple color={colorStyles[colorStyle].ripple} />
                <span>{title}</span>
                <input type="file" ref={ref} css={inputCss} {...props} />
            </label>            
        </div>
    )
})