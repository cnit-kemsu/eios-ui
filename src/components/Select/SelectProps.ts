import React, {ComponentPropsWithRef} from "react";
import {Css, GetContent, GetSelectable, GetValue, ItemType, ValueType} from "../types";

export type SelectProps = {
    name?: string;
    open?: boolean;
    enableOutsideArea?: boolean;
    onClick?: React.MouseEventHandler;
    onOutsideClick?: React.MouseEventHandler;
    selectStyle?: React.CSSProperties;
    onChange?: (curValue: ValueType, item: ItemType, e: React.MouseEvent) => void;
    valueProp?: string;
    contentProp?: string;
    selectableProp?: string;
    getContent?: GetContent;
    getValue?: GetValue;
    getSelectable?: GetSelectable;
    disabled?: boolean;
    items?: ItemType[];
    value?: ValueType;
    size?: number;
    itemStyle?: React.CSSProperties;
    placeholder?: string;
    css?: Css;
    borderless?: boolean;
    flat?: boolean;
    fullWidth?: boolean;
    valueIsIndex?: boolean;
};

type BaseSelectCloseAreaProps = {
    open: boolean;
    setOpen: (value: boolean) => void;
    css?: Css;
};

export type SelectCloseAreaProps =
    Omit<ComponentPropsWithRef<'div'>, keyof BaseSelectCloseAreaProps>
    & BaseSelectCloseAreaProps;