import {ComponentMeta} from "@storybook/react";
import {argTypes} from "./argTypes";
import {Menu, MenuItem} from "../components/Menu";
import {MenuItemProps} from "../components/Menu/MenuProps";

export const Default = (props: MenuItemProps) => (
    <div style={{padding: "2em"}}>
        <MenuItem {...props}/>
    </div>
);

export default {
    title: "Компоненты/MenuItem",
    component: Default,
    args: {
      children: "Элемент меню"
    },
    argTypes: {
        onClick: {action: 'clicked', description: "событие клика по кнопке"},
        css: argTypes.css,
        style: argTypes.style,
        className: argTypes.className
    },
    parameters: {
        docs: {
            description: {
                component: `Элемент выпадающего меню [Menu](..?path=/docs/компоненты-menu--default)`
            }
        }
    }
} as ComponentMeta<typeof Default>

Default.storyName = "MenuItem"