import {ColorStyle, Css} from "../types";
import React, {ComponentPropsWithRef} from "react";

type BaseSpinnerProps = {
    colorStyle?: ColorStyle;
    scale?: number;
    css?: Css;
    style?: React.CSSProperties;
    className?: string;
}

export type SpinnerProps =
    BaseSpinnerProps
    & Omit<ComponentPropsWithRef<'svg'>, keyof BaseSpinnerProps>;