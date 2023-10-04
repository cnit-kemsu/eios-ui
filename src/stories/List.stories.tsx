import {List} from "../components/List";
import {Meta, StoryObj} from "@storybook/react";

export default {
    title: "Компоненты/List",
    component: List,
    argTypes: {
        onChange: {control: {type: null}}
    }
} as Meta<typeof List>

type Story = StoryObj<typeof List>;

export const Example1: Story = {
    name: "Пример 1",
    render: (props) => (
        <List
            items={["Элемент 1", "Элемент 2", "Элемент 3"]}
            value={1}
            valueIsIndex
            contentProp={item => item}
            {...props}
        />
    )
}

export const Example2: Story = {
    name: "Пример 2",
    args: {
        items: [
            {value: 'item0', content: "Элемент 1"},
            {value: 'item1', content: "Элемент 2"},
            {value: 'item2', content: "Элемент 3"}
        ],
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
        <List
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