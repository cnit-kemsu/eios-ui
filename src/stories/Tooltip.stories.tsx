import React from "react";
import {ComponentMeta} from "@storybook/react";
import {argTypes} from "./argTypes";
import {Tooltip} from "../components/Tooltip";
import {Button} from "../components/Button";

export default {
    title: "Компоненты/Tooltip",
    component: Tooltip,
    argTypes: {
        css: argTypes.css,
        style: argTypes.style,
        className: argTypes.className
    }
} as ComponentMeta<typeof Tooltip>

export const Default = (props) => (
    <div style={{height: "5em", position: "relative"}}>
        <Tooltip text="Я подсказка для этой кнопки" position="right">
            <Button>Наведи курсор на меня</Button>
        </Tooltip>
    </div>
);

Default.storyName = "Tooltip"