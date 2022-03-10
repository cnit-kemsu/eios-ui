import { useState, useCallback } from 'react'

export default function useCheckbox(initChecked, additionalOnClick) {
    const [checked, setChecked] = useState(initChecked)

    const onClick = useCallback(() => {
		setChecked(!checked)
		additionalOnClick && additionalOnClick(!checked)
	}, [checked])

    return [{ onClick, checked }, setChecked]
}