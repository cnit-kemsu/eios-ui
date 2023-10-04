import React from "react";
import {Table} from '../components/Table'
import {Meta, StoryObj} from "@storybook/react";
import {TableProps} from "../components/Table/TableProps";

export default {
    title: "Компоненты/Table",
    component: Table,
} as Meta<typeof Table>

export const Default : StoryObj<typeof Table> = {
    name: "Table",
    render: (props: TableProps) => (
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