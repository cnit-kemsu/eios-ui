import React, {useState, useCallback} from 'react'
import {ItemType, ValueType} from "../components/List/ListProps";

type ReturnType = [{ onChange: (value: ValueType, item: ItemType) => void, value: ValueType }, React.Dispatch<React.SetStateAction<ValueType>>]

export function useList(initValue?: ValueType, additionalOnChange?: (value: ValueType, item: ItemType) => void) {

    const [value, setValue] = useState(initValue)
    const onChange = useCallback((val, item) => {
        setValue(val)
        additionalOnChange && additionalOnChange(val, item)
    }, [additionalOnChange])

    return [{onChange, value}, setValue] as ReturnType
}