import {ColorStyle, GetContent, GetSelectable, GetValue, ItemType, ValueType} from "../types";
import {ComponentPropsWithRef} from "react";

type ListPropsBase = {
    name?: string;
    items?: ItemType[];
    borderless?: boolean;
    flat?: boolean;
    colorStyle?: ColorStyle;
    valueIsIndex?: boolean;
    valueProp?: string;
    contentProp?: string;
    selectableProp?: string;
    getContent?: GetContent;
    getValue?: GetValue;
    getSelectable?: GetSelectable;
    value?: ValueType;
    disabled?: boolean;
    onChange?: (value: ValueType, item: ItemType) => void;
}

export type ListProps = ListPropsBase & Omit<ComponentPropsWithRef<'ul'>, keyof ListPropsBase>;