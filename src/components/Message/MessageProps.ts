import {Css} from "../types";
import React, {ComponentPropsWithRef} from "react";

type BaseMessageProps = {
    flat?: boolean;
    borderless?: boolean;
    type?: 'info' | 'warning' | 'error' | 'success';
    children?: React.ReactNode;
}
export type MessageProps =
    BaseMessageProps
    & Omit<ComponentPropsWithRef<"div">, keyof BaseMessageProps>;