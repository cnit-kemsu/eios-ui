import React from "react";
import {ComponentMeta} from "@storybook/react";
import {Tab, Tabs} from "../components/Tabs";
import {Button, useTabs} from "../index";

export const Example = () => {

    const initialValue = "tab1";
    const additionalOnChange = (v) => alert('Тест: ' + v);

    const [tabs, setTab] = useTabs(initialValue, additionalOnChange);

    return (
        <div style={{padding: "2em"}}>
            <Tabs {...tabs}>
                <Tab id='tab1'>Вкладка 1</Tab>
                <Tab id='tab2'>Вкладка 2</Tab>
                <Tab id='tab3'>Вкладка 3</Tab>
            </Tabs>
            <Button onClick={() => setTab('tab1')}>Сброс</Button>
        </div>
    );
};

export default {
    title: "Хуки/useTabs",
    component: Example,
    parameters: {
        docs: {
            description: {
                component: `Используется в паре с [Tabs](..?path=/docs/компоненты-tabs--default)`
            }
        }
    }
} as ComponentMeta<typeof Example>

Example.storyName = "useTabs";