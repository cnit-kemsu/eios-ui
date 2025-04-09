import { ForwardedRef, forwardRef, ReactElement, useRef } from "react"
import { Ripple } from "../Ripple"
import type { CheckboxProps } from "./CheckboxProps"
import cx from "classix"

import indexCss from "./index.module.css"
import { getRippleColorFromColorStyle } from "../../utils.ts"

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
																	   colorStyle = "primary",
																	   disabled = false,
																	   checked = false,
																	   onClick,
																	   children,
																	   value,
																	   className,
																	   ...props
																   }: CheckboxProps, ref) => {

	const inputRef = useRef<HTMLInputElement>(null)

	return (
		<div ref={ref} onClick={() => {
			inputRef.current?.focus()
			return onClick?.()
		}}
			 className={cx(indexCss.checkbox, disabled && indexCss.disabled, className)} {...props} >
			<input ref={inputRef} name={name} type="checkbox" readOnly checked={checked} value={value} />
			<div className={cx(`cs-${colorStyle}`, indexCss.checkboxIcon, checked && indexCss.checked)}>
				<Ripple style={rippleStyle} color={getRippleColorFromColorStyle(colorStyle)} />
				{checked && <i className="material-icons">check</i>}
			</div>

			<div className={indexCss.label}>{children}</div>
		</div>
	)
}) as CheckboxComponent

Checkbox.displayName = "Checkbox"