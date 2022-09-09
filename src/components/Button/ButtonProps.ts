import React from "react";
import {SerializedStyles} from '@emotion/react'

export type ButtonProps<ElType extends React.ElementType = "button"> = React.ComponentPropsWithoutRef<ElType> & {
    elementType: ElType;
    disabled?: boolean;
    flat?: boolean;
    stickOnHover?: boolean;
    colorStyle?: 'light' | 'dark' | 'primary' | 'secondary';
    transparent?: boolean;
    fillable?: boolean;
    borderless?: boolean;
    children?: React.ReactNode;
    css?: SerializedStyles | ((...args: any) => SerializedStyles) | [SerializedStyles | ((params: any) => SerializedStyles)];
};