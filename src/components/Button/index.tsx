import { ElementType, forwardRef, ForwardRefRenderFunction, JSX } from "react"
import { Ripple } from "../Ripple"
import type { PolymorphicRef } from "../../types"
import type { ButtonProps } from "./ButtonProps"

import style from "./index.module.css"
import cx from "classix"
import { getRippleColorFromColorStyle } from "../../utils"

export type { ButtonProps }

export type ButtonComponent =
	(<C extends ElementType = "button">(props: ButtonProps<C>, ref?: PolymorphicRef<C>) => JSX.Element)
	& { displayName: string };

/**
 * Кнопка. По умолчанию представляет собой обертку вокруг `button`. Помимо своих свойств, принимает свойства оборачиваемого элемента.
 */
export const Button = forwardRef((function Button<C extends ElementType = "button">({
																						elementType,
																						disabled = false,
																						colorStyle = "primary",
																						transparent = false,
																						fillable = false,
																						borderless = false,
																						children,
																						className,
																						...props
																					}: ButtonProps<C>, ref?: PolymorphicRef<C>) {


	const Component: ElementType = elementType ?? "button"

	return (
		<Component ref={ref}
				   className={cx(
					   style.button,
					   disabled && style.disabled,
					   borderless && style.borderless,
					   transparent && style.transparent,
					   fillable && style.fillable,
					   `cs-${colorStyle}`,
					   className)}
				   {...props}>
			<Ripple color={getRippleColorFromColorStyle(colorStyle)} />
			{children}
		</Component>
	)
}) as ForwardRefRenderFunction<unknown>) as ButtonComponent

Button.displayName = "Button"