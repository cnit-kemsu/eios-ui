import React from "react";
import {InputField} from '../components/InputField'
import {Meta, StoryObj} from "@storybook/react";

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
        }
    }
} as Meta<typeof InputField>

type Story = StoryObj<typeof InputField>;

export const Default: Story = {
    name: "InputField"
}