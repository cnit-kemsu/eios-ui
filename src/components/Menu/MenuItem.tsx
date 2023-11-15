import {FCR} from "../types";
import React, {forwardRef} from "react";
import {useTheme} from "../../theme";
import {dynMenuItemCss} from "./style";
import {MenuItemProps} from "./MenuItemProps";

/** Элемент выпадающего меню [Menu](..?path=/docs/компоненты-menu--docs) */
export const MenuItem: FCR<MenuItemProps, HTMLLIElement> = forwardRef<HTMLLIElement, MenuItemProps>(({
                                                                                                         onClick,
                                                                                                         children,
                                                                                                         style,
                                                                                                         className
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