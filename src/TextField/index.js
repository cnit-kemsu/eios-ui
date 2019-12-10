import React from 'react'

import { rootCss, dynRootCss } from './style'
import propMetadata from './propMetadata'

import { useTheme } from '../theme'
import { toArray, createUi } from '../utils'


export default createUi(propMetadata, function TextField({ colorStyle, borderless, flat, filled, value, css, ...props }, ref) {

    const theme = useTheme()

    return (
        <input
            ref={ref}
            value={!value && value !== 0 && value !== "" ? "" : value}
            css={[rootCss, dynRootCss({ filled, theme, flat, borderless, colorStyle }), ...toArray(css)]}
            {...props}
        />
    )
})

