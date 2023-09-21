import React, {ComponentPropsWithRef, ReactNode} from "react";

type ModalPropsBase = {
    open?: boolean;
    title?: string;
    onClose?: React.MouseEventHandler;
    children?: ReactNode;
    modalLayerDOMElement?: HTMLElement;
}

export type ModalProps = ModalPropsBase & Omit<ComponentPropsWithRef<"div">, keyof ModalPropsBase>;