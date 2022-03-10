import { useState, useCallback } from 'react'


export default function useList(initValue, additionalOnChange) {

    const [value, setValue] = useState(initValue)
    const onChange = useCallback((val, content) => {
        setValue(val)
        additionalOnChange && additionalOnChange(val, content)
    }, [additionalOnChange])

    return [{ onChange, value }, setValue]
}