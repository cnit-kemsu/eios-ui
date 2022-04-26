import React from 'react'

import { rootCss, dynRootCss } from './style'
import propMetadata from './propMetadata'

import { useTheme } from '../theme'
import { toArray, createUIComponent } from '../utils'


export default createUIComponent(propMetadata, function TextField({ colorStyle, borderless, flat, filled, value, css, multiline, ...props }, ref) {

    const theme = useTheme()

    const finalProps = {
        ref,
        value: !value && value !== 0 && value !== "" ? "" : value,
        css: [rootCss, dynRootCss({ theme, filled, flat, borderless, colorStyle }), ...toArray(css)],
        ...props
    }

    return multiline ? (<textarea {...finalProps} />) : (<input {...finalProps} />)
})

