import { useState, useCallback } from 'react'


export default function useModal(initOpen) {

    const [open, setOpen] = useState(initOpen)
    const onClose = useCallback(open => setOpen(!open))

    return [{ onClose, open }, setOpen]
}