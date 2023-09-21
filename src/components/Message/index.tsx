import {forwardRef} from 'react';
import {useTheme} from '../../theme';
import {dynMessageCss, messageCss} from './style';
import type {MessageProps} from "./MessageProps";
import type {FCR} from "../types";

export const Message : FCR<MessageProps, HTMLDivElement> = forwardRef<HTMLDivElement, MessageProps>(({
                                                                     children,
                                                                     flat,
                                                                     type,
                                                                     borderless,
                                                                     ...props
                                                                 }: MessageProps, ref) => {

    const theme = useTheme();

    return (
        <div ref={ref} {...props}
             css={[dynMessageCss({theme, flat, type, borderless}), messageCss]}>
            {children}
        </div>
    );
});

Message.displayName = "Message";
