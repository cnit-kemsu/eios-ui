import type { ForwardedRef, ReactElement } from "react"
import { forwardRef } from "react"
import { useTheme } from "../../theme"
import { Ripple } from "../Ripple"
import { dynIconCss, dynRootCss } from "./style"
import type { CheckboxProps } from "./CheckboxProps"
import cx from "classix"

import indexCss from "./index.module.css"

const rippleStyle = {
	width: "200%",
	height: "200%",
	left: "-50%",
	top: "-50%",
	borderRadius: "100%"
}

export type { CheckboxProps }

export type CheckboxComponent =
	((props: CheckboxProps, ref?: ForwardedRef<HTMLDivElement>) => (ReactElement | null))
	& { displayName?: string };

/**
 * Обертка вокруг `<input type='checkbox'>`.
 */
export const Checkbox = forwardRef<HTMLDivElement, CheckboxProps>(({
																	   name,
																	   colorStyle = "secondary",
																	   disabled = false,
																	   checked = false,
																	   onClick,
																	   children,
																	   value,
																	   className,
																	   ...props
																   }: CheckboxProps, ref) => {

	const theme = useTheme()
	const { colorStyles } = theme

	return (
		<div ref={ref} {...props} onClick={() => onClick?.()}
			 className={cx(indexCss.checkbox, className)}
			 css={dynRootCss({ disabled })}>
			<div
				css={[
					dynIconCss({ theme, disabled, checked, colorStyle }),
					{
						position: "relative",
						overflow: "unset"
					}
				]}
			>
				<Ripple
					style={rippleStyle}
					color={colorStyles[colorStyle].ripple}
				/>
				<i style={{ display: "block" }}
				   className="material-icons">{checked ? "check_box" : "check_box_outline_blank"}
				</i>
			</div>
			<div className={indexCss.label}>{children}</div>
			<input name={name} type="checkbox" style={{ display: "none" }} readOnly checked={checked} value={value} />
		</div>
	)
}) as CheckboxComponent

Checkbox.displayName = "Checkbox"