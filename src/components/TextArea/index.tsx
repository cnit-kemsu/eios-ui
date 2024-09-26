import { BorderlessProp, ColorStyleProp, DisabledProp, FCR, FlatProp, StyleProps } from "../../types"
import { ChangeEvent, ComponentPropsWithRef, forwardRef, useCallback } from "react"
import { useTheme } from "../../theme"
import { dynRootCss } from "../InputField/style"

import inputStyle from "../InputField/index.module.css"
import cx from "classix"

export type TextAreaPropsBase = {
		onChange?: (value: string) => void;
	}
	& ColorStyleProp
	& DisabledProp
	& FlatProp
	& BorderlessProp
	& StyleProps;

export type TextAreaProps = TextAreaPropsBase
	& Omit<ComponentPropsWithRef<"textarea">, keyof TextAreaPropsBase>

/** Обертка вокруг `<textarea>`. Принимает также свойства `textarea`. */
export const TextArea = forwardRef<HTMLTextAreaElement>(({
															 colorStyle = "secondary",
															 borderless = false,
															 flat = false,
															 onChange,
															 className,
															 ...props
														 }: TextAreaProps, ref) => {
	const theme = useTheme()

	const handleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => onChange?.(e.target.value), [onChange])

	return <textarea ref={ref}
					 css={dynRootCss({
						 theme, flat, borderless, colorStyle, textarea: true
					 })}
					 onChange={handleChange}
					 className={cx(inputStyle.input, className)}
					 {...props} />

}) as FCR<TextAreaProps, HTMLTextAreaElement>

TextArea.displayName = "TextArea"