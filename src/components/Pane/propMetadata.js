import PropTypes from 'prop-types'

export default {
    children: { type: PropTypes.node },
    title: { type: PropTypes.node },
    borderless: { type: PropTypes.bool, def: true },
    flat: { type: PropTypes.bool }
}