import cssStyle from "./index.module.css"
import { ComponentPropsWithRef, ForwardedRef, forwardRef, ReactElement, useRef } from "react"
import { ColorStyleProp, DisabledProp, NameProp, StyleProps, ValueProp } from "../../types"
import { Ripple } from "../Ripple"
import cx from "classix"
import { getRippleColorFromColorStyle } from "../../utils.ts"

const rippleStyle = {
	width: "200%",
	height: "200%",
	left: "-50%",
	top: "-50%",
	borderRadius: "100%"
}

export type SwitchProps = {
		/** вкл./выкл. */
		checked?: boolean,
		/** обработчик нажатия на чекбокс */
		onClick?: () => void,
		ref?: ComponentPropsWithRef<"div">["ref"]
	}
	& ValueProp
	& NameProp
	& ColorStyleProp
	& DisabledProp
	& StyleProps

export type SwitchComponent = ((props: SwitchProps, ref?: ForwardedRef<HTMLDivElement>) => (ReactElement | null))
	& { displayName?: string };

/**
 * Аналог Checkbox в виде переключателя
 */
export const Switch = forwardRef<HTMLDivElement, SwitchProps>(({
																   name,
																   colorStyle = "primary",
																   disabled = false,
																   checked = false,
																   onClick,
																   value,
																   className,
																   ...props
															   }: SwitchProps, ref) => {

	const inputRef = useRef<HTMLInputElement>(null)

	return <div ref={ref} onClick={() => {
		inputRef.current?.focus()
		return onClick?.()
	}} className={cx(`cs-${colorStyle}`, cssStyle.switchContainer,
		disabled && cssStyle.disabled, checked && cssStyle.checked, className)} {...props}>
		<input ref={inputRef} name={name} type="checkbox" readOnly checked={checked} value={value} />
		<div className={cx(cssStyle.switchButton, checked && cssStyle.checked)}>
			<Ripple
				style={rippleStyle}
				color={getRippleColorFromColorStyle(colorStyle)} />
		</div>
	</div>

}) as SwitchComponent