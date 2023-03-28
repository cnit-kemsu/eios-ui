import {forwardRef} from 'react';
import {dynTableCss} from './style';
import {useTheme} from '../../theme';
import {toArray} from '../../utils';
import type {TableProps} from "./TableProps";
import type {FCR} from "../types";

/**
 * Обёртка вокруг `table`
 */
export const Table: FCR<TableProps, HTMLTableElement> = forwardRef<HTMLTableElement, TableProps>(({
                                                                                         children,
                                                                                         borderless = false,
                                                                                         flat = false,
                                                                                         selectableRows = false,
                                                                                         selectableCell = false,
                                                                                         css,
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
                }),
                ...toArray(css)
            ]}
        >
            {children}
        </table>
    );
});

Table.displayName = "Table";