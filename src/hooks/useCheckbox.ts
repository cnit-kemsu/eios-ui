import React, { useState, useCallback } from 'react'

export type ReturnType = [{ onClick: () => void, checked: boolean }, React.Dispatch<React.SetStateAction<boolean>>]

/**
 * Хук, который используется в паре с компонентом {@link Checkbox}
 * @param initChecked начальное состояние чекбокса
 * @param additionalOnClick дополнительный обработчик, который вызовется при нажатии на чекбокс
 */
export function useCheckbox(initChecked : boolean, additionalOnClick? : (checked : boolean) => void) {
    const [checked, setChecked] = useState(initChecked)

    const onClick : () => void = useCallback(() => {
		setChecked(!checked)
		additionalOnClick && additionalOnClick(!checked)
	}, [checked])

    return [{ onClick, checked }, setChecked] as ReturnType
}