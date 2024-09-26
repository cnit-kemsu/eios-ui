import { forwardRef } from "react"
import { useTheme } from "../../theme"
import { dynMessageCss } from "./style"
import type { MessageProps } from "./MessageProps"
import type { FCR } from "../../types"
import cx from "classix"

import style from "./index.module.css"

export type { MessageProps }

/** Для вывода сообщений разных типов. Принимает также все свойства `<div>`, передаваемый в корневой элемент. */
export const Message = forwardRef<HTMLDivElement, MessageProps>(({
																																	 children,
																																	 flat = false,
																																	 type = "info",
																																	 borderless = false,
																																	 className,
																																	 ...props
																																 }: MessageProps, ref) => {

	const theme = useTheme()

	return (
		<div ref={ref}
				 className={cx(style.message, className)}
				 css={dynMessageCss({ theme, flat, type, borderless })}
				 {...props}
		>
			{children}
		</div>
	)
}) as FCR<MessageProps, HTMLDivElement>

Message.displayName = "Message"
