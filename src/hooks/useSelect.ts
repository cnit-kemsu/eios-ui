import {useCallback, useState} from 'react'
import {ItemType, ValueType} from "../components/types";

export function useSelect(initValue?: ValueType) {

    const [value, setValue] = useState(initValue);
    const [open, setOpen] = useState(false);

    const onChange = useCallback((v: ValueType, _: ItemType) => {
        setValue(v);
        setOpen(false);
    }, []);

    const onClick = useCallback(() => {
        setOpen(cur => !cur)
    }, []);

    const onOutsideClick = useCallback(() => setOpen(false), []);

    const select = {
        open, onClick,
        onChange, value,
        enableOutsideArea: true,
        onOutsideClick
    };

    return [select, setValue, setOpen] as [typeof select, typeof setValue, typeof setOpen];
}