import React from "react";
import {ComponentMeta} from "@storybook/react";
import {Tab, Tabs} from "../components/Tabs";
import {TabsProps} from "../components/Tabs/TabsProps";
import {argTypes} from "./argTypes";

export const Default = (props: TabsProps) => (
    <div style={{padding: "2em"}}>
        <Tabs {...props}>
            <Tab id='tab1'>Вкладка 1</Tab>
            <Tab id='tab2'>Вкладка 2</Tab>
            <Tab id='tab3'>Вкладка 3</Tab>
        </Tabs>
    </div>
);

export default {
    title: "Компоненты/Tabs",
    component: Tabs,
    args: {
        tab: "tab1"
    },
    argTypes: {
        style: argTypes.style,
        className: argTypes.className,
        css: argTypes.css,
        colorStyle: argTypes.colorStyle,
    },
    parameters: {
        docs: {
            description: {
                component: `Вкладки. В качестве дочерних элементов принимает [Tab](..?path=/docs/компоненты-tab--default)`
            }
        }
    }
} as ComponentMeta<typeof Tabs>

Default.storyName = "Tabs";