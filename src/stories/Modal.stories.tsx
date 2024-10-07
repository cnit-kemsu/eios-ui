import type {Meta, StoryObj} from '@storybook/react';
import {Modal} from "../components/Modal";
import 'material-icons/iconfont/material-icons.css';
import {useModal} from "../hooks/useModal";
import {Button} from "../components/Button";

const meta = {
    title: 'Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [
        Story => (
            <div style={{width: "800px", height: "400px"}}>
                <Story/>
            </div>
        )
    ]
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: "Modal",
    args: {
        title: "Заголовок",
        open: true,
        style: {
            width: "300px"
        },
        children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cumque cupiditate, debitis doloremque dolores in ipsa porro quaerat quasi reiciendis sit temporibus? Aut consequuntur explicabo fugiat perferendis porro praesentium similique."
    }
}

export const UseModal: Story = {
    name: "Хук useModal",
    render: () => {

        const [modal, setOpen] = useModal();

        return (
            <div style={{minHeight: "400px"}}>
                <Button onClick={() => setOpen(true)}>Открыть модальное окно</Button>
                <Modal {...modal} title="Заголовок" style={{width: "60%"}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam corporis illo
                    laboriosam,
                    libero quod ratione repellendus suscipit ut. Amet animi distinctio est facere libero nostrum odio
                    sunt
                    tenetur velit!
                </Modal>
            </div>
        )
    }
}