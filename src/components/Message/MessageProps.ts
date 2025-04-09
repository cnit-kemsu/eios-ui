import type { BorderlessProp, ChildrenProp } from "../../types"
import type { ComponentPropsWithRef } from "react"

export type MessageType = 'info' | 'darkInfo' | 'warning' | 'error' | 'success';

type BaseMessageProps = {
        type?: MessageType;
    }
    & ChildrenProp
    & BorderlessProp

export type MessageProps =
    BaseMessageProps
    & Omit<ComponentPropsWithRef<"div">, keyof BaseMessageProps>;