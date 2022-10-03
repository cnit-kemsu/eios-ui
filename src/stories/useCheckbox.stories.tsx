import * as React from "react";
import {Checkbox} from "../components/Checkbox";
import {Button, useCheckbox} from "../index";
import {ComponentMeta} from "@storybook/react";
import {createHookArgsTable} from "./createHookArgsTable";

export const Example = () => {
    const initialValue = false;
    const additionalOnClick = checked => alert('Тест: ' + checked);

    const [checkbox, setChecked] = useCheckbox(initialValue, additionalOnClick);

    return (
        <>
            <div style={{margin: "10px"}}>
                <Checkbox {...checkbox}>Нажми меня</Checkbox>
            </div>

            <div style={{margin: "10px"}}>
                Текущее значение: {checkbox.checked ? "true" : "false"}
            </div>

            <div style={{margin: "10px"}}>
                <Button onClick={() => setChecked(false)}>Сброс</Button>
            </div>
        </>
    )
}

Example.storyName = "useCheckbox"

export default {
    title: "Хуки/useCheckbox",
    component: Example,
    parameters: {
        docs: {
            description: {
                component: `Хук, который используется в паре с [Checkbox](..?path=/docs/компоненты-checkbox--default).                
                ${createHookArgsTable([
                    {
                        name: 'initialValue', type: 'boolean',
                        description: 'если установлен в `true`, то чекбокс будет изначально отмечен'
                    },
                    {
                        name: 'additionalOnClick', type: 'function',
                        description: 'дополнительный обработчик нажатия по чекбоксу (опциональный)'
                    }
                ])}`,
            },
        },
    }
} as ComponentMeta<typeof Example>

