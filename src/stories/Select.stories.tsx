import React from 'react';
import {Select} from "../components/Select";
import {Meta, StoryObj} from "@storybook/react";

import 'material-icons/iconfont/material-icons.css';

export default {
    title: "Компоненты/Select",
    component: Select,
    argTypes: {
        onChange: {control: {type: null}},
        onClick: {control: {type: null}},
        onOutsideClick: {control: {type: null}}
    },
    decorators: [
        (Story) => <div style={{height: "10em"}}>{Story()}</div>
    ]
} as Meta<typeof Select>

type Story = StoryObj<typeof Select>;

export const Example1: Story = {
    name: "Пример 1",
    args: {
        open: true,
        items: [
            {value: 'item0', content: "Элемент 1"},
            {value: 'item1', content: "Элемент 2"},
            {value: 'item2', content: "Элемент 3"}
        ],
        value: 'item1'
    }
}

export const Example2: Story = {
    name: "Пример 2",
    render: () => (
        <Select
            open
            items={["Элемент 1", "Элемент 2", "Элемент 3"]}
            value={1}
            contentProp={item => item}
            valueIsIndex
        />
    )

}

export const Example3: Story = {
    name: "Пример 3",
    args: {
        items: [{id: 'item0', name: "Элемент 1"}, {id: 'item1', name: "Элемент 2"}, {id: 'item2', name: "Элемент 3"}],
        value: 'item1',
        valueProp: "id",
        contentProp: "name"
    }
}

export const Example4: Story = {
    name: "Пример 4",
    render: () => (
        <Select
            open
            items={[{id: 'item0', name: "Элемент 1"}, {id: 'item1', name: "Элемент 2"}, {
                id: 'item2',
                name: "Элемент 3"
            }]}
            value='item1'
            valueProp={item => item.id}
            contentProp={item => item.name}
        />
    )
}

export const Example5: Story = {
    name: "Пример 5",
    render: () => {
        return (
            <Select
                value=""
                fullWidth
                placeholder="- Выберите элемент -"
                items={[
                    {value: "item1", content: "Элемент 1"},
                    {value: "item2", content: "Элемент 2"},
                    {value: "item3", content: "Элемент 3"}
                ]}
            />
        )
    }
}