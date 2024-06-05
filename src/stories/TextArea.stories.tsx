import {TextArea} from '../components/TextArea';
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: 'TextArea',
    component: TextArea,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default : Story = {
    name: "TextArea"
}