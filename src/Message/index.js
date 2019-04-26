import React from 'react'
import PropTypes from 'prop-types'

import { useTheme } from '../theme'
import { dynMessageCss } from './style'

import { typeOfMessageType, addPropMetadataTo } from '../prop-types'

import { toArray } from '../utils'

export default function Message({ children, flat, type, borderless, css, ...props }) {

    const theme = useTheme()

    return (
        <div {...props} css={[dynMessageCss({ theme, flat, type, borderless }), theme.message.style, ...toArray(css)]}>
            {children}
        </div>
    )
}

addPropMetadataTo(Message, {
    flat: { type: PropTypes.bool },
    borderless: { type: PropTypes.bool, def: true },
    type: {
        type: typeOfMessageType,
        def: 'info'
    }
})

