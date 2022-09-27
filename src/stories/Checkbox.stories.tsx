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
    children: "Нажми меня"
}, "По умолчанию");

export const CheckboxWithHook = args => {
    const [checkbox, setChecked] = useCheckbox(false, () => alert('Тест'));
    return (
        <>
            <Checkbox {...args} {...checkbox}>Нажми меня</Checkbox>
            <div>
                <Button onClick={() => setChecked(false)}>Сброс</Button>
            </div>
        </>
    )
}

CheckboxWithHook.parameters = {
    docs: {
        source: {
            code: `args => {
    const [checkbox, setChecked] = useCheckbox(false, () => alert('Тест'));
    return (
        <>
            <Checkbox {...args} {...checkbox}>Нажми меня</Checkbox>
            <div>
                <Button onClick={() => setChecked(false)}>Сброс</Button>
            </div>
        </>
    )
}`,
            language: "tsx",
            type: "code"
        },
    },
};

CheckboxWithHook.storyName = "Checkbox с хуком useCheckbox"