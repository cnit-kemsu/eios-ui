import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import {Tabs} from "../components/Tabs";
import {TabsProps} from "../components/Tabs/TabsProps";
import {Tab} from "../components/Tabs/Tab";

export default {
    title: "Компоненты/Tabs",
    component: Tabs,
} as Meta<typeof Tabs>

export const Default: StoryObj<typeof Tabs> = {
    name: "Tabs",
    render: (props: TabsProps) => (
        <Tabs tab={'tab2'} {...props}>
            <Tab id='tab1'>Вкладка 1</Tab>
            <Tab id='tab2'>Длинная вкладка 2</Tab>
            <Tab id='tab3'>Вкладка 3</Tab>
        </Tabs>
    )
}