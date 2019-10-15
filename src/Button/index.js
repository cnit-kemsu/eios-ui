import React from 'react'
import { jsx } from '@emotion/core'

import propMetadata from './propMetadata'
import { buttonCss, dynButtonCss } from './style'

import { useTheme } from '../theme'
import Ripple from '../Ripple'
import { toArray, createUi } from '../utils'


export default createUi(propMetadata, function Button({
    elementType, disabled, flat, stickOnHover,
    colorStyle, transparent, fillable, borderless,
    children, css, ...props
}, ref) {

    const theme = useTheme()
    const { colorStyles, button } = theme

    return jsx(
        elementType,
        {
            css: [
                buttonCss,
                dynButtonCss({ theme, flat, stickOnHover, disabled, colorStyle, transparent, fillable, borderless }),
                button.css,
                ...toArray(css)
            ],
            ref,
            ...props
        },
        <>
            <Ripple color={colorStyles[colorStyle].ripple} />
            {children}
        </>
    )

})