import type {Meta, StoryObj} from '@storybook/react';
import {InputField} from '../components/InputField';
import {useInputField} from "../hooks/useInputField";
import {Button} from "../components/Button";

const meta = {
    title: 'InputField',
    component: InputField,
    argTypes: {
        type: {
            options: ['color', 'date', 'datetime-local', 'email', 'hidden', 'image', 'month', 'number',
                'password', 'range', 'reset', 'search', 'tel', 'text', 'time', 'url', 'week'],
            control: {type: 'select'}
        },
        value: {
            control: {type: "text"}
        }
    },
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: "InputField"
}

export const UseInput: StoryObj = {
    name: "Хук useInputField",
    render: () => {

        const [input, setInput] = useInputField("Начальное значение");

        const style = {margin: "10px"};

        return (
            <>
                <div style={style}>
                    <InputField placeholder="Введите текст..." {...input}/>
                </div>

                <div style={style}>
                    Текущее значение: {input.value}
                </div>

                <div style={style}>
                    <Button onClick={() => setInput("")}>Сброс</Button>
                </div>
            </>
        )
    }
}

