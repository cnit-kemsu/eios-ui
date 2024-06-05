import {ComponentPropsWithRef} from "react";
import {BorderlessProp, FlatProp} from "../../types";

type BaseTableProps = {
        /** добавляет стиль выделения строки при наведении */
        selectableRows?: boolean;
        /** добавляет стиль выделения ячейки при наведении */
        selectableCell?: boolean;
    }
    & BorderlessProp
    & FlatProp

export type TableProps =
    BaseTableProps
    & Omit<ComponentPropsWithRef<'table'>, keyof BaseTableProps>