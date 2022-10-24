import React, {MutableRefObject} from "react";
import {Css} from "../types";

export type TooltipProps = {
    targetElementRef: MutableRefObject<HTMLElement>,
    css?: Css;
    children: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    hideArrow?: boolean;
    showDelay?: number;
    hideDelay?: number;
    position?: "left" | "right" | "top" | "bottom";
}