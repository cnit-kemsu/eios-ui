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
    argTypes: {
        color: {description: "Цвет эффекта ряби"},
        duration: {description: "Длительность эффекта ряби"},
        css: argTypes.css,
        rippleCss: {control: {type: null}},
        rippleClassName: {control: {type: null}},
        containerStyle: { description: "Стиль контейнера эффекта ряби", control: {type: null}},
        rippleStyle: { description: "Стиль самого эффекта ряби", control: {type: null}},
    }
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
