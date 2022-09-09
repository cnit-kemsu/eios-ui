import React from "react";
import {jsx} from '@emotion/react'
import {buttonCss, dynButtonCss} from './style'
import {ButtonProps} from "./ButtonProps";
import Ripple from '../Ripple'
import {toArray} from '../../utils'
import {useTheme} from '../../theme'

export default function Button<ElType extends React.ElementType = ButtonProps["elementType"]>({
                                   elementType = "button", disabled = false, flat = false, stickOnHover = false,
                                   colorStyle = "dark", transparent = false, fillable = false, borderless = false,
                                   children, css, ...props
                               }: ButtonProps, ref: React.Ref<HTMLInputElement> | undefined) {

    const theme = useTheme()
    const {colorStyles, button} = theme

    return jsx(
        elementType,
        {
            css: [
                buttonCss,
                dynButtonCss({
                    theme,
                    flat,
                    elementType,
                    stickOnHover,
                    disabled,
                    colorStyle,
                    transparent,
                    fillable,
                    borderless
                }),
                button.css,
                ...toArray(css)
            ],
            ref,
            ...props
        },
        <>
            <Ripple color={colorStyles[colorStyle].ripple}/>
            {children}
        </>
    )

}