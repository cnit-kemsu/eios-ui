import React from "react";
import {Checkbox} from '../components/Checkbox';
import {Meta, StoryObj} from "@storybook/react";

import 'material-icons/iconfont/material-icons.css';

export default {
    title: "Компоненты/Checkbox",
    component: Checkbox
} as Meta<typeof Checkbox>

export const Default: StoryObj<typeof Checkbox> = {
    name: "Checkbox",
    args: {children: "Я чекбокс"}
}