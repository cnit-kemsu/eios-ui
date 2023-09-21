import {Button} from "../components/Button";
import {Meta, StoryObj} from "@storybook/react";
import {argTypes} from "./argTypes";
import {dedent} from "ts-dedent";

export default {
    title: "Компоненты/Button",
    component: Button,
    argTypes: {
        disabled: argTypes.disabled,
        colorStyle: argTypes.colorStyle,
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
} as Meta<typeof Button>

type Story = StoryObj<typeof Button>;

/** Обычная кнопка */
export const Default: Story = {
    name: "По умолчанию",
    args: {children: "Я кнопка"},
    argTypes: {onClick: {action: 'clicked', description: "событие клика по кнопке"}}
}

/** Ссылка, выглядящая как кнопка */
export const ButtonWithLink: Story = {
    name: "Кнопка-ссылка",
    args: {
        elementType: 'a',
        href: '/',
        children: "Я кнопка-ссылка"
    }
}