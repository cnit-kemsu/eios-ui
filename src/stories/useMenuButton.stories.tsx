import * as React from "react";
import {MutableRefObject, useEffect, useRef, useState} from "react";
import {ComponentMeta} from "@storybook/react";
import {Menu, MenuItem, useMenuButton} from "../index";
import {createHookArgsTable} from "./createHookArgsTable";

function useMenu(position: 'client' | 'right' | 'left' | 'top' | 'bottom' = 'client') {
    const [menuPos, setMenuPosition] = useState({x: 0, y: 0});
    const [show, setShow] = useState(false);
    const elRef = useRef() as MutableRefObject<HTMLUListElement>

    useEffect(() => {

        if (!show) return;

        const handleClick = (e) => {
            if (!e.target.dataset.menuitem) {
                setShow(false);
            }
        }

        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);

    }, [show])

    const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setShow(true);

        let x, y;
        const parentEl = elRef.current.parentElement;

        if (parentEl) {
            if (position === 'client') {
                x = e.clientX;
                y = e.clientY;
            } else {
                const el = e.currentTarget;
                const brc = el.getBoundingClientRect();

                if (position === 'right') {
                    x = brc.right;
                    y = brc.top;
                }
            }

            setMenuPosition({
                x: x - parentEl.getBoundingClientRect().left + parentEl.offsetLeft,
                y: y - parentEl.getBoundingClientRect().top + parentEl.offsetTop
            });
        }
    };

    return {
        onClick, menu: {ref: elRef, show, ...menuPos}
    };
}

function useSubmenu(menu: { ref: MutableRefObject<HTMLUListElement>, x: number, y: number, show: boolean }) {
    const [showSubmenu, setShowSubmenu] = useState(false);
    const [submenuPos, setSubmenuPos] = useState({x: 0, y: 0});

    useEffect(() => {
        setShowSubmenu(false);
    }, [menu.x, menu.y])

    useEffect(() => {
        !menu.show && setShowSubmenu(false);
    }, [menu.show])

    const onClick = (e: React.MouseEvent<HTMLLIElement>) => {

        if (showSubmenu) {
            setShowSubmenu(false);
            return;
        }

        const parentEl = menu.ref.current.parentElement;

        if (parentEl) {
            const menuItemBCR = e.currentTarget.getBoundingClientRect();
            const parentBCR = parentEl.getBoundingClientRect();

            setSubmenuPos({
                x: menuItemBCR.right - parentBCR.left + parentEl.offsetLeft,
                y: menuItemBCR.top - parentBCR.top + parentEl.offsetTop
            });

            setShowSubmenu(true);
        }
    }

    return [{onClick}, {show: showSubmenu, ...submenuPos}, setShowSubmenu]
}

export const Example = () => {

    const {onClick, menu} = useMenu();
    const [menuButton, submenu, setShowSubmenu] = useSubmenu(menu);

    return (
        <div onContextMenu={onClick} style={{height: "10em"}}>

            <div style={{margin: "4em"}}>
                <Menu {...menu}>
                    <MenuItem {...menuButton}>Элемент 1</MenuItem>
                    <MenuItem onClick={() => alert('Элемент 2 был нажат')}>Элемент 2</MenuItem>
                    <MenuItem onClick={() => alert('Элемент 3 был нажат')}>Элемент 3</MenuItem>
                    <MenuItem onClick={() => alert('Элемент 4 был нажат')}>Элемент 4</MenuItem>
                </Menu>

                <Menu {...submenu}>
                    <MenuItem onClick={() => alert('Элемент 1.1 был нажат')}>Элемент 1.1</MenuItem>
                    <MenuItem onClick={() => alert('Элемент 1.2 был нажат')}>Элемент 1.2</MenuItem>
                </Menu>
            </div>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad aliquam assumenda distinctio dolorum est
                eum facere modi neque nobis numquam odio officiis perferendis porro, qui quibusdam repellendus tempora
                veritatis!
            </p>

        </div>
    );
}

Example.storyName = "useMenuButton"

export default {
    title: "Хуки/useMenuButton",
    component: Example,
    parameters: {
        docs: {
            description: {
                component: `Хук, который используется в паре с [Menu](..?path=/docs/компоненты-menu--default) и [MenuItem](..?path=/docs/компоненты-menuitem--default).                
                ${createHookArgsTable([
                    {
                        name: 'position', type: 'string | number',
                        description: 'позиция относительно кнопки'
                    },
                    {
                        name: 'parentMenu', type: 'function',
                        description: 'данные родительского меню (см. пример) (опциональный)'
                    }
                ])}`,
            },
        },
    }
} as ComponentMeta<typeof Example>