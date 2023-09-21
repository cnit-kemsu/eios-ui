import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import {Tab, Tabs} from "../components/Tabs";
import {Button, useTabs} from "../index";

export default {
    title: "Хуки/useTabs",
    parameters: {
        docs: {
            description: {
                component: `Используется в паре с [Tabs](..?path=/docs/компоненты-tabs--docs)`
            }
        }
    }
} as Meta

export const Default: StoryObj = {
    name: "useTabs",
    render: () => {

        const initialValue = "tab1";

        const [tabs, setTab] = useTabs(initialValue);

        return (
            <div style={{padding: "2em"}}>
                <Tabs {...tabs}>
                    <Tab id='tab1'>Вкладка 1</Tab>
                    <Tab id='tab2'>Вкладка 2</Tab>
                    <Tab id='tab3'>Вкладка 3</Tab>
                </Tabs>
                {tabs.tab === 'tab1' && <div>Содержимое 1</div>}
                {tabs.tab === 'tab2' && <div>Содержимое 2</div>}
                {tabs.tab === 'tab3' && <div>Содержимое 3</div>}
                <Button onClick={() => setTab('tab1')}>Сброс</Button>
            </div>
        );
    }
}