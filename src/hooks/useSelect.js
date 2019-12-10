import { useState, useEffect, useRef, useCallback } from 'react'





export default function useSelect(initValue, additionalOnChange) {

    const [value, setValue] = useState(initValue)
    const [open, setOpen] = useState(false)

    const onChange = useCallback((v, c) => { setValue(v); setOpen(false); additionalOnChange && additionalOnChange(v, c) }, [additionalOnChange])
    const onClick = useCallback(() => setOpen(!open), [open])
    const ref = useRef()

    useEffect(() => {

        if (!ref.current) return

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
    }, [ref.current])

    return {
        open, onClick,
        onChange, value,
        ref
    }
}