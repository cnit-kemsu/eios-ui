import {ComponentPropsWithoutRef, ReactNode} from "react";
import {ColorStyle, Css} from "../types";

export type CheckboxProps = {
    children?: ReactNode,
    /** имя элемента формы */
    name?: string,
    colorStyle?: ColorStyle,
    /** если true, то чекбокс будет отключен для взаимодействия */
    disabled?: boolean,
    /** если true, то чекбокс будет отмечен */
    checked?: boolean,
    /** обработчик нажатия на чекбокс */
    onClick?: () => void,
    /** значение элемента формы */
    value?: string | number
} & Omit<ComponentPropsWithoutRef<'div'>, 'onClick'>