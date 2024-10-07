import type {Meta, StoryObj} from '@storybook/react';
import {List} from '../components/List';
import {useList} from "../hooks/useList";
import {Button} from "../components/Button";

const meta = {
    title: 'List',
    component: List,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example1: Story = {
    name: "Пример 1",
    args: {
        items: [
            {value: 'item0', content: "Пушкин А.С."},
            {value: 'item1', content: "Джек Лондон"},
            {value: 'item2', content: "Эрнест Хемингуэй"}
        ],
        value: 'item1'
    }
}

export const Example2: Story = {
    name: "Пример 2",
    render: (props) => <List {...props}
                             items={["Пушкин А.С.", "Джек Лондон", "Эрнест Хемингуэй"]}
                             value={1} valueIsIndex contentProp={item => item}/>
}

export const Example3: Story = {
    name: "Пример 3",
    args: {
        items: [
            {id: 'item0', name: "Пушкин А.С."},
            {id: 'item1', name: "Джек Лондон"},
            {id: 'item2', name: "Эрнест Хемингуэй"}
        ],
        value: 'item1',
        valueProp: "id",
        contentProp: "name"
    }
}

export const Example4: Story = {
    name: "Пример 4",
    render: () => (
        <List
            items={[
                {id: 'item0', name: "Пушкин А.С."},
                {id: 'item1', name: "Джек Лондон"},
                {id: 'item2', name: "Эрнест Хемингуэй"}
            ]}
            value='item1'
            valueProp={(item) => item.id}
            contentProp={(item) => item.name}
        />
    )
}

export const UseList: StoryObj = {
    name: "Хук useList",
    render: () => {
        const initialValue = "item0";

        const [list, setValue] = useList(initialValue);

        const style = {margin: "10px"};

        return (
            <>
                <div style={style}>
                    <List {...list} items={[
                        {value: 'item0', content: "Пушкин А.С."},
                        {value: 'item1', content: "Джек Лондон"},
                        {value: 'item2', content: "Эрнест Хемингуэй"}
                    ]}/>
                </div>

                <div style={style}>
                    Текущее значение: {list.value}
                </div>

                <div style={style}>
                    <Button onClick={() => setValue("item0")}>Сброс</Button>
                </div>
            </>
        )
    }
}