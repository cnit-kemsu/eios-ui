import React from 'react'
import PropTypes from 'prop-types'

import { useTheme } from '../theme'
import { addPropMetadataTo } from '../prop-types'

import { dynTableCss } from './style'

import { toArray } from '../utils'

export default function Table({ children, borderless, flat, selectableRows, selectableCell, css, ...props }) {

    const theme = useTheme()

    return (
        <table
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
}

addPropMetadataTo(Table, {
    selectableRows: { type: PropTypes.bool },
    selectableCell: { type: PropTypes.bool },
    borderless: { type: PropTypes.bool },
    flat: { type: PropTypes.bool }
})