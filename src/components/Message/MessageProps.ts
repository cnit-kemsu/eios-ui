import {BorderlessProp, ChildrenProp, FlatProp} from "../types";
import {ComponentPropsWithRef} from "react";

type BaseMessageProps = {
        type?: 'info' | 'warning' | 'error' | 'success';
    }
    & ChildrenProp
    & BorderlessProp
    & FlatProp

export type MessageProps =
    BaseMessageProps
    & Omit<ComponentPropsWithRef<"div">, keyof BaseMessageProps>;