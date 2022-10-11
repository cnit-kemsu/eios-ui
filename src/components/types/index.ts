import {SerializedStyles} from "@emotion/react";
import React from "react";

export type ColorStyle = 'light' | 'dark' | 'primary' | 'secondary';

export type Css =
    SerializedStyles
    | ((...args: any) => SerializedStyles)
    | [SerializedStyles | ((...args: any) => SerializedStyles)];

export type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>["ref"];

export type Point = { x: number, y: number };