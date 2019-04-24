import { useState, useCallback } from 'react'


export default function useList(initValue) {

    const [value, setValue] = useState(initValue)
    const onChange = useCallback(val => setValue(val))

    return { onChange, value }
}