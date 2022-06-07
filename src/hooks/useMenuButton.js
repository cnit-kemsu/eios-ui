import { useState, useRef, useEffect, useCallback } from 'react'

import { getOffset, offset } from '../utils'

const emptyParentMenu = { show: true }


export default function useMenuButton(position = 'bottom', { show: parentShow } = emptyParentMenu) {

    const [show, setShow] = useState(false)
    const [{ x, y }, setOffset] = useState({ x: 0, y: 0 })

    const buttonRef = useRef()
    const menuRef = useRef()
    const isMenuHovered = useRef(false)

    useEffect(() => {

        const handleOutsideClick = (e) => {

            if (show && !e.target.dataset.menuitem) {
                setShow(false)
            }
        }

        document.addEventListener('click', handleOutsideClick)

        return () => document.removeEventListener('click', handleOutsideClick)

    }, [show])

    const handleButtonClick = useCallback((e) => {

        /*const { offsetLeft, offsetTop } = offset(buttonRef.current)

        const { clientWidth: menuWidth, clientHeight: menuHeight } = menuRef.current
        const { clientWidth: buttonWidth, clientHeight: buttonHeight } = buttonRef.current

        let newX, newY

        if (position === 'bottom') {
            newX = offsetLeft + (buttonWidth - menuWidth) / 2
            newY = offsetTop + buttonHeight
        } else if (position === 'right') {
            newX = offsetLeft + buttonWidth
            newY = offsetTop
        } else if (position === 'left') {
            newX = offsetLeft - menuWidth
            newY = offsetTop
        } else if (position === 'top') {
            newX = offsetLeft + (buttonWidth - menuWidth) / 2
            newY = offsetTop - menuHeight
        }*/

        let offset = getOffset(buttonRef.current, menuRef.current, position);

        setOffset({ x: offset.left, y: offset.top }/*{ x: newX, y: newY }*/, { x: 0.5, y: 0 })
        setShow(!show)
    }, [show, position])

    const handleMenuEnter = useCallback(() => isMenuHovered.current = true, [])
    const handleMenuLeave = useCallback(() => isMenuHovered.current = false, [])

    return [
        {
            onClick: handleButtonClick,
            ref: buttonRef
        },
        {
            show: show && parentShow, x, y,
            onMouseEnter: handleMenuEnter,
            onMouseLeave: handleMenuLeave,
            ref: menuRef,

        }
    ]
}
