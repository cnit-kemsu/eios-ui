import {forwardRef} from 'react';
import {dynTableCss} from './style';
import {useTheme} from '../../theme';
import type {TableProps} from "./TableProps";
import type {FCR} from "../../types";

export type {TableProps};

/**
 * Обёртка вокруг `table`. Приримает также свойства `<table>`.
 */
export const Table = forwardRef<HTMLTableElement, TableProps>(({
                                                                   children,
                                                                   borderless = false,
                                                                   flat = false,
                                                                   selectableRows = false,
                                                                   selectableCell = false,
                                                                   ...props
                                                               }: TableProps, ref) => {

    const theme = useTheme();

    return (
        <table
            ref={ref}
            {...props}
            css={[
                dynTableCss({
                    theme, selectableCell, selectableRows, borderless, flat
                })
            ]}
        >
            {children}
        </table>
    );
}) as FCR<TableProps, HTMLTableElement>;

Table.displayName = "Table";