import React, {useState, useCallback} from 'react'
import {ValueType} from "../types";

export type UseInputFieldReturnType = [
    { onChange: (value: ValueType) => void, value: string | number | undefined },
    React.Dispatch<React.SetStateAction<string | number | undefined>>
]

export function useInputField(initValue: string | number | undefined) {

    const [value, setValue] = useState(initValue)
    const onChange = useCallback((value: ValueType) => {
        setValue(value);
    }, [])

    return [{value, onChange}, setValue] as UseInputFieldReturnType
}