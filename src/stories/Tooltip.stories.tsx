import {Tooltip} from '../components/Tooltip';
import {Meta, StoryObj} from "@storybook/react";
import {MutableRefObject, useRef} from "react";
import {Button} from "../components/Button";

const meta = {
    title: 'Tooltip',
    component: Tooltip,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: "Tooltip",
    render: (props) => {

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
                <Tooltip targetElementRef={buttonRef} {...props}>
                    Текст подсказки
                </Tooltip>
            </div>
        );
    }
}