import { useState, useCallback } from 'react'

export default function useTextInput(initValue) {

    const [value, setValue] = useState(initValue)
    const onChange = useCallback(e => setValue(e.target.value), [])

    return { value, onChange }
}