import type {Meta, StoryObj} from '@storybook/react';
import {Checkbox} from '../components/Checkbox';
import {useCheckbox} from "../hooks/useCheckbox.ts";
import {Button} from "../components/Button";

import 'material-icons/iconfont/material-icons.css';

const meta = {
    title: 'Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: "Checkbox",
    args: {children: "Я чекбокс"}
}

export const UseCheckbox: Story = {
    name: "Хук useCheckbox",
    render: () => {
        const [checkbox, setCheckbox] = useCheckbox(false);

        return (
            <div style={{display: "flex", gap: "1rem"}}>
                <Button onClick={() => setCheckbox(false)}>Сбросить</Button>
                <Checkbox {...checkbox}>
                    Я чекбокс
                </Checkbox>
            </div>
        )
    }
}