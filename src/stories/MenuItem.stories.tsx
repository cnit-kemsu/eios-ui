import {Meta} from "@storybook/react";
import {argTypes} from "./argTypes";
import {MenuItem} from "../components/Menu";
import {MenuItemProps} from "../components/Menu/MenuProps";

export default {
    title: "Компоненты/MenuItem",
    component: MenuItem,
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
                component: `Элемент выпадающего меню [Menu](..?path=/docs/компоненты-menu--docs)`
            }
        }
    }
} as Meta<typeof MenuItem>

export const Default = {
    name: "MenuItem",
    render: (props: MenuItemProps) => (
        <div style={{padding: "2em"}}>
            <MenuItem {...props}/>
        </div>
    )
}
