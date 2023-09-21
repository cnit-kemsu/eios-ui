import {ComponentPropsWithRef} from "react";

type BaseTableProps = {
    borderless?: boolean;
    flat?: boolean;
    selectableRows?: boolean;
    selectableCell?: boolean;
}

export type TableProps =
    BaseTableProps
    & Omit<ComponentPropsWithRef<'table'>, keyof BaseTableProps>