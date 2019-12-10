import PropTypes from 'prop-types'

import { listItemsType, stringOrNumberType } from '../prop-types'

export default {
    placeholder: { type: PropTypes.string },
    size: { type: PropTypes.number },
    borderless: { type: PropTypes.bool, def: false },
    flat: { type: PropTypes.bool },
    open: { type: PropTypes.bool },
    name: {
        type: PropTypes.string,
        info: 'form element name'
    },
    value: {
        type: stringOrNumberType,
        info: 'if an array of primitives is passed and property `valueFromContent=false`, then the element number is used as value'
    },
    valueFromContent: { type: PropTypes.bool },
    disabled: { type: PropTypes.bool },
    items: { type: listItemsType, def: [] },
    onChange: { type: PropTypes.func },
    onClick: { type: PropTypes.func }
}