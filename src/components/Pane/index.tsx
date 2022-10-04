import React, {forwardRef} from 'react'
import {useTheme} from '../../theme'
import {toArray} from '../../utils'
import {dynContentCss, dynRootCss, dynTitleCss} from './style'
import {PaneProps} from "./PaneProps";


function _Pane({ flat, borderless, title, children, titleCss, css, ...props } : PaneProps, ref) {

    const theme = useTheme()

    return (
        <div ref={ref} {...props} css={[dynRootCss({ theme, flat, borderless }), ...toArray(css)]}>
            {title && <h3 css={[dynTitleCss({ theme }), ...toArray(titleCss)]}>{title}</h3>}
            <div css={dynContentCss({ theme })}>{children}</div>
        </div>
    )
}

export const Pane = forwardRef<HTMLDivElement, PaneProps>((_Pane));
Pane.displayName = "Pane";