import React, {forwardRef} from 'react'
import {toArray} from '../../utils'
import {useTheme} from '../../theme'
import {displayedMenuCss, dynMenuCss, dynMenuItemCss} from './style'
import {MenuItemProps, MenuProps} from "./MenuProps";

export const Menu = forwardRef<HTMLUListElement, MenuProps>(({
                                                                 show,
                                                                 x,
                                                                 y,
                                                                 flat,
                                                                 borderless,
                                                                 css,
                                                                 children,
                                                                 rootElement = document.body,
                                                                 ...props
                                                             }: MenuProps, ref) => {

    const theme = useTheme();

    /*return createPortal(
        <ul ref={ref} {...props}
            css={[dynMenuCss({theme, flat, borderless, x, y}), show && displayedMenuCss, ...toArray(css)]}>
            {children}
        </ul>,
        rootElement
    );*/

    return (
        <ul ref={ref} {...props}
            css={[dynMenuCss({theme, flat, borderless, x, y}), show && displayedMenuCss, ...toArray(css)]}>
            {children}
        </ul>
    )
});

Menu.displayName = "Menu";

export const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(({
                                                                      onClick,
                                                                      children,
                                                                      css,
                                                                      ...props
                                                                  }: MenuItemProps, ref) => {

    const theme = useTheme();

    return (
        <li ref={ref} data-menuitem={true} css={[dynMenuItemCss({theme}), ...toArray(css)]}
            onClick={e => {
                e.stopPropagation();
                onClick?.(e);
            }} {...props}>
            {children}
        </li>
    )
});

MenuItem.displayName = "MenuItem";