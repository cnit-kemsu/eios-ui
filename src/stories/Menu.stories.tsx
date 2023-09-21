import {Meta, StoryObj} from "@storybook/react";
import {argTypes} from "./argTypes";
import {Menu, MenuItem} from "../components/Menu";
import {MenuProps} from "../components/Menu/MenuProps";

export default {
    title: "Компоненты/Menu",
    component: Menu,
    args: {
        show: true,
        x: 20,
        y: 20
    },
    argTypes: {
        x: {description: "позиция по x"},
        y: {description: "позиция по y"},
        show: {description: "показать меню"},
        flat: argTypes.flat,
        borderless: argTypes.borderless,
        style: argTypes.style,
        className: argTypes.className
    },
    parameters: {
        docs: {
            description: {
                component: `Выпадающее меню. В качестве дочерних элементов принимает [MenuItem](..?path=/docs/компоненты-menuitem--docs)`
            }
        }
    },
} as Meta<typeof Menu>

export const Default : StoryObj<typeof Menu> = {
    name: "Menu",
    render: (props: MenuProps) => (
        <div style={{minHeight: "100px"}}>
            <Menu {...props}>
                <MenuItem>Элемент меню 1</MenuItem>
                <MenuItem>Элемент меню 2</MenuItem>
                <MenuItem>Элемент меню 3</MenuItem>
            </Menu>
        </div>
    )
};

