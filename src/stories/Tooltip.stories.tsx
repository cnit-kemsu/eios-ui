import React, {MutableRefObject, useRef} from "react";
import {ComponentMeta} from "@storybook/react";
import {argTypes} from "./argTypes";
import {Tooltip} from "../components/Tooltip";
import {Button} from "../components/Button";
import {TooltipProps} from "../components/Tooltip/TooltipProps";

export default {
    title: "Компоненты/Tooltip",
    component: Tooltip,
    args: {
        children: "Я подсказка для этой кнопки"
    },
    argTypes: {
        css: argTypes.css,
        style: argTypes.style,
        className: argTypes.className,
        targetElementRef: {
            description: "ref на элемент, относительно которого нужно вывести подсказку",
            control: {type: null}
        }
    }
} as ComponentMeta<typeof Tooltip>

export const Default = (props: Omit<TooltipProps, 'targetElementRef'>) => {

    const buttonRef = useRef() as MutableRefObject<HTMLButtonElement>;

    return (
        <div style={{height: "5em"}}>
            <Button ref={buttonRef}>Наведи курсор на меня</Button>
            <Tooltip targetElementRef={buttonRef} {...props} />
        </div>
    );
};

Default.storyName = "Tooltip"