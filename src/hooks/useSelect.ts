import {useState, useEffect, useRef, useCallback, MutableRefObject} from 'react'
import {ItemType, ValueType} from "../components/types";


export default function useSelect(initValue?: ValueType, additionalOnChange?: (value: ValueType, item: ItemType) => void) {

    const [value, setValue] = useState(initValue)
    const [open, setOpen] = useState(false)

    const onChange = useCallback((v: ValueType, item: ItemType) => {
        setValue(v);
        setOpen(false);
        additionalOnChange && additionalOnChange(v, item)
    }, [additionalOnChange])

    const onClick = useCallback(() => setOpen(!open), [open])
    const ref = useRef() as MutableRefObject<HTMLDivElement>;

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
            ref.current && ref.current.removeEventListener('mouseenter', handleMouseEnter)
            ref.current && ref.current.removeEventListener('mouseenter', handleMouseLeave)
            document.removeEventListener('click', handleOutsideClick)
        }
    }, [ref.current])

    const select = {
        open, onClick,
        onChange, value,
        ref
    };

    return [select, setValue] as [typeof select, typeof setValue];
}