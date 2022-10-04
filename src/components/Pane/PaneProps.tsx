import {Css} from "../types";
import React, {ComponentPropsWithRef} from "react";

type BasePaneProps = {
    flat?: boolean;
    borderless?: boolean;
    title?: string;
    css?: Css;
    titleCss?: Css,
    children?: React.ReactNode;
    style?: React.CSSProperties;
    className: string;
}
export type PaneProps =
    BasePaneProps
    & Omit<ComponentPropsWithRef<"div">, keyof BasePaneProps>;