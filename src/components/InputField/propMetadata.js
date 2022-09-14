import PropTypes from 'prop-types'

import {
    colorStyleType,
    typeOfInputFieldType,
    stringOrNumberType
} from '../../prop-types'


export default {
    colorStyle: { type: colorStyleType, def: 'secondary' },
    type: { type: typeOfInputFieldType, def: 'text' },
    onChange: { type: PropTypes.func },
    required: { type: PropTypes.bool },
    placeholder: { type: PropTypes.string },
    readOnly: { type: PropTypes.bool },
    value: { type: stringOrNumberType },
    disabled: { type: PropTypes.bool },
    borderless: { type: PropTypes.bool },
    flat: { type: PropTypes.bool },
    multiline: { type: PropTypes.bool, info: "если true, будет использоваться textarea, вместо input" },
    step: { type: PropTypes.number },
    min: { type: PropTypes.number },
    max: { type: PropTypes.number },
    filled: { type: PropTypes.bool },    
}