import type { BorderlessProp, ColorStyleProp, DisabledProp, FCR, StyleProps } from "../../types"
import { ChangeEvent, ComponentPropsWithRef, forwardRef, useCallback } from "react"

import cssStyle from "../InputField/index.module.css"
import cx from "classix"

export type TextAreaPropsBase = {
		onChange?: (value: string) => void;
	}
	& ColorStyleProp
	& DisabledProp
	& BorderlessProp
	& StyleProps;

export type TextAreaProps = TextAreaPropsBase
	& Omit<ComponentPropsWithRef<"textarea">, keyof TextAreaPropsBase>

/** Обертка вокруг `<textarea>`. Принимает также свойства `textarea`. */
export const TextArea = forwardRef<HTMLTextAreaElement>(({
															 colorStyle = "primary",
															 borderless = false,
															 disabled,
															 onChange,
															 className,
															 ...props
														 }: TextAreaProps, ref) => {


	const handleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => onChange?.(e.target.value), [onChange])

	return <textarea ref={ref} disabled={disabled} onChange={handleChange}
					 className={cx(`cs-${colorStyle}`, cssStyle.input, borderless && cssStyle.borderless, className)}
					 {...props} />

}) as FCR<TextAreaProps, HTMLTextAreaElement>

TextArea.displayName = "TextArea"