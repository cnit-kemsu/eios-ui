import { forwardRef } from "react"
import { dynSpinnerCircleCss } from "./style"
import { useTheme } from "../../theme"
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
																	scale = 1,
																	className,
																	...props
																}: SpinnerProps, ref) => {

	const theme = useTheme()

	const r = scale * 45
	const l = 2 * Math.PI * r

	return (
		<svg ref={ref} {...props} className={cx(spinnerCss.spinner, className)} viewBox="0 0 100 100">
			<circle className={spinnerCss.circle}
					css={dynSpinnerCircleCss({ theme, l, colorStyle })} cx="50" cy="50"
					r={r} />
		</svg>
	)
}) as FCR<SpinnerProps, SVGSVGElement>

Spinner.displayName = "Spinner"