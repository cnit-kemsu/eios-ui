import React from 'react'
import PropTypes from 'prop-types'

import { useTheme } from '../theme'

import {
    dynContentCss,
    dynRootCss,
    dynTitleCss
} from './style'
import propMetadata from './propMetadata'

import { toArray, createUIComponent } from '../utils'


export default createUIComponent(propMetadata, function Pane({ flat, borderless, title, children, css, ...props }, ref) {

    const theme = useTheme()

    return (
        <div ref={ref} {...props} css={[dynRootCss({ theme, flat, borderless }), ...toArray(css)]}>
            {title && <h3 css={dynTitleCss({ theme })}>{title}</h3>}
            <div css={dynContentCss({ theme })}>{children}</div>
        </div>
    )
})