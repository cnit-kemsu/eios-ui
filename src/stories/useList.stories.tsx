import * as React from "react";
import {List} from "../components/List";
import {Button, useList} from "../index";
import {Meta, StoryObj} from "@storybook/react";
import {createHookArgsTable} from "./createHookArgsTable";
import {dedent} from "ts-dedent";

export default {
    title: "Хуки/useList",
    parameters: {
        docs: {
            description: {
                component: dedent`Хук, который используется в паре с [List](..?path=/docs/компоненты-list--default).                
                ${createHookArgsTable([
                    {
                        name: 'initialValue', type: 'string | number | undefined',
                        description: 'начальный `value`'
                    },
                    {
                        name: "return",
                        type: "[<br/>{onChange: (value: ValueType, item: ItemType) => void, value: ValueType},<br/>React.Dispatch&lt;React.SetStateAction&lt;ValueType&gt;&gt;<br/>]",
                        description: "первый элемент массива передается `List`;<br/>второй используется дл установки значения списка"
                    }
                ])}`,
            },
        },
    }
} as Meta

export const Example : StoryObj = {
    name: "useList",
    render: () => {
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
}

