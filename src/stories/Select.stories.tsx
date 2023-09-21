import React from 'react';
import {Select} from "../components/Select";
import {Meta, StoryObj} from "@storybook/react";
import {argTypes} from "./argTypes";

import 'material-icons/iconfont/material-icons.css';

export default {
    title: "Компоненты/Select",
    component: Select,
    args: {open: true},
    argTypes: {
        disabled: argTypes.disabled,
        placeholder: {description: "текст, который выводится если не выбран элемент"},
        flat: argTypes.flat,
        borderless: argTypes.borderless,
        valueIsIndex: {description: "в качестве `value` используется номер элемента в `items`"},
        contentProp: {description: "имя свойства, которое содержит отображаемый контент элемента"},
        valueProp: {description: "имя свойства, которое содержит value элемента"},
        selectableProp: {description: "имя свойства, которое определяет, можно ли выбрать элемент"},
        items: {description: "элементы списка"},
        getContent: {description: "функция, которая выполняется для каждого элемента `items` и должна вернуть отображаемый контент элемента. Функция по умолчанию использует `contentProp`"},
        getValue: {description: "функция, которая выполняется для каждого элемента `items` и должна вернуть `value` элемента. Функция по умолчанию использует `valueProp`"},
        getSelectable: {description: "функция, которая выполняется для каждого элемента `items` и должна вернуть true для выбираемых элементов. Функция по умолчанию использует `selectableProp`"},
        onChange: {action: 'clicked', description: "событие нажатия по элементу списка", control: {type: null}},
        onClick: {action: 'clicked', description: "событие нажатия по списку", control: {type: null}},
        onOutsideClick: {action: 'clicked', description: "событие нажатия по области за пределами Select`а", control: {type: null}}
    },
    decorators: [
        (Story) => <div style={{height: "10em"}}>{Story()}</div>
    ]
} as Meta<typeof Select>

type Story = StoryObj<typeof Select>;

export const Example1: Story = {
    name: "Пример 1",
    args: {
        items: ["Элемент 1", "Элемент 2", "Элемент 3"],
        value: 1,
        valueIsIndex: true
    }
}

export const Example2: Story = {
    name: "Пример 2",
    args: {
        items: [{value: 'item0', content: "Элемент 1"}, {value: 'item1', content: "Элемент 2"}, {
            value: 'item2',
            content: "Элемент 3"
        }],
        value: 'item1'
    }
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
            getValue={(item, valueProp, itemIndex) => (item as { id: string }).id}
            getContent={(item, contentProp) => (item as { name: string }).name}
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