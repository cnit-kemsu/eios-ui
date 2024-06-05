import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import {Button} from '../components/Button';

const meta = {
    title: 'Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: "Button",
    args: {
        onClick: fn(),
        children: 'Я кнопка',
    }
}

export const LinkButton: Story = {
    name: "LinkButton",
    args: {
        elementType: "a",
        href: '/?path=/story/компоненты-button--button-link',
        children: "Я кнопка-ссылка"
    },
};

