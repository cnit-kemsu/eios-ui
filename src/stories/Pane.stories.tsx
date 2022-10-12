import React from "react";
import {Pane} from '../components/Pane'
import {ComponentMeta} from "@storybook/react";
import {argTypes} from "./argTypes";
import {PaneProps} from "../components/Pane/PaneProps";

export default {
    title: "Компоненты/Pane",
    component: Pane,
    args: {
        title: "Заголовок"
    },
    argTypes: {
        borderless: argTypes.borderless,
        flat: argTypes.flat,
        css: argTypes.css,
        titleCss: argTypes.css,
        style: argTypes.style,
        className: argTypes.className
    }
} as ComponentMeta<typeof Pane>

export const Default = (props: PaneProps) => (
    <Pane {...props}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid architecto beatae cumque deserunt esse, est fugit hic libero magnam, minus molestiae natus non officiis praesentium repellat rerum unde voluptatibus?
    </Pane>
);

Default.storyName = "Pane"