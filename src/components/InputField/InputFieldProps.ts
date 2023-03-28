import {ColorStyle, Css} from "../types";
import React, {ComponentPropsWithRef, InputHTMLAttributes, MutableRefObject, TextareaHTMLAttributes} from "react";

export type InputFieldPropsBase = {
    colorStyle?: ColorStyle;
    borderless?: boolean;
    flat?: boolean;
    filled?: boolean;
    value?: string | number;
    defaultValue?: string | number;
    css?: Css;
    multiline?: boolean;
    type?: Omit<React.HTMLInputTypeAttribute, 'submit' | 'file' | 'button' | 'checkbox'>;
    onChange?: (value: string | number | undefined) => void;
    style?: React.CSSProperties;
    className?: string;
    disabled?: boolean;
    placeholder?: string;
    name?: string;
    ref?: MutableRefObject<HTMLInputElement&HTMLTextAreaElement>
}

export type InputFieldProps =
    InputFieldPropsBase & InputHTMLAttributes<HTMLInputElement> & TextareaHTMLAttributes<HTMLTextAreaElement>