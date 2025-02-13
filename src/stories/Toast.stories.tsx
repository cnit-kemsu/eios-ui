import type { Meta, StoryObj } from "@storybook/react"

import { Toast } from "../components/Toast"

const meta = {
	title: "Toast",
	component: Toast,
	parameters: {
		layout: "centered"
	},
	tags: ["autodocs"],
	decorators: [
		Story => (
			<div style={{width: "800px", height: "400px"}}>
				<Story/>
			</div>
		)
	]
} satisfies Meta<typeof Toast>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	name: "Toast",
	args: {
		show: true,
		children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid architecto beatae cumque deserunt esse, est fugit hic libero magnam, minus molestiae natus non officiis praesentium repellat rerum unde voluptatibus?"
	}
}