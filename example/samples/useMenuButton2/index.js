import React from 'react'

import { Menu, MenuItem, Button, useMenuButton } from '../../../src/index'


function Example({ borderless, flat }) {

    return (
        <>
            <Button {...button}>Push Me!</Button>

            <Menu {...menu} borderless={borderless} flat={flat}>
                <MenuItem {...menuItem}>Item 1</MenuItem>
                <MenuItem onClick={() => alert('Item 2 was clicked')}>Item 2</MenuItem>
                <MenuItem onClick={() => alert('Item 3 was clicked')}>Item 3</MenuItem>
                <MenuItem onClick={() => alert('Item 4 was clicked')}>Item 4</MenuItem>
            </Menu>

            <Menu {...submenu} borderless={borderless} flat={flat} >
                <MenuItem onClick={() => alert('Item 1.1 was clicked')}>Item 1.1</MenuItem>
                <MenuItem onClick={() => alert('Item 1.2 was clicked')}>Item 1.2</MenuItem>               
            </Menu>
        </>
    )
}


export default [
    {
        title: 'useMenuButton',
        propTypes: {
            ...Menu.propTypes,
            show: undefined,
            x: undefined,
            y: undefined
        },
        initPropValues: Menu.defaultProps,
        propInfo: Menu.propInfo,
        target(props) {
            return <Example {...props} />
        },
        getCode() {
            return `function Example({ borderless, flat }) {

    const [button, menu] = useMenuButton()
    const [menuItem, submenu] = useMenuButton('right')

    return (
        <>
            <Button {...button}>Push Me!</Button>

            <Menu {...menu} borderless={borderless} flat={flat}>
                <MenuItem {...menuItem}>Item 1</MenuItem>
                <MenuItem onClick={() => alert('Item 2 was clicked')}>Item 2</MenuItem>
                <MenuItem onClick={() => alert('Item 3 was clicked')}>Item 3</MenuItem>
                <MenuItem onClick={() => alert('Item 4 was clicked')}>Item 4</MenuItem>
            </Menu>

            <Menu {...submenu} borderless={borderless} flat={flat} >
                <MenuItem onClick={() => alert('Item 1.1 was clicked')}>Item 1.1</MenuItem>
                <MenuItem onClick={() => alert('Item 1.2 was clicked')}>Item 1.2</MenuItem>               
            </Menu>
        </>
    )
}`
        }
    }
]