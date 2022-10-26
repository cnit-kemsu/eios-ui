import * as React from "react";
import {Checkbox} from "../components/Checkbox";
import {Button, useCheckbox} from "../index";
import {ComponentMeta} from "@storybook/react";
import {createHookArgsTable} from "./createHookArgsTable";
import * as dedent from "dedent";

export const Example = () => {
    const initialValue = false;

    const [checkbox, setChecked] = useCheckbox(initialValue);

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
                component: dedent`Хук, который используется в паре с [Checkbox](..?path=/docs/компоненты-checkbox--default).                
                ${createHookArgsTable([
                    {
                        name: 'initialValue', type: 'boolean',
                        description: 'если установлен в `true`, то чекбокс будет изначально отмечен'
                    },                    
                    {
                        name: "return", type: "[<br/>&nbsp;{onClick: () => void, checked: boolean},<br/>&nbsp;React.Dispatch&lt;React.SetStateAction&lt;boolean&gt;&gt;<br/>]",
                        description: "<i>первый элемент массива</i> представляет свойства компонента `Checkbox`;<br/><i>второй элемент массива</i> используется для смены состояния чекбокса"                        
                    }
                ])}`,
            },
        },
    }
} as ComponentMeta<typeof Example>

