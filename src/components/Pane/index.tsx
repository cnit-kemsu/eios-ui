import { forwardRef } from "react"
import type { PaneProps } from "./PaneProps"
import type { FCR } from "../../types"
import cssStyle from "./index.module.css"
import cx from "classix"

export type { PaneProps }

/** Панель с заголовком и некоторым содержимым. Принимает все свойства `<div>`, которые передаются корневому элементу. */
export const Pane = forwardRef<HTMLDivElement, PaneProps>(({
															   flat = false,
															   title,
															   children,
															   className,
															   ...props
														   }: PaneProps, ref) => {

	return (
		<div ref={ref} {...props}
			 className={cx(cssStyle.pane, flat && cssStyle.flat, className)}>
			{title && <h2>{title}</h2>}
			<div>{children}</div>
		</div>
	)
}) as FCR<PaneProps, HTMLDivElement>

Pane.displayName = "Pane"