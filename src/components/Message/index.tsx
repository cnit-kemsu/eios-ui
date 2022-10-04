import React, {forwardRef} from 'react'
import {useTheme} from '../../theme'
import {toArray} from '../../utils'
import {dynMessageCss} from './style'
import {MessageProps} from "./MessageProps";

function _Message({ children, flat, type, borderless, css, ...props } : MessageProps, ref) {

    const theme = useTheme();

    return (
        <div ref={ref} {...props} css={[dynMessageCss({ theme, flat, type, borderless }), theme.message.style, ...toArray(css)]}>
            {children}
        </div>
    )
}

export const Message = forwardRef<HTMLDivElement, MessageProps>(_Message);
Message.displayName = "Message";
