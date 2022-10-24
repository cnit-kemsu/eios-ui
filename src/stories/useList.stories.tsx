import * as React from "react";
import {List} from "../components/List";
import {Button, useList} from "../index";
import {ComponentMeta} from "@storybook/react";
import {createHookArgsTable} from "./createHookArgsTable";

export const Example = () => {
    const initialValue = "item0";

    const [list, setValue] = useList(initialValue);

    return (
        <>
            <div style={{margin: "10px"}}>
                <List {...list} items={[
                    {value: "item0", content: "Элемент 1"},
                    {value: "item1", content: "Элемент 2"},
                    {value: "item2", content: "Элемент 3"}
                ]}/>
            </div>

            <div style={{margin: "10px"}}>
                Текущее значение: {list.value}
            </div>

            <div style={{margin: "10px"}}>
                <Button onClick={() => setValue("item0")}>Сброс</Button>
            </div>
        </>
    )
}

Example.storyName = "useList"

export default {
    title: "Хуки/useList",
    component: Example,
    parameters: {
        docs: {
            description: {
                component: `Хук, который используется в паре с [List](..?path=/docs/компоненты-list--default).                
                ${createHookArgsTable([
                    {
                        name: 'initialValue', type: 'string | number | undefined',
                        description: 'начальный `value`'
                    },                    
                    {
                        name: "return",
                        type: "[{onChange: (value: ValueType, item: ItemType) => void, value: ValueType}, React.Dispatch&lt;React.SetStateAction&lt;ValueType&gt;&gt;]",
                        description: "первый элемент массива передается `List`; второй используется дл установки значения списка"
                    }
                ])}`,
            },
        },
    }
} as ComponentMeta<typeof Example>

