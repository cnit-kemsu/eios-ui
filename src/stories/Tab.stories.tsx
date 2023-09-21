import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import {argTypes} from "./argTypes";
import {Tab} from "../components/Tabs";
import {TabProps} from "../components/Tabs/TabsProps";

export default {
    title: "Компоненты/Tab",
    component: Tab,
    args: {
        id: "tabid",
        selected: false,
        children: "Вкладка"
    },
    argTypes: {
        id: {description: "id вкладки"},
        selected: {description: "вкладка выделена"},
        fillSelectedTab: {description: "вкладка заполнена цветом в соответсвии с `colorStyle`"},
        colorStyle: argTypes.colorStyle,
        style: argTypes.style,
        className: argTypes.className,
        css: argTypes.css,
        elementType: argTypes.elementType,
        onClick: {description: "вызывается при клике по вкладке", control: {type: null}},
    },
    parameters: {
        docs: {
            description: {
                component: `Вкладка. Используется в качестве дочернего элемента [Tabs](..?path=/docs/компоненты-tabs--docs)`
            }
        }
    }
} as Meta<typeof Tab>

export const Default : StoryObj<typeof Tab> = {
    name:  "Tab",
    render:  (props: TabProps) => (
        <div style={{padding: "2em"}}>
            <Tab {...props} />
        </div>
    )
}