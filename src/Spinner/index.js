import React from 'react'
import PropTypes from 'prop-types'

import { useTheme } from '../theme'
import {
    addPropMetadataTo, colorStyleType
} from '../prop-types'

import {
    spinnerCss, spinnerCircleCss,
    dynSpinnerCircleCss
} from './style'

import { toArray } from '../utils'

export default function Spinner({ colorStyle, scale, css, ...props }) {

    const theme = useTheme()

    const r = scale * 49
    const l = 2 * Math.PI * r

    return (
        <svg {...props} css={[spinnerCss, ...toArray(css)]} viewBox="0 0 100 100">
            <circle css={[spinnerCircleCss, dynSpinnerCircleCss({ theme, l , colorStyle })]} cx="50" cy="50" r={r} />
        </svg>
    )
}


addPropMetadataTo(Spinner, {
    colorStyle: { type: colorStyleType, def: 'secondary' },
    scale: { type: PropTypes.number, def: 1 }
})