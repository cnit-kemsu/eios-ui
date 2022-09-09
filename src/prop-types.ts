import PropTypes from 'prop-types'

export const colorStyleVariants = ['light', 'dark', 'primary', 'secondary']
export const colorStyleType = PropTypes.oneOfType([
    PropTypes.oneOf(colorStyleVariants),
    PropTypes.string
])

export const colorStyleVariantsNL = ['dark', 'primary', 'secondary']
export const colorStyleTypeNL = PropTypes.oneOfType([
    PropTypes.oneOf(colorStyleVariantsNL),
    PropTypes.string
])

export const positionVariants = ['top', 'left', 'right', 'bottom']
export const positionType = PropTypes.oneOf(positionVariants)

export const stringOrNumberType = PropTypes.oneOfType([PropTypes.string, PropTypes.number])
export const listItemsType = PropTypes.arrayOf(PropTypes.any)

export const typeOfMessageVariants = ['info', 'warning', 'error', 'success']
export const typeOfMessageType = PropTypes.oneOf(typeOfMessageVariants)

export const typeOfInputFieldVariants = ['text', 'password', 'email', 'number', 'date']
export const typeOfInputFieldType = PropTypes.oneOf(typeOfInputFieldVariants)