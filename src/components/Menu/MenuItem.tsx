import { FCR } from "../../types"
import { forwardRef } from "react"
import { MenuItemProps } from "./MenuItemProps"
import cssStyle from "./index.module.css"
import cx from "classix"

export type {MenuItemProps};

/** Элемент выпадающего меню [Menu](..?path=/docs/компоненты-menu--docs) */
export const MenuItem= forwardRef<HTMLLIElement, MenuItemProps>(({
                                                                                                         onClick,
                                                                                                         children,
                                                                                                         style,
                                                                                                         className
                                                                                                     }: MenuItemProps, ref) => {

    return (
        <li ref={ref} data-menuitem={true}
            onClick={e => {
                e.stopPropagation();
                onClick?.(e);
            }} style={style} className={cx(cssStyle.menuItem, className)}>
            {children}
        </li>
    )
}) as FCR<MenuItemProps, HTMLLIElement> ;

MenuItem.displayName = "MenuItem";