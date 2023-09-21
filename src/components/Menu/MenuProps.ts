import React, {ComponentPropsWithRef, MouseEventHandler, ReactElement, ReactNode} from "react";

type MenuItemPropsBase = {
    onClick?: (e: React.MouseEvent<HTMLLIElement>) => void;
    children?: ReactNode;
}

export type MenuItemProps = MenuItemPropsBase & Omit<ComponentPropsWithRef<'li'>, keyof MenuItemPropsBase>

type MenuPropsBase = {
    show?: boolean;
    enableOutsideArea?: boolean;
    x?: number;
    y?: number;
    flat?: boolean;
    borderless?: boolean;
    children?: ReactElement<MenuItemProps> | ReactElement<MenuItemProps>[];
    onMouseEnter?: MouseEventHandler;
    onMouseLeave?: MouseEventHandler;
    onOutsideClick?: MouseEventHandler;
    rootElement?: HTMLElement;
}

export type MenuProps = MenuPropsBase & Omit<ComponentPropsWithRef<'ul'>, keyof MenuPropsBase>;

type BaseMenuCloseAreaProps = {
    show: boolean;
    setShow: (value: boolean) => void;
};

export type MenuCloseAreaProps =
    Omit<ComponentPropsWithRef<'div'>, keyof BaseMenuCloseAreaProps>
    & BaseMenuCloseAreaProps;