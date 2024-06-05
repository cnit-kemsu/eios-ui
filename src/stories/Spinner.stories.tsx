import {Spinner} from '../components/Spinner';
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: 'Spinner',
    component: Spinner,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default :Story = {
    name: "Spinner",
    args: {
        style: {width: "4rem"}
    }
}