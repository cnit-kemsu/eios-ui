import type { ForwardedRef, ReactElement } from "react"
import { forwardRef } from "react"
import { Ripple } from "../Ripple"
import type { FileInputProps } from "./FileInputProps"
import cx from "classix"

import cbStyle from "./index.module.css"
import btnStyle from "../Button/index.module.css"
import { getRippleColorFromColorStyle } from "../../utils.ts"

export type { FileInputProps }

export type FileInputComponent =
	((props: FileInputProps, ref?: ForwardedRef<HTMLDivElement>) => ReactElement | null)
	& { displayName?: string };

/** Обёртка вокруг `<input type='file'>`. */
export const FileInput = forwardRef<HTMLDivElement, FileInputProps>(({
																		 label,
																		 colorStyle = "primary",
																		 transparent = false,
																		 fillable = false,
																		 borderless = false,
																		 disabled = false,
																		 onChange,
																		 multiple = false,
																		 accept,
																		 style,
																		 className
																	 }: FileInputProps, ref) => {

	// <label> нужен для создания связи со скрытым <input>, чтобы при нажатии на него открывалось окно выбора файла
	return (
		<div ref={ref} style={style} className={cx(cbStyle.fileInput, className)}>
			<label className={cx(
				btnStyle.button,
				disabled && btnStyle.disabled,
				borderless && btnStyle.borderless,
				transparent && btnStyle.transparent,
				fillable && btnStyle.fillable,
				`cs-${colorStyle}`,
				className)}>
				<Ripple color={getRippleColorFromColorStyle(colorStyle)} />
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