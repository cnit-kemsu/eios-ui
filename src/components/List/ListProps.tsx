import {ColorStyle, Css} from "../types";

export type ValueType = string | number
export type ItemType = string | number | {[key: string]: string | number}

export type ListProps = {
    name?: string;
    items?: (string | number | {})[];
    borderless?: boolean;
    flat?: boolean;
    colorStyle?: ColorStyle;
    css?: Css;
    valueIsIndex?: boolean;
    valueProp?: string;
    contentProp?: string;
    selectableProp?: string;
    getContent?: (item: ItemType, contentProp: string, itemIndex: number) => string | number | null;
    getValue?: (item: ItemType, valueProp: string, itemIndex: number) => ValueType;
    getSelectable?: (item: ItemType, valueProp: string, itemIndex: number) => boolean;
    value?: ValueType;
    disabled?: boolean;
    onChange?: (value: ValueType, item: ItemType) => void;
}