import React from 'react'
import PropTypes from 'prop-types'

import { useTheme } from '../theme'
import {
    addPropMetadataTo, colorStyleType,
    typeOfTextFieldType, stringOrNumberType
} from '../prop-types'

import { dynRootCss } from './style'

export default function TextField({ colorStyle, borderless, flat, value, ...props }) {

    const theme = useTheme()

    return (
        <input value={!value && value !== 0 && value !== "" ? "" : value} css={dynRootCss({ theme, flat, borderless, colorStyle })} {...props} />
    )
}

addPropMetadataTo(TextField, {
    colorStyle: { type: colorStyleType, def: 'secondary' },
    type: { type: typeOfTextFieldType, def: 'text' },
    onChange: { type: PropTypes.func },
    required: { type: PropTypes.bool },
    placeholder: { type: PropTypes.string },
    readOnly: { type: PropTypes.bool },
    value: { type: stringOrNumberType },
    disabled: { type: PropTypes.bool },
    borderless: { type: PropTypes.bool },
    flat: { type: PropTypes.bool }
})