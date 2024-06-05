import {Tab} from '../components/Tabs/Tab';
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: 'Tab',
    component: Tab,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: "Tab",
    args: {
        children: "Вкладка"
    }
}