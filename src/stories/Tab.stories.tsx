import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import {Tab} from "../components/Tabs/Tab";
import {TabProps} from "../components/Tabs/TabProps";

export default {
    title: "Компоненты/Tab",
    component: Tab,
} as Meta<typeof Tab>

export const Default: StoryObj<typeof Tab> = {
    name: "Tab",
    render: (props : TabProps) => (
        <Tab {...props}>Вкладка</Tab>
    )
}