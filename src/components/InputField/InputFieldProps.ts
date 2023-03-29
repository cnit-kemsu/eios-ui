import {ColorStyle, Css} from "../types";
import React, {ComponentPropsWithRef, InputHTMLAttributes, MutableRefObject, TextareaHTMLAttributes} from "react";

export type InputFieldPropsBase = {
    colorStyle?: ColorStyle;
    borderless?: boolean;
    flat?: boolean;
    filled?: boolean;
    css?: Css;
    type?: Omit<React.HTMLInputTypeAttribute, 'submit' | 'file' | 'button' | 'checkbox'>;
    onChange?: (value: string | number | undefined) => void;
    disabled?: boolean;
    ref?: MutableRefObject<HTMLInputElement & HTMLTextAreaElement>
}

export type InputFieldProps = InputFieldPropsBase & InputHTMLAttributes<HTMLInputElement>