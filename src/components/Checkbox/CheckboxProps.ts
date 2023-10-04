import {ChildrenProp, ColorStyleProp, DisabledProp, NameProp, StyleProps, ValueProp} from "../types";
import {ComponentPropsWithRef} from "react";

export type CheckboxProps = {
        /** отметить чекбокс */
        checked?: boolean,
        /** обработчик нажатия на чекбокс */
        onClick?: () => void,
        ref?: ComponentPropsWithRef<'div'>['ref']
    }
    & ValueProp
    & NameProp
    & ColorStyleProp
    & DisabledProp
    & StyleProps
    & ChildrenProp;
