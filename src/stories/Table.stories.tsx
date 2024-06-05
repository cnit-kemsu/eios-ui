import {Table} from '../components/Table';
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: 'Table',
    component: Table,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default : Story = {
    name: "Table",
    render: (props) => (
        <Table {...props}>
            <thead>
            <tr>
                <td>Заголовок 1</td>
                <td>Заголовок 2</td>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Столбец 1.1</td>
                <td>Заголовок 1.2</td>
            </tr>
            </tbody>
        </Table>
    )
}