import { forwardRef } from "react"
import type { TableProps } from "./TableProps"
import type { FCR } from "../../types"
import cssStyle from "./index.module.css"
import cx from "classix"

export type { TableProps }

/**
 * Обёртка вокруг `table`. Приримает также свойства `<table>`.
 */
export const Table = forwardRef<HTMLTableElement, TableProps>(({
																   className,
																   children,
																   selectableRows = false,
																   selectableCell = false,
																   ...props
															   }: TableProps, ref) => {

	return (
		<table ref={ref} className={cx(cssStyle.table,
            selectableRows && cssStyle.selectableRows,
            selectableCell && cssStyle.selectableCell,
            className)} {...props}>
			{children}
		</table>
	)
}) as FCR<TableProps, HTMLTableElement>

Table.displayName = "Table"