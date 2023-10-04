import {Meta, StoryObj} from "@storybook/react";
import {argTypes} from "./argTypes";
import {TextArea} from "../components/TextArea";

export default {
    title: "Компоненты/TextArea",
    component: TextArea,
    argTypes: {
        value: {
            control: {type: "text"}
        }
    }
} as Meta<typeof TextArea>

export const Default : StoryObj<typeof TextArea> = {
    name: "TextArea"
}