import { useState, useCallback } from 'react'
import {ValueType} from "../types";

export function useTabs(initTab?: ValueType) {

    const [tab, setTab] = useState(initTab)
    
    const onTabClick = useCallback((tab : ValueType) => {
        setTab(tab)
    }, [])

    const tabs = { tab, onTabClick };

    return [tabs, setTab] as [typeof tabs, typeof  setTab];
}