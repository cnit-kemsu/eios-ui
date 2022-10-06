import React, {MouseEventHandler, MutableRefObject, ReactElement, ReactNode} from "react";
import {Css} from "../types";

export type MenuItemProps = {
    onClick?: (e : React.MouseEvent<HTMLLIElement>) => void;
    children?: ReactNode,
    css?: Css,
    style?: React.CSSProperties,
    className?: string
}
export type MenuProps = {
    show?: boolean;
    x?: number;
    y?: number;
    flat?: boolean;
    borderless?: boolean;
    css?: Css,
    children?: ReactElement<MenuItemProps> | ReactElement<MenuItemProps>[],
    style?: React.CSSProperties,
    className?: string,
    onMouseEnter?: MouseEventHandler;
    onMouseLeave?: MouseEventHandler;
}