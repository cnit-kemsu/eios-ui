import React from 'react'

import {
    spinnerCss,
    spinnerCircleCss,
    dynSpinnerCircleCss
} from './style'
import propMetadata from './propMetadata'

import { useTheme } from '../theme'
import { toArray, createUi } from '../utils'


export default createUi(propMetadata, function Spinner({ colorStyle, scale, css, ...props }, ref) {

    const theme = useTheme()

    const r = scale * 49
    const l = 2 * Math.PI * r

    return (
        <svg ref={ref} {...props} css={[spinnerCss, ...toArray(css)]} viewBox="0 0 100 100">
            <circle css={[spinnerCircleCss, dynSpinnerCircleCss({ theme, l, colorStyle })]} cx="50" cy="50" r={r} />
        </svg>
    )
})