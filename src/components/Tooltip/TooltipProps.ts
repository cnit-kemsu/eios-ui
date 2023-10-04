import React, {ComponentPropsWithRef, MutableRefObject} from "react";
import {ChildrenProp, Css, StyleProps} from "../types";

export type TooltipProps = {
    /** ref элемента, относительно которого будет выводиться подсказка */
    targetElementRef: MutableRefObject<HTMLElement>,
    /** убрать стрелочку, указывающую на элемент `targetElementRef`*/
    hideArrow?: boolean;
    /** время задержки отображения подсказки в секундах */
    showDelay?: number;
    /** время задержки скрытия подсказки в секундах */
    hideDelay?: number;
    /** позиция относительно элемента `targetElementRef` */
    position?: "left" | "right" | "top" | "bottom";
} & StyleProps & ChildrenProp

