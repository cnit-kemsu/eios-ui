import cssStyle from "./index.module.css"
import { ComponentPropsWithRef, ForwardedRef, forwardRef, MutableRefObject, ReactElement, useRef } from "react"
import { ColorStyleProp, DisabledProp, NameProp, StyleProps, ValueProp } from "../../types"
import { Ripple } from "../Ripple"
import { useTheme } from "../../theme.ts"
import cx from "classix"
import { dynSwitchButtonCss, dynSwitchCss } from "./style.ts"

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
																   colorStyle = "secondary",
																   disabled = false,
																   checked = false,
																   onClick,
																   value,
																   className,
																   ...props
															   }: SwitchProps, ref) => {

	const buttonRef = useRef() as MutableRefObject<HTMLDivElement>
	const theme = useTheme()
	const { colorStyles } = theme

	return <>
		<div ref={ref}
			 style={{ background: checked ? colorStyles[colorStyle].light : theme.switch.background }}
			 onClick={() => onClick?.()}
			 css={dynSwitchCss({ theme, disabled })} className={cx(className, cssStyle.switchContainer)} {...props}
		>
			<div ref={buttonRef} css={dynSwitchButtonCss({ theme, checked, colorStyle })}
				 className={cx(cssStyle.switchButton, checked && cssStyle.switchButtonOn)}
			>
				<Ripple
					style={rippleStyle}
					color={colorStyles[colorStyle].ripple} />
			</div>
		</div>
		<input name={name} type="checkbox" style={{ display: "none" }} readOnly checked={checked} value={value} />
	</>
}) as SwitchComponent