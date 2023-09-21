import React, {forwardRef} from 'react'
import {toArray} from '../../utils'
import {useTheme} from '../../theme'
import {displayedMenuCss, dynMenuCloseAreaCss, dynMenuCss, dynMenuItemCss} from './style'
import type {MenuCloseAreaProps, MenuItemProps, MenuProps} from "./MenuProps";
import type {FCR} from "../types";

export const Menu: FCR<MenuProps, HTMLUListElement> = forwardRef<HTMLUListElement, MenuProps>(({
                                                                                                   show,
                                                                                                   enableOutsideArea,
                                                                                                   x = 0,
                                                                                                   y = 0,
                                                                                                   flat = false,
                                                                                                   borderless = false,
                                                                                                   children,
                                                                                                   rootElement = document.body,
                                                                                                   onOutsideClick,
                                                                                                   ...props
                                                                                               }: MenuProps, ref) => {

    const theme = useTheme();

    return (
        <>
            {enableOutsideArea && show && <div onClick={onOutsideClick} css={[dynMenuCloseAreaCss({theme})]}/>}
            <ul ref={ref} {...props}
                css={[dynMenuCss({theme, flat, borderless, x, y}), show && displayedMenuCss]}>
                {children}
            </ul>
        </>
    );
});

Menu.displayName = "Menu";

export const MenuItem: FCR<MenuItemProps, HTMLLIElement> = forwardRef<HTMLLIElement, MenuItemProps>(({
                                                                                               onClick,
                                                                                               children,
                                                                                               ...props
                                                                                           }: MenuItemProps, ref) => {

    const theme = useTheme();

    return (
        <li ref={ref} data-menuitem={true} css={[dynMenuItemCss({theme})]}
            onClick={e => {
                e.stopPropagation();
                onClick?.(e);
            }} {...props}>
            {children}
        </li>
    )
});

MenuItem.displayName = "MenuItem";

export const MenuCloseArea : FCR<MenuCloseAreaProps, HTMLDivElement> = forwardRef<HTMLDivElement, MenuCloseAreaProps>(({
                                                                                 show,
                                                                                 setShow,
                                                                                 onClick,
                                                                                 ...props
                                                                             }: MenuCloseAreaProps, ref) => {
    const theme = useTheme();

    const handleClick = e => {
        if (show) setShow(false);
        onClick?.(e);
    }

    return show
        ? <div onClick={handleClick} ref={ref} css={[dynMenuCloseAreaCss({theme})]} {...props}/>
        : null;
});

MenuCloseArea.displayName = "MenuCloseArea";