import PropTypes from 'prop-types'
import { defaultTheme } from './theme'

export function addPropMetadataTo(ReactComponent, metadata) {

    ReactComponent.propTypes = {
        css: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
        style: PropTypes.object,
        className: PropTypes.string
    }
    ReactComponent.defaultProps = {}
    ReactComponent.propInfo = {
        css: <p>result of <i>css</i> function from <i>@emotion/core</i> lib</p>,
        style: <p>inline-style added to the root element of the component</p>,
        className: <p>css-class name added to the root element of the component</p>
    }

    Object.entries(metadata).map(([propName, { type = PropTypes.any, def, info }]) => {

        ReactComponent.propTypes[propName] = type

        if (def) ReactComponent.defaultProps[propName] = def
        if (info) ReactComponent.propInfo[propName] = info
    })
}


export const colorStyleVariants = ['light', 'dark', 'primary', 'secondary']
export const colorStyleType = PropTypes.oneOfType([
    PropTypes.oneOf(colorStyleVariants),
    PropTypes.string
])

export const positionVariants = ['top', 'left', 'right', 'bottom']
export const positionType = PropTypes.oneOf(positionVariants)


export const stringOrNumberType = PropTypes.oneOfType([PropTypes.string, PropTypes.number])
export const listItemsType = PropTypes.oneOfType([

    PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.node
    ])),

    PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.shape({
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            content: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element])
        })
    ]))

])

export const typeOfMessageVariants = ['info', 'warning', 'error', 'success']
export const typeOfMessageType = PropTypes.oneOf(typeOfMessageVariants)

export const typeOfTextFieldVariants = ['text', 'password', 'email', 'number']
export const typeOfTextFieldType = PropTypes.oneOf(typeOfTextFieldVariants)