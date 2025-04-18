import { ComponentPropsWithRef, MouseEventHandler, ReactElement } from "react"
import { StyleProps } from "../../types"
import { MenuItemProps } from "./MenuItemProps"

export type MenuProps = {
        /** показать меню */
        show?: boolean;
        /** выводить скрытую область позади меню, растянутую на всю страницу.
         * Используется для определения нажатия за пределами меню. */
        enableOutsideArea?: boolean;
        /** абсолютная позиция по x */
        x?: number;
        /** абсолютная позиция по y */
        y?: number;
        children?: ReactElement<MenuItemProps> | ReactElement<MenuItemProps>[];
        onMouseEnter?: MouseEventHandler;
        onMouseLeave?: MouseEventHandler;
        onOutsideClick?: MouseEventHandler;
        ref?: ComponentPropsWithRef<'ul'>['ref']
    }
    & StyleProps;