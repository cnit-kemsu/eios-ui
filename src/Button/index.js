import React from 'react'
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'

import { useTheme } from '../theme'
import Ripple from '../Ripple'
import { colorStyleType, addPropMetadataTo } from '../prop-types'

import { buttonCss, dynButtonCss } from './style'
import { toArray } from '../utils'


export default function Button({
    elementType, disabled, flat, stickOnHover,
    colorStyle, transparent, fillable, borderless,
    children, css, ...props
}) {

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
            ...props
        },
        <>
            <Ripple color={colorStyles[colorStyle].ripple} />
            {children}
        </>
    )

}

addPropMetadataTo(Button, {
    children: { type: PropTypes.node },
    colorStyle: {
        type: colorStyleType,
        def: 'dark'
    },
    elementType: {
        type: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
        def: 'button'
    },
    transparent: { type: PropTypes.bool },
    fillable: {
        type: PropTypes.bool,
        info: "used in conjunction with the property 'transparent=true'"
    },
    borderless: { type: PropTypes.bool },
    disabled: { type: PropTypes.bool },
    flat: { type: PropTypes.bool },
    stickOnHover: {
        type: PropTypes.bool
    }
})

