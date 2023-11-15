import {Meta, StoryObj} from "@storybook/react";
import {Menu} from "../components/Menu";
import {MenuItem} from "../components/Menu/MenuItem";
import {MenuItemProps} from "../components/Menu/MenuItemProps";

export default {
    title: "Компоненты/MenuItem",
    component: MenuItem,
    args: {
        children: "Элемент меню",
    },
    argTypes: {
        onClick: {control: {type: null}},
    }
} as Meta<typeof MenuItem>

export const Default: StoryObj<typeof MenuItem> = {
    name: "MenuItem",
    render: (props: MenuItemProps) => (
        <Menu show>
            <MenuItem {...props}/>
        </Menu>
    )
}
