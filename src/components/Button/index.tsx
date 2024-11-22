import { ElementType, forwardRef, ForwardRefRenderFunction, JSX } from "react"

import { useTheme } from "../../theme"
import { Ripple } from "../Ripple"
import type { PolymorphicRef } from "../../types"
import { dynButtonCss } from "./style"
import type { ButtonProps } from "./ButtonProps"

import style from "./index.module.css"
import cx from "classix"

export type { ButtonProps }

export type ButtonComponent =
	(<C extends ElementType = "button">(props: ButtonProps<C>, ref?: PolymorphicRef<C>) => JSX.Element)
	& { displayName: string };

/**
 * Кнопка. По умолчанию представляет собой обертку вокруг `button`. Помимо своих свойств, принимает свойства оборачиваемого элемента.
 */
export const Button = forwardRef((<C extends ElementType = "button">({
																																			elementType,
																																			disabled = false,
																																			flat = false,
																																			colorStyle = "dark",
																																			transparent = false,
																																			fillable = false,
																																			borderless = false,
																																			children,
																																			className,
																																			...props
																																		}: ButtonProps<C>, ref?: PolymorphicRef<C>) => {

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const theme = useTheme()
	const { colorStyles } = theme

	const Component: ElementType = elementType ?? "button"

	return (
		<Component ref={ref}
							 className={cx(style.button, className)}
							 css={[
								 dynButtonCss({
									 theme,
									 flat,
									 disabled,
									 colorStyle,
									 transparent,
									 fillable,
									 borderless
								 })
							 ]} {...props}>
			<Ripple color={colorStyles[colorStyle].ripple} />
			{children}
		</Component>
	)
}) as ForwardRefRenderFunction<unknown>) as ButtonComponent

Button.displayName = "Button"