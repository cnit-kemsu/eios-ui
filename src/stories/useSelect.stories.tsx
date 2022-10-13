import * as React from "react";
import {Select} from "../components/Select";
import {Button, useSelect} from "../index";
import {ComponentMeta} from "@storybook/react";
import {createHookArgsTable} from "./createHookArgsTable";

export const Example = () => {
    const initialValue = "item0";
    const additionalOnChange = (v, i) => alert('Тест: ' + v);

    const [select, setValue] = useSelect(initialValue, additionalOnChange);

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
                        name: 'additionalOnChange', type: 'function | undefined',
                        description: 'дополнительный обработчик нажатия по элементу списка'
                    },
                    {
                        name: "return",
                        type: "[{open: boolean, onClick: () => void, onChange: (v: ValueType, item: ItemType) => void, value: string | number | undefined, ref: MutableRefObject&lt;HTMLDivElement&gt;}, React.Dispatch&lt;React.SetStateAction&lt;string | number | undefined&gt;&gt;]",
                        description: "первый элемент массива передается `Select`; второй используется для установки значения списка"
                    }
                ])}`,
            },
        },
    }
} as ComponentMeta<typeof Example>

