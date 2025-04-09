import { forwardRef } from "react"
import type { SpinnerProps } from "./SpinnerProps"
import type { FCR } from "../../types"
import cx from "classix"

import spinnerCss from "./index.module.css"

export type { SpinnerProps }


/** Спиннер (крутилка). Используется для отображеня выполнения некого процесса (например, запрос api).
 * Принимает также свойства `<svg>`.
 */
export const Spinner = forwardRef<SVGSVGElement, SpinnerProps>(({
																	colorStyle = "secondary",
																	className,
																	spinnerStrokeWidth,
																	...props
																}: SpinnerProps, ref) => {

	return (
		<svg ref={ref} {...props} className={cx(spinnerCss.spinner, className)} viewBox="0 0 100 100">
			<circle className={cx(`cs-${colorStyle}`, spinnerCss.circle)}
					cx="50" cy="50"
					strokeWidth={spinnerStrokeWidth || 6}
					r={45} />
		</svg>
	)
}) as FCR<SpinnerProps, SVGSVGElement>

Spinner.displayName = "Spinner"