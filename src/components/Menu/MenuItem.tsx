import {FCR} from "../../types";
import {forwardRef} from "react";
import {useTheme} from "../../theme";
import {dynMenuItemCss} from "./style";
import {MenuItemProps} from "./MenuItemProps";

export type {MenuItemProps};

/** Элемент выпадающего меню [Menu](..?path=/docs/компоненты-menu--docs) */
export const MenuItem= forwardRef<HTMLLIElement, MenuItemProps>(({
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
}) as FCR<MenuItemProps, HTMLLIElement> ;

MenuItem.displayName = "MenuItem";