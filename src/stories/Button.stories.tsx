import {Button} from "../components/Button";
import {ComponentMeta} from "@storybook/react";
import {createStoryTemplate} from "./createStoryTemplate";

export default {
    title: "Компоненты/Button",
    component: Button
} as ComponentMeta<typeof Button>

const Template = createStoryTemplate(Button);

export const Default = Template.createStory({
    children: "Нажми меня"
}, "По умолчанию");

Default.argTypes = {
    onClick: { action: 'clicked' }
}

export const ButtonWithLink = Template.createStory({
    elementType: 'a',
    href: '/',
    children: "Я ссылка"
}, "Button с ссылкой, в качестве элемента");