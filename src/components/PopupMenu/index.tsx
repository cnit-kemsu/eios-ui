import React, {forwardRef, ReactElement, ReactNode} from "react";
import {useTheme} from "../../theme";
import {toArray} from '../../utils'
import {Css} from "../types";
import {displayedMenuCss, dynMenuCss, dynMenuItemCss} from './style'

export type PopupMenuProps = {
    children?: ReactElement<PopupMenuItemProps>;
    flat?: boolean;
    borderless?: boolean;
    show?: boolean;
    css?: Css;
    anchorElement?: HTMLElement;
    x?: number;
    y?: number;
    style?: React.CSSProperties;
    className?: string;
}

export type PopupMenuItemProps = {
    children?: ReactNode,
    style?: React.CSSProperties;
    css?: Css;
    className?: string;
    onClick?: () => void;
}

export const PopupMenu = forwardRef<HTMLUListElement, PopupMenuProps>(({
                                                                           children,
                                                                           flat,
                                                                           borderless,
                                                                           show,
                                                                           css,
                                                                           anchorElement,
                                                                           x, y,
                                                                           ...props
                                                                       }: PopupMenuProps, ref) => {

    const theme = useTheme();

    return (
        <ul ref={ref} {...props}
            css={[dynMenuCss({theme, flat, borderless, x, y}), show && displayedMenuCss, ...toArray(css)]}>
            {children}
        </ul>
    )
});


PopupMenu.displayName = "PopupMenu";

export const PopupMenuItem = forwardRef<HTMLLIElement, PopupMenuItemProps>(({
                                                                                children,
                                                                                onClick,
                                                                                css,
                                                                                ...props
                                                                            }: PopupMenuItemProps, ref) => {
    const theme = useTheme();

    return (
        <li onClick={onClick && (() => onClick())} {...props} css={[dynMenuItemCss({theme}), ...toArray(css)]}>
            {children}
        </li>
    )
});

PopupMenuItem.displayName = "PopupMenuItem";