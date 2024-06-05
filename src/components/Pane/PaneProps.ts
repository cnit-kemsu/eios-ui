import {BorderlessProp, FlatProp} from "../../types";
import React, {ComponentPropsWithRef} from "react";

type BasePaneProps = {
    title?: string;
    children?: React.ReactNode;
}
& FlatProp
& BorderlessProp

export type PaneProps =
    BasePaneProps
    & Omit<ComponentPropsWithRef<"div">, keyof BasePaneProps>;