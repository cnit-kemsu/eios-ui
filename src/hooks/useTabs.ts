import { useState, useCallback } from 'react'
import {ValueType} from "../components/types";

export default function useTabs(initTab?: ValueType, additionalOnChange?: (tab: ValueType) => void) {

    const [tab, setTab] = useState(initTab)
    
    const onTabClick = useCallback((tab : ValueType) => {
        setTab(tab)
        additionalOnChange && additionalOnChange(tab)
    }, [additionalOnChange])

    const tabs = { tab, onTabClick };

    return [tabs, setTab] as [typeof tabs, typeof  setTab];
}