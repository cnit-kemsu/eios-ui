import {ColorStyle, Css} from "../types";
import React, {ChangeEventHandler, MutableRefObject} from "react";

export type InputFieldProps = {
    colorStyle?: ColorStyle;
    borderless?: boolean;
    flat?: boolean;
    filled?: boolean;
    value?: string | number;
    css?: Css;
    multiline?: boolean;
    type?: Omit<React.HTMLInputTypeAttribute, 'submit' | 'file' | 'button' | 'checkbox'>;
    onChange?: (value : string | number | undefined) => void;
    style?: React.CSSProperties;
    className?: string;
    disabled?: boolean;
    placeholder?: string;
}