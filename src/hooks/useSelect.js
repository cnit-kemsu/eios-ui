import { useState, useCallback, useEffect, useRef } from 'react'





export default function useSelect(initValue) {

    const [value, setValue] = useState(initValue)
    const [open, setOpen] = useState(false)

    const onChange = useCallback((v) => { setValue(v); setOpen(false) })
    const onClick = useCallback(() => setOpen(!open))
    const ref = useRef()

    useEffect(() => {

        let isHovered = false

        const handleOutsideClick = () => !isHovered && setOpen(false)
        const handleMouseEnter = () => isHovered = true
        const handleMouseLeave = () => isHovered = false

        ref.current.addEventListener('mouseenter', handleMouseEnter)
        ref.current.addEventListener('mouseleave', handleMouseLeave)
        document.addEventListener('click', handleOutsideClick)

        return () => {
            ref.current.removeEventListener('mouseenter', handleMouseEnter)
            ref.current.removeEventListener('mouseenter', handleMouseLeave)
            document.removeEventListener('click', handleOutsideClick)
        }
    }, [])

    return {
        open, onClick,
        onChange, value,
        ref
    }
}