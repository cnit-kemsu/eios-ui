import React, {useState, useCallback} from 'react'
import {ValueType} from "../types";

export type UseListReturnType = [{
    onChange: (value: ValueType) => void,
    value: ValueType
}, React.Dispatch<React.SetStateAction<ValueType>>]

export function useList(initValue?: ValueType) {

    const [value, setValue] = useState(initValue)
    const onChange = useCallback((val: ValueType) => {
        setValue(val)
    }, [])

    return [{onChange, value}, setValue] as UseListReturnType
}