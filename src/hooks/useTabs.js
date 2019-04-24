import { useState, useCallback } from 'react'

export default function useTabs(initTab) {

    const [tab, setTab] = useState(initTab)
    const onTabClick = useCallback(tab => setTab(tab))

    return { tab, onTabClick }
}