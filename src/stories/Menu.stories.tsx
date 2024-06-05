import type {Meta, StoryObj} from '@storybook/react';
import {Menu} from '../components/Menu';
import {MenuItem} from "../components/Menu/MenuItem.tsx";
import {MenuProps} from "../components/Menu/MenuProps.ts";
import {MutableRefObject, useRef} from "react";
import {useMenu, useSubmenu} from "../hooks/useMenu.tsx";
import {Button} from "../components/Button";
import {Message} from "../components/Message";

const meta = {
    title: 'Menu',
    component: Menu,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default : Story = {
    name: "Menu",
    args: {
        show: true
    },
    render: (props: MenuProps) => (
        <div style={{minHeight: "100px"}}>
            <Menu {...props}>
                <MenuItem>Элемент меню 1</MenuItem>
                <MenuItem>Элемент меню 2</MenuItem>
                <MenuItem>Элемент меню 3</MenuItem>
            </Menu>
        </div>
    )
}

export const Hooks1 : Story = {
    name: "Выпадающее меню",
    render:  () => {
        const buttonRef = useRef() as MutableRefObject<HTMLButtonElement>;

        const [menu, showMenu] = useMenu(buttonRef, {x: 0.5, y: 1});
        const [menuButton, submenu] = useSubmenu(menu);
        const [menuButton2, submenu2] = useSubmenu(submenu);

        return (
            <div style={{height: "10em"}}>

                <Button ref={buttonRef} onClick={() => {
                    !menu.show && showMenu()
                }}>
                    Открыть меню
                </Button>

                <>
                    <Menu {...menu} style={{translate: '-50% 0%'}}>
                        <MenuItem {...menuButton}>Элемент 1</MenuItem>
                        <MenuItem onClick={() => {
                            alert('Элемент 2 был нажат');
                        }}>Элемент 2</MenuItem>
                        <MenuItem onClick={() => {
                            alert('Элемент 3 был нажат');
                        }}>Элемент 3</MenuItem>
                        <MenuItem onClick={() => {
                            alert('Элемент 4 был нажат');
                        }}>Элемент 4</MenuItem>
                    </Menu>

                    <Menu {...submenu}>
                        <MenuItem {...menuButton2}>Элемент 1.1</MenuItem>
                        <MenuItem onClick={() => {
                            alert('Элемент 1.2 был нажат');
                        }}>Элемент 1.2</MenuItem>
                    </Menu>

                    <Menu {...submenu2}>
                        <MenuItem onClick={() => {
                            alert('Элемент 1.1.1 был нажат');
                        }}>Элемент 1.1.1</MenuItem>
                        <MenuItem onClick={() => {
                            alert('Элемент 1.1.2 был нажат');
                        }}>Элемент 1.1.2</MenuItem>
                    </Menu>
                </>

            </div>
        );
    }
}

export const Hooks2 : Story = {
    name: "Контекстное меню",
    render: () => {
        const messageRef = useRef() as MutableRefObject<HTMLDivElement>;

        const [menu, showMenu] = useMenu(messageRef);
        const [menuButton, submenu] = useSubmenu(menu);
        const [menuButton2, submenu2] = useSubmenu(submenu);

        return (
            <div style={{height: "10em"}}>

                <Message ref={messageRef} onContextMenu={showMenu} type="info">
                    Нажмите правой кнопкой мыши по области, чтобы открыть контекстное меню
                </Message>

                <>
                    <Menu {...menu} style={{translate: '-50% 0%'}}>
                        <MenuItem {...menuButton}>Элемент 1</MenuItem>
                        <MenuItem onClick={() => {
                            alert('Элемент 2 был нажат');
                        }}>Элемент 2</MenuItem>
                        <MenuItem onClick={() => {
                            alert('Элемент 3 был нажат');
                        }}>Элемент 3</MenuItem>
                        <MenuItem onClick={() => {
                            alert('Элемент 4 был нажат');
                        }}>Элемент 4</MenuItem>
                    </Menu>

                    <Menu {...submenu}>
                        <MenuItem {...menuButton2}>Элемент 1.1</MenuItem>
                        <MenuItem onClick={() => {
                            alert('Элемент 1.2 был нажат');
                        }}>Элемент 1.2</MenuItem>
                    </Menu>

                    <Menu {...submenu2}>
                        <MenuItem onClick={() => {
                            alert('Элемент 1.1.1 был нажат');
                        }}>Элемент 1.1.1</MenuItem>
                        <MenuItem onClick={() => {
                            alert('Элемент 1.1.2 был нажат');
                        }}>Элемент 1.1.2</MenuItem>
                    </Menu>
                </>

            </div>
        );
    }
}