import React, {ComponentPropsWithRef} from "react";
import {
    BorderlessProp,
    ColorStyleProp,
    DisabledProp,
    FillableProp,
    FlatProp,
    StickOnHoverProp,
    TransparentProp
} from "../types";

export type BaseButtonProps =
    DisabledProp
    & FlatProp
    & StickOnHoverProp
    & ColorStyleProp
    & TransparentProp
    & FillableProp
    & BorderlessProp

export type ButtonElementType<C extends React.ElementType> = {
    /** тип используемого внутри элемента. По умолчанию `button` */
    elementType?: C;
}

export type ButtonProps<C extends React.ElementType> =
    BaseButtonProps
    & ButtonElementType<C>
    & Omit<ComponentPropsWithRef<C>, keyof BaseButtonProps | 'elementType'>;