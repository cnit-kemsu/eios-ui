import * as React from "react";
import {ComponentMeta} from "@storybook/react";
import {Button, Menu, MenuItem, useMenuButton} from "../index";
import {createHookArgsTable} from "./createHookArgsTable";
import {ComponentPropsWithRef, MutableRefObject, useCallback, useEffect, useRef, useState} from "react";

function useContextMenu(onClose?: () => void) {

    const [menuPos, setMenuPosition] = useState({x: 0, y: 0});
    const [show, setShow] = useState(false);
    const insideMenuRef = useRef(false);

    useEffect(() => {

        if (!show) return;

        const handleClick = (e) => {
            if (!e.target.dataset.menuitem){
                setShow(false);
                onClose?.();
            }
        }

        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);

    }, [show])

    const onContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setShow(true);
        setMenuPosition({
            x: e.clientX - e.currentTarget.getBoundingClientRect().left + e.currentTarget.offsetLeft,
            y: e.clientY - e.currentTarget.getBoundingClientRect().top + e.currentTarget.offsetTop
        });
    }

    const onMouseEnter = (e: React.MouseEvent<HTMLUListElement>) => {
        insideMenuRef.current = true;
    }

    const onMouseLeave = (e: React.MouseEvent<HTMLUListElement>) => {
        insideMenuRef.current = false;
    }

    return {
        onContextMenu, menu: {
            show,
            onMouseEnter,
            onMouseLeave,
            ...menuPos
        }
    };
}

export const Example = () => {

    const {onContextMenu, menu} = useContextMenu(() => {
        setShowSubmenu(false);
    });

    const parentElRef = useRef() as MutableRefObject<HTMLDivElement>;
    const menuItemElRef = useRef() as MutableRefObject<HTMLLIElement>;
    const [showSubmenu, setShowSubmenu] = useState(false);
    const [submenuPos, setSubmenuPos] = useState({x: 0, y: 0});
    const handleMenuItemClick = (e : React.MouseEvent<HTMLLIElement>) => {
        const menuItemBCR = e.currentTarget.getBoundingClientRect();
        const parentBCR = parentElRef.current.getBoundingClientRect();

        setSubmenuPos({
            x:menuItemBCR.right - parentBCR.left + parentElRef.current.offsetLeft,
            y:menuItemBCR.top - parentBCR.top + parentElRef.current.offsetTop
        });

        setShowSubmenu(true);
    }

    return (
        <div ref={parentElRef} onContextMenu={onContextMenu} style={{height: "10em"}}>

            <Menu {...menu}>
                <MenuItem ref={menuItemElRef} onClick={handleMenuItemClick}>Элемент 1</MenuItem>
                <MenuItem onClick={() => alert('Элемент 2 был нажат')}>Элемент 2</MenuItem>
                <MenuItem onClick={() => alert('Элемент 3 был нажат')}>Элемент 3</MenuItem>
                <MenuItem onClick={() => alert('Элемент 4 был нажат')}>Элемент 4</MenuItem>
            </Menu>

            <Menu show={showSubmenu} {...submenuPos}>
                <MenuItem onClick={() => alert('Элемент 1.1 был нажат')}>Элемент 1.1</MenuItem>
                <MenuItem onClick={() => alert('Элемент 1.2 был нажат')}>Элемент 1.2</MenuItem>
            </Menu>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad aliquam assumenda distinctio dolorum est
                eum facere modi neque nobis numquam odio officiis perferendis porro, qui quibusdam repellendus tempora
                veritatis!</p>


        </div>
    )
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