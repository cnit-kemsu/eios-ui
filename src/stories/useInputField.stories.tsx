import * as React from "react";
import {InputField} from "../components/InputField";
import {Button, useInputField} from "../index";
import {Meta, StoryObj} from "@storybook/react";
import {createHookArgsTable} from "./createHookArgsTable";

export default {
    title: "Хуки/useInputField",
    parameters: {
        docs: {
            description: {
                component: `Хук, который используется в паре с [InputField](..?path=/docs/компоненты-inputfield--default).                
                ${createHookArgsTable([
                    {
                        name: 'initialValue', type: 'string | number | undefined',
                        description: 'начальное значение'
                    },
                    {
                        name: "return",
                        type: "[<br/>{onChange: (value: (string | number | undefined)) => void, value: string | number | undefined},<br/>React.Dispatch&lt;React.SetStateAction&lt;string | number | undefined&gt;&gt;<br/>]",
                        description: "первый элемент массива передается `InputField`;<br/>второй используется дл установки значения поля ввода"
                    }
                ])}`,
            },
        },
    }
} as Meta

export const Example: StoryObj = {
    name: "useInputField",
    render: () => {
        const initialValue = "";

        const [input, setInput] = useInputField(initialValue);

        return (
            <>
                <div style={{margin: "10px"}}>
                    <InputField placeholder="Введите текст..." {...input}/>
                </div>

                <div style={{margin: "10px"}}>
                    Текущее значение: {input.value}
                </div>

                <div style={{margin: "10px"}}>
                    <Button onClick={() => setInput("")}>Сброс</Button>
                </div>
            </>
        )
    }
}

