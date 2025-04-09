import type { ComponentPropsWithRef } from "react"

type BaseTableProps = {
        /** добавляет стиль выделения строки при наведении */
        selectableRows?: boolean;
        /** добавляет стиль выделения ячейки при наведении */
        selectableCell?: boolean;
    }

export type TableProps =
    BaseTableProps
    & Omit<ComponentPropsWithRef<'table'>, keyof BaseTableProps>