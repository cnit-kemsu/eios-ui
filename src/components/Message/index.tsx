import { forwardRef } from "react"
import type { MessageProps, MessageType } from "./MessageProps"
import type { FCR } from "../../types"
import cx from "classix"

import cssStyle from "./index.module.css"

export type { MessageProps, MessageType }

/** Для вывода сообщений разных типов. Принимает также все свойства `<div>`, передаваемый в корневой элемент. */
export const Message = forwardRef<HTMLDivElement, MessageProps>(({
																																	 children,
																																	 type = "info",
																																	 className,
																																	 ...props
																																 }: MessageProps, ref) => {

	return (
		<div ref={ref}
				 className={cx(`message-bg-${type}`, `message-color-${type}`, cssStyle.message, className)}
				 {...props}
		>
			{children}
		</div>
	)
}) as FCR<MessageProps, HTMLDivElement>

Message.displayName = "Message"
