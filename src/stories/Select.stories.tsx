import {Select} from '../components/Select';
import {Meta, StoryObj} from "@storybook/react";
import {SelectProps} from "../components/Select/SelectProps";

import 'material-icons/iconfont/material-icons.css';
import {Button} from "../components/Button";
import {useSelect} from "../hooks/useSelect";

const meta = {
    title: 'Select',
    component: Select,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [
        Story => <div style={{height: "10em"}}><Story/></div>
    ]
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example1: Story = {
    name: "Пример 1",
    args: {
        open: true,
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
    args: {
        open: true,
        items: ["Пушкин А.С.", "Джек Лондон", "Эрнест Хемингуэй"],
        contentProp: item => item,
        value: 1,
        valueIsIndex: true,
        fullWidth: true
    }
} as Story

export const Example3: Story = {
    name: "Пример 3",
    args: {
        open: true,
        items: [
            {id: 'item0', name: "Пушкин А.С."},
            {id: 'item1', name: "Джек Лондон"},
            {id: 'item2', name: "Эрнест Хемингуэй"}
        ],
        value: 'item1',
        valueProp: "id",
        contentProp: "name",
        fullWidth: true
    }
}

export const Example4: Story = {
    name: "Пример 4",
    render: (props: SelectProps<{ id: string, name: string }>) => (
        <Select
            open fullWidth
            items={[
                {id: 'item0', name: "Пушкин А.С."},
                {id: 'item1', name: "Джек Лондон"},
                {id: 'item2', name: "Эрнест Хемингуэй"}
            ]}
            value='item1'
            valueProp={item => item.id}
            contentProp={item => item.name}
            {...props}
        />
    )
} as Story

export const Example5: Story = {
    name: "Пример 5",
    render: (props) => {
        return (
            <Select
                open
                value=""
                fullWidth
                placeholder="- Выберите элемент -"
                items={[
                    {value: "item1", content: "Пушкин А.С."},
                    {value: "item2", content: "Джек Лондон"},
                    {value: "item3", content: "Эрнест Хемингуэй"}
                ]}
                {...props}
            />
        )
    }
}

export const UseSelect: StoryObj = {
    name: "Хук useSelect",
    render: () => {
        const initialValue = "item0";

        const [sel, setValue] = useSelect(initialValue);

        const style = {margin: "10px"};

        return (
            <>
                <div style={style}>
                    <Select {...sel} fullWidth items={[
                        {value: 'item0', content: "Пушкин А.С."},
                        {value: 'item1', content: "Джек Лондон"},
                        {value: 'item2', content: "Эрнест Хемингуэй"}
                    ]}/>
                </div>

                <div style={style}>
                    Текущее значение: {sel.value}
                </div>

                <div style={style}>
                    <Button onClick={() => setValue("item0")}>Сброс</Button>
                </div>
            </>
        )
    }
}