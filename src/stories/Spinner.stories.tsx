import React from "react";
import {Spinner} from '../components/Spinner'
import {ComponentMeta} from "@storybook/react";
import {argTypes} from "./argTypes";
import {SpinnerProps} from "../components/Spinner/SpinnerProps";

export default {
    title: "Компоненты/Spinner",
    component: Spinner,
    argTypes: {
        colorStyle: argTypes.colorStyle,
        scale: {description: "масштаб"},
        css: argTypes.css,
        style: argTypes.style,
        className: argTypes.className
    }
} as ComponentMeta<typeof Spinner>

export const Default = (props: SpinnerProps) => (<Spinner style={{ width: "4em"}} {...props} />);
Default.storyName = "Spinner";