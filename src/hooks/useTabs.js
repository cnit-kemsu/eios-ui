import { useState, useCallback } from 'react'

export default function useTabs(initTab, additionalOnChange) {

    const [tab, setTab] = useState(initTab)
    
    const onTabClick = useCallback(tab => {
        setTab(tab)
        additionalOnChange && additionalOnChange(tab)
    }, [additionalOnChange])

    return [{ tab, onTabClick }, setTab]
}