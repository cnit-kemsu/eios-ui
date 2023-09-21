import {Css} from "../types";
import React, {ComponentPropsWithRef} from "react";

type BasePaneProps = {
    flat?: boolean;
    borderless?: boolean;
    title?: string;
    titleCss?: Css,
    children?: React.ReactNode;
}
export type PaneProps =
    BasePaneProps
    & Omit<ComponentPropsWithRef<"div">, keyof BasePaneProps>;