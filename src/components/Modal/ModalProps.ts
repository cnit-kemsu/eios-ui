import React, {ReactNode} from "react";
import {Css} from "../types";

export type ModalProps = {
    open?: boolean;
    title?: string;
    onClose?: React.MouseEventHandler;
    children?: ReactNode;
    css?: Css;
    modalLayerDOMElement?: HTMLElement;
    style?: React.CSSProperties;
    className?: string;
}