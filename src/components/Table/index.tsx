import React, {forwardRef} from 'react'
import {dynTableCss} from './style'
import {useTheme} from '../../theme'
import {toArray} from '../../utils'
import {TableProps} from "./TableProps";

function _Table({
                    children,
                    borderless = false, flat = false, selectableRows = false,
                    selectableCell = false, css, ...props
                }: TableProps, ref) {

    const theme = useTheme();

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
    );
}

/**
 * Обёртка вокруг `table`
 */
export const Table = forwardRef<HTMLTableElement, TableProps>(_Table);
Table.displayName = "Table";