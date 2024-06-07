import {Popup} from '../components/Popup';
import {Meta, StoryObj} from "@storybook/react";
import {MutableRefObject, useRef, useState} from "react";
import {Button} from "../components/Button";
import {usePopup} from "../hooks/usePopup.tsx";

const meta = {
    title: 'Popup',
    component: Popup,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof Popup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: "Popup",
    render: (props) => {

        const buttonRef = useRef() as MutableRefObject<HTMLButtonElement>;
        const [show, setShow] = useState(false);

        return (
            <>
                <Button ref={buttonRef} onClick={() => setShow(cur => !cur)}>
                    {show ? 'Спрятать' : 'Показать'}
                </Button>
                <Popup show={show} targetElementRef={buttonRef} {...props}>
                    Текст подсказки
                </Popup>
            </>
        );
    }
}


export const Tooltip: Story = {
    name: "Хук usePopup",
    render: () => {

        const buttonRef = useRef() as MutableRefObject<HTMLButtonElement>;
        const tooltip = usePopup(buttonRef, 500);

        return <>
            <Popup {...tooltip}>Текст подсказки</Popup>
            <Button ref={buttonRef}>Наведи на меня</Button>
        </>
    }
}