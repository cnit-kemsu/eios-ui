import PropTypes from 'prop-types'

import { positionType } from '../prop-types'

export default {
    items: {
        type: PropTypes.arrayOf(PropTypes.shape({
            content: PropTypes.node,
            onClick: PropTypes.func
        }))
    },
    show: { type: PropTypes.bool },
    flat: { type: PropTypes.bool, def: false },
    borderless: { type: PropTypes.bool, def: true },
    x: { type: PropTypes.number },
    y: { type: PropTypes.number }
}