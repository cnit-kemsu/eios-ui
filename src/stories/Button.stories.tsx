import {Button} from "../components/Button";
import {Meta, StoryObj} from "@storybook/react";
import {BaseButtonProps, ButtonProps} from "../components/Button/ButtonProps";

export default {
    title: "Компоненты/Button",
    component: Button
} as Meta<typeof Button>

type Story = StoryObj<typeof Button>;

/** Кнопка с `elementType` по умолчанию */
export const Default: Story = {
    name: "По умолчанию",
    render: (props: BaseButtonProps) => <Button {...props} onClick={() => alert("Привет!")}>Нажми меня</Button>,
}

/** Кнопка, использующая `<a>` в качестве `elementType` */
export const ButtonWithLink: Story = {
    name: "Кнопка-ссылка",
    args: {
        elementType: 'a',
        href: '/',
        children: "Я кнопка-ссылка"
    }
}