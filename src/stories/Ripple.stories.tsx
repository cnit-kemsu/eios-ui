import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import {RippleProps} from "../components/Ripple/RippleProps";
import {Ripple} from "../index";
import {argTypes} from "./argTypes";

const divStyle = {
    textAlign: 'center' as "center",
    background: 'gray',
    color: 'white',
    width: '100px',
    height: '100px'
}

const titleStyle = {
    marginTop: '40%',
    display: 'inline-block'
}

export default {
    title: "Компоненты/Ripple",
    component: Ripple,
} as Meta<typeof Ripple>

export const Example : StoryObj<typeof Ripple> = {
    name:"Ripple",
    render:  (props : RippleProps) => {
        return (
            <div style={{position: 'relative', ...divStyle}}>
                <Ripple {...props} />
                <span style={titleStyle}>Кликни меня!</span>
            </div>
        )
    }
}
