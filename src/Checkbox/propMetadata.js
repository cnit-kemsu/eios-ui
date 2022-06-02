import PropTypes from 'prop-types'

import { colorStyleTypeNL } from '../prop-types'

export default {
    children: { type: PropTypes.node },
    name: { type: PropTypes.string },
    colorStyle: {
        type: colorStyleTypeNL,
        def: 'secondary'
    },
    disabled: { type: PropTypes.bool },
    checked: { type: PropTypes.bool, def: false },
    onClick: { type: PropTypes.func }
}