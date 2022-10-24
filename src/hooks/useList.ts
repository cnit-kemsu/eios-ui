import React, {useState, useCallback} from 'react'
import {ItemType, ValueType} from "../components/types";

type ReturnType = [{ onChange: (value: ValueType, item: ItemType) => void, value: ValueType }, React.Dispatch<React.SetStateAction<ValueType>>]

export function useList(initValue?: ValueType) {

    const [value, setValue] = useState(initValue)
    const onChange = useCallback((val, _) => {
        setValue(val)
    }, [])

    return [{onChange, value}, setValue] as ReturnType
}