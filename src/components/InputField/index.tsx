import type { ChangeEvent, ForwardedRef, HTMLInputTypeAttribute, ReactElement } from "react"
import { forwardRef, useCallback } from "react"
import type { InputFieldProps } from "./InputFieldProps"

import style from "./index.module.css"
import cx from "classix"

export type { InputFieldProps }

export type InputFieldComponent =
	((props: InputFieldProps, ref?: ForwardedRef<HTMLInputElement>) => (ReactElement | null))
	& { displayName?: string };

/**
 * Обертка вокруг `<input>`. Помимо своих свойств, также принимает свойства `<input>`.
 */
export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(({
																			 borderless = false,
																			 type = "text",
																			 onChange,
																			 className,
																			 colorStyle = "primary",
																			 ...props
																		 }: InputFieldProps, ref?) => {

	if (type === "file") {
		throw new Error("Используйте FileInput вместо InputField для работы с файлами")
	}

	if (type === "submit") {
		throw new Error("Используйте Button вместо InputField для submit-кнопки")
	}

	if (type === "button") {
		throw new Error("Используйте Button вместо InputField для кнопки")
	}

	if (type === "checkbox") {
		throw new Error("Используйте Checkbox вместо InputField для чекбокса")
	}

	const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => onChange?.(e.target.value), [onChange])

	return <input ref={ref}
				  type={type as HTMLInputTypeAttribute}
				  onChange={handleChange}
				  className={cx(`cs-${colorStyle}`, style.input, borderless && style.borderless, className)}
				  {...props}
	/>

}) as InputFieldComponent

InputField.displayName = "InputField"

