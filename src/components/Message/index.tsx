import React, {forwardRef} from 'react'
import {useTheme} from '../../theme'
import {toArray} from '../../utils'
import {dynMessageCss} from './style'
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
             css={[dynMessageCss({theme, flat, type, borderless}), theme.message.style, ...toArray(css)]}>
            {children}
        </div>
    );
});

Message.displayName = "Message";
