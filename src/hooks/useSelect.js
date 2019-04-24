import { useState, useCallback } from 'react'

export default function useSelect(initValue) {

    const [value, setValue] = useState(initValue)
    const [open, setOpen] = useState(false)

    const onChange = useCallback((v) => { setValue(v); setOpen(false) })
    const onClick = useCallback(() => setOpen(!open))


    return {
        open, onClick,
        onChange, value
    }
}