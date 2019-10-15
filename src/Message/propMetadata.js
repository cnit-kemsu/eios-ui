import PropTypes from 'prop-types'

import { typeOfMessageType } from '../prop-types'

export default {
    flat: { type: PropTypes.bool },
    borderless: { type: PropTypes.bool, def: true },
    type: {
        type: typeOfMessageType,
        def: 'info'
    }
}
