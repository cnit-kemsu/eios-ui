import React from "react";
import {Pane} from '../components/Pane'
import {Meta, StoryObj} from "@storybook/react";
import {PaneProps} from "../components/Pane/PaneProps";

export default {
    title: "Компоненты/Pane",
    component: Pane,
    args: {
        title: "Заголовок"
    }
} as Meta<typeof Pane>

export const Default : StoryObj<typeof Pane> = {
    name: "Pane",
    render: (props: PaneProps) => (
        <Pane {...props}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid architecto beatae cumque deserunt esse, est fugit hic libero magnam, minus molestiae natus non officiis praesentium repellat rerum unde voluptatibus?
        </Pane>
    )
}