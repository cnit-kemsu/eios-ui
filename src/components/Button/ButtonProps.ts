import React, {ComponentPropsWithoutRef} from "react";
import {ColorStyle, Css} from "../types";


type BaseButtonProps = {
    disabled?: boolean;
    flat?: boolean;
    stickOnHover?: boolean;
    colorStyle?: ColorStyle;
    transparent?: boolean;
    fillable?: boolean;
    borderless?: boolean;
    children?: React.ReactNode;
    css?: Css;
}

export type ButtonProps<C extends React.ElementType> =
    BaseButtonProps
    & { elementType?: C; }
    & Omit<ComponentPropsWithoutRef<C>, keyof BaseButtonProps | 'elementType'>;