import PropTypes from 'prop-types'

import { colorStyleType } from '../prop-types'

export default {
    children: { type: PropTypes.node },
    name: {
        type: PropTypes.string,
        info: 'form element name'
    },
    colorStyle: {
        type: colorStyleType,
        def: 'secondary'
    },
    disabled: { type: PropTypes.bool },
    checked: { type: PropTypes.bool, def: false },
    onClick: { type: PropTypes.func }
}