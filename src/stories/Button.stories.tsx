import React from "react";
import {Button} from "../components/Button";
import {ComponentMeta} from "@storybook/react";
import {createStoryTemplate} from "./createStoryTemplate";
import {argTypes} from "./argTypes";
import {dedent} from "ts-dedent";

export default {
    title: "Компоненты/Button",
    component: Button,
    argTypes: {
        disabled: argTypes.disabled,
        colorStyle: argTypes.colorStyle,
        css: argTypes.css,
        elementType: argTypes.elementType,
        stickOnHover: argTypes.stickOnHover,
        fillable: argTypes.fillable,
        flat: argTypes.flat,
        borderless: argTypes.borderless,
        transparent: argTypes.transparent
    },
    parameters: {
        docs: {
            description: {
                component: dedent`Кнопка. По умолчанию представляет собой обертку вокруг \`button\`.`
            }
        }
    }
} as ComponentMeta<typeof Button>

const Template = createStoryTemplate(Button);

export const Default = Template.createStory({
    children: "Я кнопка"
}, "Кнопка");

Default.argTypes = {
    onClick: {action: 'clicked', description: "событие клика по кнопке"}
}

export const ButtonWithLink = Template.createStory({
    elementType: 'a',
    href: '/',
    children: "Я кнопка-ссылка"
}, "Кнопка-ссылка");