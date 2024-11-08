import {BorderlessProp, ChildrenProp, FlatProp} from "../../types";
import {ComponentPropsWithRef} from "react";

export type MessageType = 'info' | 'darkInfo' | 'warning' | 'error' | 'success';

type BaseMessageProps = {
        type?: MessageType;
    }
    & ChildrenProp
    & BorderlessProp
    & FlatProp

export type MessageProps =
    BaseMessageProps
    & Omit<ComponentPropsWithRef<"div">, keyof BaseMessageProps>;