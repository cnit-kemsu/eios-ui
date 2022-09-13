import React, {ComponentPropsWithoutRef, ComponentPropsWithRef} from "react";
import {SerializedStyles} from '@emotion/react'

type BaseButtonProps = {
    disabled?: boolean;
    flat?: boolean;
    stickOnHover?: boolean;
    colorStyle?: 'light' | 'dark' | 'primary' | 'secondary';
    transparent?: boolean;
    fillable?: boolean;
    borderless?: boolean;
    children?: React.ReactNode;
    css?: SerializedStyles | ((...args: any) => SerializedStyles) | [SerializedStyles | ((...args: any) => SerializedStyles)];
}

export type ButtonProps<C extends React.ElementType> =
    BaseButtonProps
    & { elementType?: C; }
    & Omit<ComponentPropsWithoutRef<C>, keyof BaseButtonProps | 'elementType'>;