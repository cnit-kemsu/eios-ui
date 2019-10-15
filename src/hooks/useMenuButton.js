import { useState, useRef, useEffect } from 'react'

import { offset } from '../utils'

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

    const handleButtonClick = (e) => {

        const { offsetLeft, offsetTop } = offset(buttonRef.current)

        const { clientWidth: menuWidth, clientHeight: menuHeight } = menuRef.current
        const { clientWidth: buttonWidth, clientHeight: buttonHeight } = buttonRef.current

        let x, y

        if (position === 'bottom') {
            x = offsetLeft + (buttonWidth - menuWidth) / 2
            y = offsetTop + buttonHeight
        } else if (position === 'right') {
            x = offsetLeft + buttonWidth
            y = offsetTop
        } else if (position === 'left') {
            x = offsetLeft - menuWidth
            y = offsetTop
        } else if (position === 'top') {
            x = offsetLeft + (buttonWidth - menuWidth) / 2
            y = offsetTop - menuHeight
        }

        setOffset({ x, y })
        setShow(!show)
    }

    const handleMenuEnter = () => isMenuHovered.current = true
    const handleMenuLeave = () => isMenuHovered.current = false

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
