import React from 'react'
import { useTabs, Tabs, Tab } from '../../../src/index'

const tabContentMap = {
    tab1: 'Tab 1 Content',
    tab2: 'Tab 2 Content',
    tab3: 'Tab 3 Content'
}

function Example() {

    const tabs = useTabs('tab1')

    return (
        <>
            <Tabs {...tabs}>
                <Tab id='tab1' title='Tab 1'>Tab 1</Tab>
                <Tab id='tab2' title='Tab 2'>Tab 2</Tab>
                <Tab id='tab3' title='Tab 3'>Tab 3</Tab>
            </Tabs>
            <div style={{ padding: '8px' }}>
                {tabContentMap[tabs.tab]}
            </div>
        </>
    )
}

const code = `const tabContentMap = {
    tab1: 'Tab 1 Content',
    tab2: 'Tab 2 Content',
    tab3: 'Tab 3 Content'
}

function Example() {

    const tabs = useTabs('tab1')

    return (
        <>
            <Tabs {...tabs}>
                <Tab id='tab1' title='Tab 1'>Tab 1</Tab>
                <Tab id='tab2' title='Tab 2'>Tab 2</Tab>
                <Tab id='tab3' title='Tab 3'>Tab 3</Tab>
            </Tabs>
            <div style={{ padding: '8px' }}>
                {tabContentMap[tabs.tab]}
            </div>
        </>
    )
}`

export default [
    {
        title: 'useTabs',
        target() {
            return <Example />
        },
        getCode: () => code
    }
]