import React from "react";
import {MenuCloseArea} from '../components/Menu'
import {ComponentMeta} from "@storybook/react";
import {argTypes} from "./argTypes";
import {MenuCloseAreaProps} from "../components/Menu/MenuProps";

export default {
    title: "Компоненты/MenuCloseArea",
    component: MenuCloseArea,
    args: {
        show: false
    },
    argTypes: {
        show: {description: "выводить область", control: {type: null}},
        setShow: {description: "функция для смены состояния видимости меню", control: {type: null}},
        css: argTypes.css,
        style: argTypes.style,
        className: argTypes.className
    },
    parameters: {
        docs: {
            description: {
                component: `Обертка вокруг \`div\` и принимает все его свойства, помимо задокументированных. Используется вместе с [Menu](..?path=/docs/компоненты-menu--default) для закрытия открытого меню кликом по этой области. См. [пример](..?path=/docs/хуки-usemenu-и-usesubmenu--example)`
            }
        }
    }
} as ComponentMeta<typeof MenuCloseArea>

export const Default = (props: MenuCloseAreaProps) => (
    <MenuCloseArea {...props}/>
);

Default.storyName = "MenuCloseArea"