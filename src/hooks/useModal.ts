import {useState, useCallback} from 'react'

export function useModal(initOpen: boolean = false) {

    const [open, setOpen] = useState(initOpen);
    const onClose = useCallback(() => setOpen(false), []);

    const modal = {onClose, open};

    return [modal, setOpen] as [typeof modal, typeof setOpen];
}