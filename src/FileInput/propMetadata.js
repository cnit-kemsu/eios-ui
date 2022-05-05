import PropTypes from 'prop-types'

import {
    colorStyleType,
    stringOrNumberType
} from '../prop-types'


export default {
    colorStyle: {
        type: colorStyleType,
        def: 'dark'
    },
    transparent: { type: PropTypes.bool },
    fillable: {
        type: PropTypes.bool,
        info: "used in conjunction with the property 'transparent=true'"
    },
    borderless: { type: PropTypes.bool },
    disabled: { type: PropTypes.bool },
    flat: { type: PropTypes.bool },
    stickOnHover: { type: PropTypes.bool },
    onChange: { type: PropTypes.func },
    required: { type: PropTypes.bool },
    value: { type: stringOrNumberType },
    disabled: { type: PropTypes.bool },    
    title: { type: PropTypes.string }
}