import {Button} from "../components/Button";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: "Компоненты/Button",
    component: Button
} as ComponentMeta<typeof Button>

const Template : ComponentStory<typeof Button> = args => <Button {...args}/>;

export const Default = Template.bind({});
Default.args = {
    children: "Нажми меня"
};

export const ButtonWithLink = Template.bind({});
ButtonWithLink.args = {
    elementType: 'a',
    href: '/',
    children: "Я ссылка"
};