import {Message} from '../components/Message';
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: 'Message',
    component: Message,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: "Message",
    args: {
        children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid architecto beatae cumque deserunt esse, est fugit hic libero magnam, minus molestiae natus non officiis praesentium repellat rerum unde voluptatibus?"
    }
}