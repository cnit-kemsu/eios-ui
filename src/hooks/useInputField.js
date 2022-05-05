import { useState, useCallback } from 'react'

export default function useTextInput(initValue, additionalOnChange) {

    const [value, setValue] = useState(initValue)
    const onChange = useCallback(e => {
        setValue(e.target.value)
        additionalOnChange && additionalOnChange(e.target.value)
    }, [])

    return [{ value, onChange }, setValue]
}