import PropTypes from 'prop-types'

import { colorStyleType } from '../prop-types'

export default {
    children: { type: PropTypes.node },
    colorStyle: {
        type: colorStyleType,
        def: 'dark'
    },
    elementType: {
        type: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
        def: 'button'
    },
    transparent: { type: PropTypes.bool },
    fillable: {
        type: PropTypes.bool,
        info: "used in conjunction with the property 'transparent=true'"
    },
    borderless: { type: PropTypes.bool },
    disabled: { type: PropTypes.bool },
    flat: { type: PropTypes.bool },
    stickOnHover: { type: PropTypes.bool }
}
