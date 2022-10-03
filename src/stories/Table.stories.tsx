import React from "react";
import {Table} from '../components/Table'
import {ComponentMeta} from "@storybook/react";
import {TableProps} from "../components/Table/TableProps";
import {argTypes} from "./argTypes";

export default {
    title: "Компоненты/Table",
    component: Table,
    argTypes: {
        borderless: argTypes.borderless,
        flat: argTypes.flat,
        css: argTypes.css,
        selectableRows: {description: "строки при наведении будут выделяться"},
        selectableCell: {description: "ячейки при наведении будут выделяться"}
    }
} as ComponentMeta<typeof Table>

export const Default = (props: TableProps) => (
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
);

Default.storyName = "Table"