import React, {ComponentPropsWithRef, CSSProperties} from "react";
import {ChildrenProp, ColorStyleProp} from "../types";

export type ModalProps = {
    /** отобразить окно */
    open?: boolean;
    /** заголовок окна */
    title?: string;
    onClose?: React.MouseEventHandler;
    /** стиль, который применится к корневому элементу самого окна */
    style?: CSSProperties;
    /** css-классы, которые применятся к корневому элементу самого окна */
    className?: string;
    ref?: ComponentPropsWithRef<'div'>['ref'];
}
& ColorStyleProp
& ChildrenProp;