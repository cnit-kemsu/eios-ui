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
        info: "если 'transparent=true', то кнопка будет заливаться при наведении на неё"
    },
    borderless: { type: PropTypes.bool },
    disabled: { type: PropTypes.bool },
    flat: { type: PropTypes.bool },
    stickOnHover: { type: PropTypes.bool, info:  `эффект "прилипания" при наведении на кнопку` }
}
