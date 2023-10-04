import React, {MutableRefObject, useRef} from "react";
import {Meta, StoryObj} from "@storybook/react";
import {Tooltip} from "../components/Tooltip";
import {Button} from "../components/Button";
import {TooltipProps} from "../components/Tooltip/TooltipProps";

export default {
    title: "Компоненты/Tooltip",
    component: Tooltip,
    args: {
        children: "Я подсказка для этой кнопки"
    }
} as Meta<typeof Tooltip>

export const Default: StoryObj<typeof Tooltip> = {
    name: "Tooltip",
    render: (props: Omit<TooltipProps, 'targetElementRef'>) => {

        const buttonRef = useRef() as MutableRefObject<HTMLButtonElement>;

        return (
            <div style={{
                position: "relative",
                minHeight: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Button ref={buttonRef}>Наведи курсор на меня</Button>
                <Tooltip targetElementRef={buttonRef} {...props} />
            </div>
        );
    }
}