import React, {forwardRef} from 'react'
import {useTheme} from '../../theme'
import {toArray} from '../../utils'
import {dynMessageCss, messageCss} from './style'
import {MessageProps} from "./MessageProps";

export const Message : React.FC<MessageProps> = forwardRef<HTMLDivElement, MessageProps>(({
                                                                     children,
                                                                     flat,
                                                                     type,
                                                                     borderless,
                                                                     css,
                                                                     ...props
                                                                 }: MessageProps, ref) => {

    const theme = useTheme();

    return (
        <div ref={ref} {...props}
             css={[dynMessageCss({theme, flat, type, borderless}), messageCss, ...toArray(css)]}>
            {children}
        </div>
    );
});

Message.displayName = "Message";
