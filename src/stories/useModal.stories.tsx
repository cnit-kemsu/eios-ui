import React from "react";
import {ComponentMeta} from "@storybook/react";
import {Modal} from '../components/Modal'
import {Button} from "../components/Button";
import {useModal} from "../index";

export const Example = () => {

    const [modal, setOpen] = useModal();

    return (
        <div style={{minHeight: "400px"}}>
            <Button onClick={() => setOpen(true)}>Открыть модальное окно</Button>
            <Modal {...modal} title="Заголовок" style={{width: "60%"}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam corporis illo laboriosam,
                libero quod ratione repellendus suscipit ut. Amet animi distinctio est facere libero nostrum odio sunt
                tenetur velit!
            </Modal>
        </div>
    )
}

Example.storyName = "useModal"

export default {
    title: "Хуки/useModal",
    component: Example,
} as ComponentMeta<typeof Example>