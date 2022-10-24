import React, {useState, useCallback} from 'react'

export type ReturnType = [
    { onChange: (value: string | number | undefined) => void, value: string | number | undefined },
    React.Dispatch<React.SetStateAction<string | number | undefined>>
]

export function useInputField(initValue: string | number | undefined) {

    const [value, setValue] = useState(initValue)
    const onChange = useCallback(value => {
        setValue(value);
    }, [])

    return [{value, onChange}, setValue] as ReturnType
}