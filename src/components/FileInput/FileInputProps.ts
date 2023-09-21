import {ChangeEventHandler, ComponentPropsWithoutRef, MutableRefObject} from "react";
import {ColorStyle, Css} from "../types";

type BaseFileInputProps = {
    label?: string;
    colorStyle?: ColorStyle;
    transparent?: boolean;
    fillable?: boolean;
    borderless?: boolean;
    stickOnHover?: boolean;
    flat?: boolean;
    disabled?: boolean;
    inputRef?: MutableRefObject<HTMLInputElement>;
    multiple?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
export type FileInputProps =
    BaseFileInputProps
    & Omit<ComponentPropsWithoutRef<'input'>, keyof BaseFileInputProps | 'type'>;