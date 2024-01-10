import React, {useState} from "react";
import {Modal} from '../components/Modal'
import {Meta, StoryObj} from "@storybook/react";
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
        onClose: {control: {type: null}}
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