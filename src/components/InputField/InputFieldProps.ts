import {BorderlessProp, ColorStyle, ColorStyleProp, Css, DisabledProp, FlatProp} from "../types";
import React, {ComponentPropsWithRef, InputHTMLAttributes, MutableRefObject, TextareaHTMLAttributes} from "react";

export type InputFieldPropsBase =
    ColorStyleProp
    & BorderlessProp
    & FlatProp
    & DisabledProp
    & {
    /** тип `<input>`, за исключением `submit`, `file`, `button` и `checkbox`. По умолчанию `text`. */
    type?: Omit<React.HTMLInputTypeAttribute, 'submit' | 'file' | 'button' | 'checkbox'>;
    onChange?: (value: string | number | undefined) => void;
}

export type InputFieldProps = InputFieldPropsBase
    & Omit<ComponentPropsWithRef<'input'>, keyof InputFieldPropsBase>