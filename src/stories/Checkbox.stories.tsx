import React from "react";
import {Checkbox} from '../components/Checkbox'
import {ComponentMeta} from "@storybook/react";
import {createStoryTemplate} from "./createStoryTemplate";

import 'material-icons/iconfont/material-icons.css';
import {Button, useCheckbox} from "../index";

export default {
    title: "Компоненты/Checkbox",
    component: Checkbox
} as ComponentMeta<typeof Checkbox>

const Template = createStoryTemplate(Checkbox)

export const Default = Template.createStory({
    children: "Я чекбокс"
}, "Checkbox");