import React, {ComponentPropsWithRef, FC, PropsWithChildren} from "react";
import {Css, GetContent, GetSelectable, GetValue, ItemType, ValueType} from "../types";

type SelectPropsBase = {
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
    borderless?: boolean;
    flat?: boolean;
    fullWidth?: boolean;
    valueIsIndex?: boolean;
    width?: string;
    BeforeContentComponent?: FC<{item: ItemType}>;
    AfterContentComponent?: FC<{item: ItemType}>;
    ContentWrapper?: FC<PropsWithChildren<{item: ItemType}>>;
};

export type SelectProps = SelectPropsBase & Omit<ComponentPropsWithRef<'div'>, keyof SelectPropsBase>;