import {ComponentMeta} from "@storybook/react";
import {argTypes} from "./argTypes";
import {Menu, MenuItem} from "../components/Menu";
import {MenuProps} from "../components/Menu/MenuProps";

export const Default = (props: MenuProps) => (
    <div style={{padding: "2em"}}>
        <Menu {...props}>
            <MenuItem>Элемент меню 1</MenuItem>
            <MenuItem>Элемент меню 2</MenuItem>
            <MenuItem>Элемент меню 3</MenuItem>
        </Menu>
    </div>
);



export default {
    title: "Компоненты/Menu",
    component: Default,
    args: {
        show: true,
        x: 20,
        y: 20
    },
    argTypes: {
        x: {description: "позиция по x"},
        y: {description: "позиция по y"},
        show: {description: "показать меню"},
        css: argTypes.css,
        flat: argTypes.flat,
        borderless: argTypes.borderless,
        style: argTypes.style,
        className: argTypes.className
    },
    parameters: {
        docs: {
            description: {
                component: `Выпадающее меню. В качестве дочерних элементов принимает [MenuItem](..?path=/docs/компоненты-menuitem--default)`
            }
        }
    },
} as ComponentMeta<typeof Default>

Default.storyName = "Menu";