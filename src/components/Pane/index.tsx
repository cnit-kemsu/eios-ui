import React, {forwardRef} from 'react'
import {useTheme} from '../../theme'
import {toArray} from '../../utils'
import {dynContentCss, dynRootCss, dynTitleCss} from './style'
import {PaneProps} from "./PaneProps";

export const Pane : React.FC<PaneProps> = forwardRef<HTMLDivElement, PaneProps>(({
                                                               flat= false,
                                                               borderless= false, title, children,
                                                               titleCss, css, ...props
                                                           }: PaneProps, ref) => {

    const theme = useTheme()

    return (
        <div ref={ref} {...props} css={[dynRootCss({theme, flat, borderless}), ...toArray(css)]}>
            {title && <h2 css={[dynTitleCss({theme}), ...toArray(titleCss)]}>{title}</h2>}
            <div css={dynContentCss({theme})}>{children}</div>
        </div>
    )
});

Pane.displayName = "Pane";