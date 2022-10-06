import {ComponentMeta} from "@storybook/react";
import {argTypes} from "./argTypes";
import {Menu, MenuItem} from "../components/Menu";
import {MenuItemProps} from "../components/Menu/MenuProps";

export const Default = (props: MenuItemProps) => (
    <div style={{padding: "2em"}}>
        <Menu show  x={20} y={20}>
            <MenuItem {...props}>Элемент меню</MenuItem>
        </Menu>
    </div>
);

export default {
    title: "Компоненты/MenuItem",
    component: Default,
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