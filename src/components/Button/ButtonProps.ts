import React, {ComponentPropsWithRef} from "react";
import {ColorStyle, Css} from "../types";


type BaseButtonProps = {
    disabled?: boolean;
    /** кнопка будет плоской (без тени) */
    flat?: boolean;
    stickOnHover?: boolean;
    colorStyle?: ColorStyle;
    transparent?: boolean;
    fillable?: boolean;
    borderless?: boolean;
    children?: React.ReactNode;
}

export type ButtonProps<C extends React.ElementType> =
    BaseButtonProps
    & { elementType?: C; }
    & Omit<ComponentPropsWithRef<C>, keyof BaseButtonProps | 'elementType'>;