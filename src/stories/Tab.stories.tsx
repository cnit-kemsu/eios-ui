import React from "react";
import {ComponentMeta} from "@storybook/react";
import {argTypes} from "./argTypes";
import {Tab, Tabs} from "../components/Tabs";
import {TabProps} from "../components/Tabs/TabsProps";

export const Default = (props: TabProps) => (
    <div style={{padding: "2em"}}>
        <Tab {...props} />
    </div>
);

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
                component: `Вкладка. Используется в качестве дочернего элемента [Tabs](..?path=/docs/компоненты-tabs--default)`
            }
        }
    }
} as ComponentMeta<typeof Tab>

Default.storyName = "Tab";