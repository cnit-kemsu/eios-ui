import React, {forwardRef} from 'react'
import {useTheme} from '../../theme'
import {displayedMenuCss, dynMenuCloseAreaCss, dynMenuCss, dynMenuItemCss} from './style'
import type {MenuItemProps, MenuProps} from "./MenuProps";
import type {FCR} from "../types";

/** Выпадающее меню. В качестве дочерних элементов принимает [MenuItem](..?path=/docs/компоненты-menuitem--docs) */
export const Menu: FCR<MenuProps, HTMLUListElement> = forwardRef<HTMLUListElement, MenuProps>(({
                                                                                                   show,
                                                                                                   enableOutsideArea,
                                                                                                   x = 0,
                                                                                                   y = 0,
                                                                                                   flat = false,
                                                                                                   borderless = false,
                                                                                                   children,
                                                                                                   onOutsideClick,
                                                                                                   className,
                                                                                                   style
                                                                                               }: MenuProps, ref) => {

    const theme = useTheme();

    return (
        <>
            {enableOutsideArea && show && <div onClick={onOutsideClick} css={[dynMenuCloseAreaCss({theme})]}/>}
            <ul ref={ref} style={style} className={className}
                css={[dynMenuCss({theme, flat, borderless, x, y}), show && displayedMenuCss]}>
                {children}
            </ul>
        </>
    );
});

Menu.displayName = "Menu";

/** Элемент выпадающего меню [Menu](..?path=/docs/компоненты-menu--docs) */
export const MenuItem: FCR<MenuItemProps, HTMLLIElement> = forwardRef<HTMLLIElement, MenuItemProps>(({
                                                                                               onClick,
                                                                                               children,
                                                                                               style, className
                                                                                           }: MenuItemProps, ref) => {

    const theme = useTheme();

    return (
        <li ref={ref} data-menuitem={true} css={[dynMenuItemCss({theme})]}
            onClick={e => {
                e.stopPropagation();
                onClick?.(e);
            }} style={style} className={className}>
            {children}
        </li>
    )
});

MenuItem.displayName = "MenuItem";