import { useState, useCallback } from 'react'

export default function useCheckbox(initChecked) {
    const [checked, setChecked] = useState(initChecked)

    const onClick = useCallback(() => setChecked(!checked))

    return { onClick, checked }
}