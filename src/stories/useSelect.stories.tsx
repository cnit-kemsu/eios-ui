import * as React from "react";
import {Select} from "../components/Select";
import {Button, useSelect} from "../index";
import {ComponentMeta} from "@storybook/react";
import {createHookArgsTable} from "./createHookArgsTable";

export const Example = () => {
    const initialValue = "item0";

    const [select, setValue] = useSelect(initialValue);

    return (
        <>
            <div style={{padding: "10px"}}>
                <Select {...select} items={[
                    {value: "item0", content: "Элемент 1"},
                    {value: "item1", content: "Элемент 2"},
                    {value: "item2", content: "Элемент 3"}
                ]} />
            </div>

            <div style={{padding: "10px"}}>
                Текущее значение: {select.value}
            </div>

            <div style={{padding: "10px"}}>
                <Button onClick={() => setValue("item0")}>Сброс</Button>
            </div>
        </>
    )
}

Example.storyName = "useSelect"

export default {
    title: "Хуки/useSelect",
    component: Example,
    parameters: {
        docs: {
            description: {
                component: `Хук, который используется в паре с [Select](..?path=/docs/компоненты-select--default).                
                ${createHookArgsTable([
                    {
                        name: 'initialValue', type: 'string | number | undefined',
                        description: 'начальный `value`'
                    },
                    {
                        name: "return",
                        type: "[{open: boolean, onClick: () => void, onOutsideClick: () => void,  onChange: (v: ValueType, item: ItemType) => void, value: string | number | undefined}, React.Dispatch&lt;React.SetStateAction&lt;string | number | undefined&gt;&gt;, React.Dispatch&lt;React.SetStateAction&lt;boolean&gt;&gt;]",
                        description: "первый элемент массива передается `Select`; второй используется для установки значения списка; третий для открытия и закрытия меню"
                    }
                ])}`,
            },
        },
    }
} as ComponentMeta<typeof Example>

