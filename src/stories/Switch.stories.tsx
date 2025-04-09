import type {Meta, StoryObj} from '@storybook/react';
import {Switch} from '../components/Switch';
import {useCheckbox} from "../hooks/useCheckbox";
import {Button} from "../components/Button";

import 'material-icons/iconfont/material-icons.css';

const meta = {
	title: 'Switch',
	component: Switch,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs']
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	name: "Switch"
}

export const UseCheckbox: Story = {
	name: "Хук useCheckbox",
	render: () => {
		const [checkbox, setCheckbox] = useCheckbox(false);

		return (
			<div style={{display: "flex", gap: "1rem"}}>
				<Button onClick={() => setCheckbox(false)}>Сбросить</Button>
				<Switch {...checkbox}>
					Я переключатель
				</Switch>
			</div>
		)
	}
}