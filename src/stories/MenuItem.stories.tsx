import {Meta} from "@storybook/react";
import {MenuItem} from "../components/Menu";
import {MenuItemProps} from "../components/Menu/MenuProps";

export default {
    title: "Компоненты/MenuItem",
    component: MenuItem,
    args: {
      children: "Элемент меню"
    },
    argTypes: {
        onClick: { control: {type: null} },
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
