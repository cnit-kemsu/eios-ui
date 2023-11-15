import {Meta, StoryObj} from "@storybook/react";
import {Menu} from "../components/Menu";
import {MenuProps} from "../components/Menu/MenuProps";
import {MenuItem} from "../components/Menu/MenuItem";

export default {
    title: "Компоненты/Menu",
    component: Menu,
    args: {
        show: true,
        x: 20,
        y: 20
    },
    argTypes: {
        onMouseEnter: { control: {type: null} },
        onMouseLeave: { control: {type: null} },
        onOutsideClick: { control: {type: null} },
    }
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

