import {Css} from "../types";
import {ComponentPropsWithRef} from "react";

type BaseTableProps = {
    borderless?: boolean;
    flat?: boolean;
    selectableRows?: boolean;
    selectableCell?: boolean;
    css?: Css;
}
export type TableProps =
    BaseTableProps
    & Omit<ComponentPropsWithRef<'table'>, keyof BaseTableProps>