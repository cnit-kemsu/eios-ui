import {ColorStyle, Css, GetContent, GetSelectable, GetValue, ItemType, ValueType} from "../types";



export type ListProps = {
    name?: string;
    items?: ItemType[];
    borderless?: boolean;
    flat?: boolean;
    colorStyle?: ColorStyle;
    css?: Css;
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