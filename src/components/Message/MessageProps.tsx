import {Css} from "../types";
import React, {ComponentPropsWithRef} from "react";

type BaseMessageProps = {
    flat?: boolean;
    borderless?: boolean;
    css?: Css;
    type?: 'info' | 'warning' | 'error' | 'success';
    children?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
}
export type MessageProps =
    BaseMessageProps
    & Omit<ComponentPropsWithRef<"div">, keyof BaseMessageProps>;