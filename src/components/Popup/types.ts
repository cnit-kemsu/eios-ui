import {ComponentProps, MutableRefObject} from "react";
import {ChildrenProp, StyleProps} from "../../types";

export type PopupProps = {
    /** позиция относительно элемента `targetElementRef` */
    position?: PopupPositionType;
    /** отобразить подсказку */
    show?: boolean;
    /** ref элемента, относительно которого будет выводиться подсказка */
    targetElementRef?: MutableRefObject<HTMLElement | null>;
} & StyleProps & ChildrenProp & ComponentProps<'div'>;

export type PopupPositionType = "top" | "bottom" | "left" | "right";