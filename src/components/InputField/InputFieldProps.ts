import {BorderlessProp, ColorStyleProp, DisabledProp, FlatProp, ValueType} from "../../types";
import React, {ComponentPropsWithRef} from "react";

export type InputFieldPropsBase =
    ColorStyleProp
    & BorderlessProp
    & FlatProp
    & DisabledProp
    & {
    /** тип `<input>`, за исключением `submit`, `file`, `button` и `checkbox`. По умолчанию `text`. */
    type?: Omit<React.HTMLInputTypeAttribute, 'submit' | 'file' | 'button' | 'checkbox'>;
    onChange?: (value: ValueType) => void;
}

export type InputFieldProps = InputFieldPropsBase
    & Omit<ComponentPropsWithRef<'input'>, keyof InputFieldPropsBase>