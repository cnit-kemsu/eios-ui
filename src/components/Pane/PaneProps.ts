import type { FlatProp } from "../../types"
import type { ReactNode, ComponentPropsWithRef } from "react"

type BasePaneProps = {
    title?: string;
    children?: ReactNode;
}
& FlatProp

export type PaneProps =
    BasePaneProps
    & Omit<ComponentPropsWithRef<"div">, keyof BasePaneProps>;