import {ComponentMeta} from "@storybook/react";
import {createStoryTemplate} from "./createStoryTemplate";
import {argTypes} from "./argTypes";
import {TextArea} from "../components/TextArea";
import {MutableRefObject, useRef} from "react";
import {css} from "@emotion/react";

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
} as ComponentMeta<typeof TextArea>

const Template = createStoryTemplate(TextArea)

export const Default = Template.createStory({}, "TextArea");