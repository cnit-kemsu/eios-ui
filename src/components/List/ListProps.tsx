import {ColorStyle, Css} from "../types";

type ValueType = string | number
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
    getContent?: (item: string | number | {}, contentProp: string, itemIndex: number) => string | number | null;
    getValue?: (item: string | number | {}, valueProp: string, itemIndex: number) => ValueType;
    getSelectable?: (item: string | number | null | {}, valueProp: string, itemIndex: number) => boolean;
    value?: ValueType;
    disabled?: boolean;
    onChange?: (value: string | number | null, item: string | number | null | {}) => void;
}