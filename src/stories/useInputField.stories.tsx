import * as React from "react";
import {InputField} from "../components/InputField";
import {Button, useInputField} from "../index";
import {ComponentMeta} from "@storybook/react";
import {createHookArgsTable} from "./createHookArgsTable";

export const Example = () => {
    const initialValue = "";
    const additionalOnClick = value => alert('Тест: ' + value);

    const [input, setInput] = useInputField(initialValue, additionalOnClick);

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
                        name: 'initialValue', type: 'string | number',
                        description: 'начальное значение'
                    },
                    {
                        name: 'additionalOnClick', type: 'function',
                        description: 'дополнительный обработчик события onChange (опциональный)'
                    }
                ])}`,
            },
        },
    }
} as ComponentMeta<typeof Example>

