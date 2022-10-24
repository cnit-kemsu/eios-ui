import * as React from "react";
import {InputField} from "../components/InputField";
import {Button, useInputField} from "../index";
import {ComponentMeta} from "@storybook/react";
import {createHookArgsTable} from "./createHookArgsTable";

export const Example = () => {
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

Example.storyName = "useInputField"

export default {
    title: "Хуки/useInputField",
    component: Example,
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
                        type: "[{onChange: (value: (string | number | undefined)) => void, value: string | number | undefined}, React.Dispatch&lt;React.SetStateAction&lt;string | number | undefined&gt;&gt;]",
                        description: "перывй элемент массива передается `InputField`; второй используется дл установки значения поля ввода"
                    }
                ])}`,
            },
        },
    }
} as ComponentMeta<typeof Example>

