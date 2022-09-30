import React, {ComponentPropsWithoutRef} from "react";
import {Css} from "../types";

type BaseRippleProps = {
    color?: string;
    duration?: string;
    containerStyle?: React.CSSProperties;
    rippleStyle?: React.CSSProperties;
    css?: Css;
    rippleCss?: Css;
    rippleClassName?: string;
};

export type RippleProps = BaseRippleProps & Omit<ComponentPropsWithoutRef<'div'>, keyof BaseRippleProps>;