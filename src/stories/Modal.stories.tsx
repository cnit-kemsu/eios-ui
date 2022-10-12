import React, {useState} from "react";
import {Modal} from '../components/Modal'
import {ComponentMeta} from "@storybook/react";
import {argTypes} from "./argTypes";
import {ModalProps} from "../components/Modal/ModalProps";
import {Button} from "../components/Button";

export default {
    title: "Компоненты/Modal",
    component: Modal,
    args: {
        title: "Заголовок",
        children: `Содержимое модального окна`
    },
    argTypes: {
        css: argTypes.css,
        style: argTypes.style,
        className: argTypes.className,
        onClose: {description: "событие клика по кнопке закрытия", control: {type: null}},
        open: {description: "отобразить модальное окно", control: {type: null}},
        modalLayerDOMElement: {description: "DOM-элемент, внутри которого будет отрисовано модальное окно"}
    }
} as ComponentMeta<typeof Modal>

export const Default = (props: Omit<ModalProps, 'open' | 'onClose'>) => {

    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    delete (props as any).onClose;

    return (
        <>
            <Button onClick={() => setOpen(true)}>Открыть модальное окно</Button>
            <Modal open={open} onClose={handleClose} {...props} />
        </>
    )
}

Default.storyName = "Modal"