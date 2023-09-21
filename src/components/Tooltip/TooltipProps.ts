import React, {ComponentPropsWithRef, MutableRefObject} from "react";
import {Css} from "../types";

type TooltipPropsBase = {
    targetElementRef: MutableRefObject<HTMLElement>,
    children: React.ReactNode;
    hideArrow?: boolean;
    showDelay?: number;
    hideDelay?: number;
    position?: "left" | "right" | "top" | "bottom";
}

export type TooltipProps = TooltipPropsBase & Omit<ComponentPropsWithRef<"div">, keyof TooltipPropsBase>;