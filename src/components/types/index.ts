import {SerializedStyles} from "@emotion/react";
import React, {ForwardedRef, ReactElement} from "react";
import {InputFieldProps} from "../InputField/InputFieldProps";

export type ColorStyle = 'light' | 'dark' | 'primary' | 'secondary';

export type Css = SerializedStyles | (SerializedStyles | null | undefined)[];

export type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>["ref"];

export type Point = { x: number, y: number };

export type ValueType = string | number;
export type ItemType = string | number | { [key: string]: any };

export type GetContent = (item: ItemType, contentProp: string) => string | number | JSX.Element | null;
export type GetValue = (item: ItemType, valueProp: string, itemIndex: number) => ValueType;
export type GetSelectable = (item: ItemType, valueProp: string, itemIndex: number) => boolean;

export type FCR<P,R> = ((props: P, ref?: ForwardedRef<R>) => (ReactElement | null))
    & { displayName?: string }