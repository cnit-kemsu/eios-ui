import type { ForwardedRef, ReactElement } from "react"
import { forwardRef } from "react"
import { dynButtonCss } from "../Button/style"
import { Ripple } from "../Ripple"
import { useTheme } from "../../theme"
import type { FileInputProps } from "./FileInputProps"
import cx from "classix"

import cbStyle from "./index.module.css"
import buttonStyle from "../Button/index.module.css"

export type { FileInputProps }

export type FileInputComponent =
	((props: FileInputProps, ref?: ForwardedRef<HTMLDivElement>) => ReactElement | null)
	& { displayName?: string };

/** Обёртка вокруг `<input type='file'>`. */
export const FileInput = forwardRef<HTMLDivElement, FileInputProps>(({
																																			 label,
																																			 colorStyle = "dark",
																																			 transparent = false,
																																			 fillable = false,
																																			 borderless = false,
																																			 flat = false,
																																			 disabled = false,
																																			 onChange,
																																			 multiple = false,
																																			 accept, style, className
																																		 }: FileInputProps, ref) => {

	const theme = useTheme()
	const { colorStyles } = theme
	// <label> нужен для создания связи со скрытым <input>, чтобы при нажатии на него открывалось окно выбора файла
	return (
		<div ref={ref} style={style} className={cx(cbStyle.checkbox, className)}>
			<label className={cx(buttonStyle.button)} css={[dynButtonCss({
				theme, flat, disabled, colorStyle, transparent, fillable, borderless
			})]}>
				<Ripple color={colorStyles[colorStyle].ripple} />
				<span>{label}</span>
				<input onChange={e => onChange?.(e.target.files)}
							 multiple={multiple}
							 type="file"
							 accept={accept} />
			</label>
		</div>
	)
}) as FileInputComponent

FileInput.displayName = "FileInput"