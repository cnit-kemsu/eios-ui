import PropTypes from 'prop-types'

import { positionType } from '../../prop-types'


export default {
    position: { type: positionType, def: 'top' },
    showDelay: { type: PropTypes.number, def: 0.5 },
    hideDelay: { type: PropTypes.number, def: 0.5 },
    text: { type: PropTypes.node },
    hide: { type: PropTypes.bool, def: false },
    hideArrow: { type: PropTypes.bool, def: false }
}