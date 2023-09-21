import {List} from "../components/List";
import {Meta, StoryObj} from "@storybook/react";
import {argTypes} from "./argTypes";

export default {
    title: "Компоненты/List",
    component: List,
    argTypes: {
        disabled: argTypes.disabled,
        colorStyle: argTypes.colorStyle,
        css: argTypes.css,
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
        onChange: {action: 'clicked', description: "событие нажатия по элементу списка"}
    }
} as Meta<typeof List>

type Story = StoryObj<typeof List>;

export const Example1 : Story = {
    name: "Пример 1",
    args: {
        items: ["Элемент 1", "Элемент 2", "Элемент 3"],
        value: 1,
        valueIsIndex: true
    }
}

export const Example2 : Story = {
    name: "Пример 2",
    args: {
        items: [{value: 'item0', content: "Элемент 1"}, {value: 'item1', content: "Элемент 2"}, {
            value: 'item2',
            content: "Элемент 3"
        }],
        value: 'item1'
    }
}

export const Example3 : Story = {
    name:"Пример 3",
    args: {
        items: [{id: 'item0', name: "Элемент 1"}, {id: 'item1', name: "Элемент 2"}, {id: 'item2', name: "Элемент 3"}],
        value: 'item1',
        valueProp: "id",
        contentProp: "name"
    }
}

export const Example4 : Story = {
    name: "Пример 4",
    render:  () => (
        <List
            items={[{id: 'item0', name: "Элемент 1"}, {id: 'item1', name: "Элемент 2"}, {id: 'item2', name: "Элемент 3"}]}
            value='item1'
            getValue={(item, valueProp, itemIndex) => (item as { id: string }).id}
            getContent={(item, contentProp) => (item as { name: string }).name}
        />
    )
}