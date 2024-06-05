import {forwardRef} from 'react';
import {useTheme} from '../../theme';
import {dynMessageCss, messageCss} from './style';
import type {MessageProps} from "./MessageProps";
import type {FCR} from "../../types";

export type {MessageProps};

/** Для вывода сообщений разных типов. Принимает также все свойства `<div>`, передаваемый в корневой элемент. */
export const Message  = forwardRef<HTMLDivElement, MessageProps>(({
                                                                     children,
                                                                     flat = false,
                                                                     type = 'info',
                                                                     borderless = false,
                                                                     ...props
                                                                 }: MessageProps, ref) => {

    const theme = useTheme();

    return (
        <div ref={ref} {...props}
             css={[dynMessageCss({theme, flat, type, borderless}), messageCss]}>
            {children}
        </div>
    );
}) as FCR<MessageProps, HTMLDivElement>;

Message.displayName = "Message";
