import {Meta, StoryObj} from "@storybook/react";
import {argTypes} from "./argTypes";
import {TextArea} from "../components/TextArea";

export default {
    title: "Компоненты/TextArea",
    component: TextArea,
    argTypes: {
        value: {
            control: {type: "text"}
        },
        css: argTypes.css,
        disabled: argTypes.disabled,
        colorStyle: argTypes.colorStyle,
        borderless: argTypes.borderless,
        flat: argTypes.flat,
    }
} as Meta<typeof TextArea>

export const Default : StoryObj<typeof TextArea> = {
    name: "TextArea"
}