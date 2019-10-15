import PropTypes from 'prop-types'

import { colorStyleType } from '../prop-types'

export default {
    colorStyle: { type: colorStyleType, def: 'secondary' },
    scale: { type: PropTypes.number, def: 1 }
}