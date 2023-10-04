import {forwardRef} from 'react'
import {useTheme} from '../../theme'
import {dynContentCss, dynRootCss, dynTitleCss} from './style'
import type {PaneProps} from "./PaneProps";
import type {FCR} from "../types";

/** Панель с заголовком и некоторым содержимым. Принимает все свойства `<div>`, которые передаются корневому элементу. */
export const Pane: FCR<PaneProps, HTMLDivElement> = forwardRef<HTMLDivElement, PaneProps>(({
                                                                                               flat = false,
                                                                                               borderless = false,
                                                                                               title,
                                                                                               children,
                                                                                               ...props
                                                                                           }: PaneProps, ref) => {

    const theme = useTheme()

    return (
        <div ref={ref} {...props} css={[dynRootCss({theme, flat, borderless})]}>
            {title && <h2 css={[dynTitleCss({theme})]}>{title}</h2>}
            <div css={dynContentCss({theme})}>{children}</div>
        </div>
    )
});

Pane.displayName = "Pane";