import * as React from "react";
import {Checkbox} from "../components/Checkbox";
import {Button, useCheckbox} from "../index";
import {Meta, StoryObj} from "@storybook/react";
import {createHookArgsTable} from "./createHookArgsTable";
import {dedent} from "ts-dedent";

export const Example : StoryObj = {
    name: "useCheckbox",
    render: () => {
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
}

export default {
    title: "Хуки/useCheckbox",
    parameters: {
        docs: {
            description: {
                component: dedent`Хук, который используется в паре с [Checkbox](..?path=/docs/компоненты-checkbox--docs).                
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
} as Meta

