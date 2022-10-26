import React, { useState, useCallback } from 'react'

export type ReturnType = [{ onClick: () => void, checked: boolean }, React.Dispatch<React.SetStateAction<boolean>>]

/**
 * Хук, который используется в паре с компонентом {@link Checkbox}
 * @param initChecked начальное состояние чекбокса
 */
export function useCheckbox(initChecked : boolean) {
    const [checked, setChecked] = useState(initChecked);

    const onClick = useCallback(() => {
		setChecked(cur => !cur)
	}, []);

    return [{ onClick, checked }, setChecked] as ReturnType;
}