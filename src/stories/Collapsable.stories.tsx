import type { Meta, StoryObj } from "@storybook/react"
import { Collapsable } from "../components/Collapsable"

const meta = {
	title: 'Collapsable',
	component: Collapsable,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs']
} satisfies Meta<typeof Collapsable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	name: "Collapsable",
	args: {
		open: true,
		children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro praesentium quas quasi quod saepe. Aperiam dicta explicabo itaque laudantium magni similique. Culpa delectus doloribus fuga nemo obcaecati provident quos similique!',
	}
}
