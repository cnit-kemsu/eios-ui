import React from "react";
import {Spinner} from '../components/Spinner'
import {Meta, StoryObj} from "@storybook/react";
import {argTypes} from "./argTypes";
import {SpinnerProps} from "../components/Spinner/SpinnerProps";

export default {
    title: "Компоненты/Spinner",
    component: Spinner
} as Meta<typeof Spinner>

export const Default : StoryObj<typeof Spinner> = {
    name: "Spinner",
    render: (props: SpinnerProps) => (<Spinner style={{ width: "4em"}} {...props} />)
}