import React from 'react'
import PropTypes from 'prop-types'

import { useTheme } from '../theme'
import { addPropMetadataTo } from '../prop-types'

import {
    dynContentCss,
    dynRootCss,
    dynTitleCss
} from './style'

import { toArray } from '../utils'

export default function Pane({ flat, borderless, title, children, css, ...props }) {

    const theme = useTheme()

    return (
        <div {...props} css={[dynRootCss({ theme, flat, borderless }), ...toArray(css)]}>
            {title && <div css={dynTitleCss({ theme })}>{title}</div>}
            <div css={dynContentCss({ theme })}>{children}</div>
        </div>
    )
}

addPropMetadataTo(Pane, {    
    children: { type: PropTypes.node },
    title: { type: PropTypes.node },
    borderless: { type: PropTypes.bool, def: true },
    flat: { type: PropTypes.bool }
})