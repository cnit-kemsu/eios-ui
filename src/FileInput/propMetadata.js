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
        info: "если 'transparent=true', то кнопка будет заливаться при наведении на неё"
    },
    borderless: { type: PropTypes.bool },
    disabled: { type: PropTypes.bool },
    flat: { type: PropTypes.bool },
    stickOnHover: { 
        type: PropTypes.bool,
        info:  `эффект "прилипания" при наведении на кнопку`
    },
    onChange: { type: PropTypes.func },
    required: { type: PropTypes.bool },
    value: { type: stringOrNumberType },
    disabled: { type: PropTypes.bool },    
    title: { type: PropTypes.string }
}