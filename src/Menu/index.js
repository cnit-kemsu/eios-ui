import React from 'react'

import propMetadata from './propMetadata'
import { dynMenuCss, dynMenuItemCss, displayedMenuCss } from './style'

import { createUi, toArray, offset } from '../utils'
import { useTheme } from '../theme'

export default createUi(propMetadata, function Menu({ show, x, y, flat, borderless, items, css, children, ...props }, ref) {

    const theme = useTheme()

    return (
        <ul ref={ref} {...props} css={[dynMenuCss({ theme, flat, borderless, x, y }), show && displayedMenuCss, ...toArray(css)]}>
            {children}
        </ul>
    )
})

export const MenuItem = createUi({}, function MenuItem({ onClick, children, css, ...props }, ref) { 

    const theme = useTheme()

    return (
        <li data-menuitem ref={ref} css={[dynMenuItemCss({ theme }), ...toArray(css)]} onClick={onClick} {...props}>
            {children}
        </li>
    )
})

