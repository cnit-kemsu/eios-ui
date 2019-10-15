import PropTypes from 'prop-types'


export const colorStyleVariants = ['light', 'dark', 'primary', 'secondary']
export const colorStyleType = PropTypes.oneOfType([
    PropTypes.oneOf(colorStyleVariants),
    PropTypes.string
])

export const positionVariants = ['top', 'left', 'right', 'bottom']
export const positionType = PropTypes.oneOf(positionVariants)

export const stringOrNumberType = PropTypes.oneOfType([PropTypes.string, PropTypes.number])
export const listItemsType = PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        content: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element])
    }))
])

export const typeOfMessageVariants = ['info', 'warning', 'error', 'success']
export const typeOfMessageType = PropTypes.oneOf(typeOfMessageVariants)

export const typeOfTextFieldVariants = ['text', 'password', 'email', 'number']
export const typeOfTextFieldType = PropTypes.oneOf(typeOfTextFieldVariants)