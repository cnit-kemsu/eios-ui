import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import {argTypes} from "./argTypes";
import {PaneProps} from "../components/Pane/PaneProps";
import {Message} from "../index";

export default {
    title: "Компоненты/Message",
    component: Message,
    args: {
        type: "info"
    },
    argTypes: {
        borderless: argTypes.borderless,
        flat: argTypes.flat,
        css: argTypes.css,
        style: argTypes.style,
        className: argTypes.className
    }
} as Meta<typeof Message>

export const Default : StoryObj<typeof Message> = {
    name: "Message",
    render: (props: PaneProps) => (
        <Message {...props}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid architecto beatae cumque deserunt esse, est fugit hic libero magnam, minus molestiae natus non officiis praesentium repellat rerum unde voluptatibus?
        </Message>
    )
}