import React from 'react'

import { dynMessageCss } from './style'
import propMetadata from './propMetadata'

import { useTheme } from '../../theme'
import { toArray, createUIComponent } from '../../utils'


export default createUIComponent(propMetadata, function Message({ children, flat, type, borderless, css, ...props }, ref) {

    const theme = useTheme()

    return (
        <div ref={ref} {...props} css={[dynMessageCss({ theme, flat, type, borderless }), theme.message.style, ...toArray(css)]}>
            {children}
        </div>
    )
})