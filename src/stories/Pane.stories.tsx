import {Pane} from '../components/Pane';
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: 'Pane',
    component: Pane,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof Pane>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: "Pane",
    args: {
        title: "Заголовок",
        children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid architecto beatae cumque deserunt esse, est fugit hic libero magnam, minus molestiae natus non officiis praesentium repellat rerum unde voluptatibus?"
    }
}