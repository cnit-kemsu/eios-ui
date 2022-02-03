import React from 'react'

import { dynTableCss } from './style'
import propMetadata from './propMetadata'

import { useTheme } from '../theme'
import { toArray, createUIComponent } from '../utils'


export default createUIComponent(propMetadata, function Table({ children, borderless, flat, selectableRows, selectableCell, css, ...props }, ref) {

    const theme = useTheme()

    return (
        <table
            ref={ref}
            {...props}
            css={[
                dynTableCss({
                    theme, selectableCell, selectableRows, borderless, flat
                }),
                ...toArray(css)
            ]}
        >
            {children}
        </table>
    )
})