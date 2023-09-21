import * as React from "react";
import {MutableRefObject, useRef} from "react";
import {Meta, StoryObj} from "@storybook/react";
import {Button, Menu, MenuItem, Message} from "../index";
import {createHookArgsTable} from "./createHookArgsTable";
import {useMenu, useSubmenu} from "../hooks/useMenu";
import {dedent} from "ts-dedent";

export default {
    title: "Хуки/useMenu и useSubmenu",
    parameters: {
        docs: {
            description: {
                component: dedent`Хуки, которые используются в паре с [Menu](..?path=/docs/компоненты-menu--default) и [MenuItem](..?path=/docs/компоненты-menuitem--default).                              
                ${createHookArgsTable([
                    {
                        name: 'anchorElementRef', type: 'MutableRefObject<Element>',
                        description: 'ref, который ссылается на DOM-элемент, который служит якорным элементом для меню'
                    },
                    {
                        name: 'position', type: '{ x?: number | undefined, y?: number | undefined }',
                        description: 'позиция относительно якорного элемента. Например, `{x: 0, y: 0.5}` означает, что меню откроется слева по центру относительно якорного элемента. Если координата равна `undefined`, будет использована позиция мыши.'
                    },
                    {
                        name: "return",
                        type: "[<br/>{x: number, y: number, ref: React.MutableRefObject&lt;HTMLUListElement&gt;, show: boolean},<br/>((e?: (React.MouseEvent | undefined)) => void),<br/>React.Dispatch&lt;React.SetStateAction&lt;boolean&gt;&gt;<br/>]",
                        description: "первый элемент передается `Menu`;<br/>второй - может быть вызван без аргумента, когда нужно отобразить меню, или его можно передать в качестве обработчика события (например, `onClick`, `onContextMenu`);<br/>третий элемент представляет установщик состояния отображения меню."
                    }
                ], 'Аргументы useMenu')} 
                ${createHookArgsTable([
                    {
                        name: 'menu', type: '{ x: number, y: number, show: boolean }',
                        description: 'первый элемент массива, возвращаемого `useMenu` или второй элемент массива, возвращаемый `useSubmenu`'
                    },
                    {
                        name: "return",
                        type: '[<br/>{onClick: (e: React.MouseEvent&lt;HTMLLIElement&gt;) => void},<br/>{x: number, y: number, ref: React.MutableRefObject&lt;HTMLUListElement&gt;, show: boolean},<br/>React.Dispatch&lt;React.SetStateAction&lt;boolean&gt;&gt;<br/>]',
                        description: 'первый элемент массива передается `MenuItem`, по нажатию на который должно открыться подменю;<br/>второй элемент передаюется `MenuItem`, который представляет подменю'
                    }
                ], 'Аргументы useSubmenu')}`,
            },
        },
    }
} as Meta

export const Example : StoryObj = {
    name: "Меню и кнопка",
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

export const Example2 : StoryObj = {
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
