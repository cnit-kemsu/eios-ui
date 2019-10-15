import PropTypes from 'prop-types'

import {
    colorStyleType,
    stringOrNumberType,
    listItemsType
} from '../prop-types'

export default {
    valueFromContent: { type: PropTypes.bool },
    name: {
        type: PropTypes.string,
        info: 'form element name'
    },
    colorStyle: {
        type: colorStyleType,
        def: 'primary'
    },
    value: {
        type: stringOrNumberType,
        info: 'if an array of string/number is passed, then the element number is used as value'
    },
    disabled: { type: PropTypes.bool },
    borderless: { type: PropTypes.bool, def: true },
    flat: { type: PropTypes.bool },
    items: { type: listItemsType.isRequired },
    onChange: { type: PropTypes.func }
}