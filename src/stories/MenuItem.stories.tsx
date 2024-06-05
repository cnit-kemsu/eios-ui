import type {Meta, StoryObj} from '@storybook/react';
import {MenuItem} from "../components/Menu/MenuItem.tsx";
import {Menu} from "../components/Menu";
import {MenuItemProps} from "../components/Menu/MenuItemProps.ts";
import {fn} from '@storybook/test';

const meta = {
    title: 'MenuItem',
    component: MenuItem,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: "MenuItem",
    args: {
        children: "Элемент меню",
        onClick: fn(),
    },
    render: (props: MenuItemProps) => (
        <Menu show>
            <MenuItem {...props}/>
        </Menu>
    )
}