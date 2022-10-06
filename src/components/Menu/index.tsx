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
                                                                 ...props
                                                             }: MenuProps, ref) => {

    const theme = useTheme();

    return (
        <ul ref={ref} {...props}
            css={[dynMenuCss({theme, flat, borderless, x, y}), show && displayedMenuCss, ...toArray(css)]}>
            {children}
        </ul>
    );
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
        <li data-menuitem css={[dynMenuItemCss({theme}), ...toArray(css)]}
            onClick={onClick} {...props}>
            {children}
        </li>
    )
});

MenuItem.displayName = "MenuItem";