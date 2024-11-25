import { Message, MessageProps } from "../Message"
import cx from "classix"

import cssStyle from "./index.module.css"

export type ToastProps = MessageProps & {
	show: boolean;
}

/**
 * Всплывающее сообщение. Используется для небольших уведомлений. Появляется сверху
 */
export function Toast({ show, children, ...props } : ToastProps){
	return <Message className={cx(cssStyle.toast, show && cssStyle.show)} {...props}>
		{children}
	</Message>
}