import React from 'react'
import PropTypes from 'prop-types'

import { useTheme } from '../theme'
import { addPropMetadataTo } from '../prop-types'

import { dynTableCss } from './style'

export default function Table({ children, borderless, flat, selectableRows, selectableCell, ...props }) {

    const theme = useTheme()

    return (
        <table
            {...props}
            css={dynTableCss({
                theme, selectableCell, selectableRows, borderless, flat
            })}
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