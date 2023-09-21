import React, {useState} from "react";
import {Modal} from '../components/Modal'
import {Meta, StoryObj} from "@storybook/react";
import {argTypes} from "./argTypes";
import {ModalProps} from "../components/Modal/ModalProps";
import {Button} from "../components/Button";

import 'material-icons/iconfont/material-icons.css';

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
} as Meta<typeof Modal>

export const Default : StoryObj<typeof Modal> = {
    name: "Modal",
    render: (props: Omit<ModalProps, 'open' | 'onClose'>) => {

        const [open, setOpen] = useState(false);
        const handleClose = () => setOpen(false);

        delete (props as any).onClose;

        return (
            <div style={{minHeight: "400px"}}>
                <Button onClick={() => setOpen(true)}>Открыть модальное окно</Button>
                <Modal open={open} onClose={handleClose} {...props} />
            </div>
        )
    }
}