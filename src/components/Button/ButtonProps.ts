import { ComponentPropsWithRef, ElementType } from "react"
import { BorderlessProp, ColorStyleProp, DisabledProp, FillableProp, TransparentProp } from "../../types"

export type BaseButtonProps =
    DisabledProp
    & ColorStyleProp
    & TransparentProp
    & FillableProp
    & BorderlessProp

export type ButtonElementType<C extends ElementType> = {
    /** тип используемого внутри элемента. По умолчанию `button` */
    elementType?: C;
}

export type ButtonProps<C extends ElementType> =
    BaseButtonProps
    & ButtonElementType<C>
    & Omit<ComponentPropsWithRef<C>, keyof BaseButtonProps | 'elementType'>;