import React from "react";
import {InputField} from '../components/InputField'
import {ComponentMeta} from "@storybook/react";
import {createStoryTemplate} from "./createStoryTemplate";
import {argTypes} from "./argTypes";

export default {
    title: "Компоненты/InputField",
    component: InputField,
    argTypes: {
        type: {
            options: ['color', 'date', 'datetime-local', 'email', 'hidden', 'image', 'month', 'number',
                'password', 'range', 'reset', 'search', 'tel', 'text', 'time', 'url', 'week'],
            control: {type: 'select'}
        },
        value: {
            control: {type: "text"}
        },
        css: argTypes.css,
        disabled: argTypes.disabled,
        colorStyle: argTypes.colorStyle,
        borderless: argTypes.borderless,
        flat: argTypes.flat
    }
} as ComponentMeta<typeof InputField>

const Template = createStoryTemplate(InputField)

export const Default = Template.createStory({}, "InputField");