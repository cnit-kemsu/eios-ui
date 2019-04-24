import React from 'react'

import { Tabs, Tab } from '../../../src/index'
import reactSample from '../reactSample'

export default [
    reactSample(Tabs, {
        target(props) {

            return (
                <Tabs {...props}>
                    <Tab id='tab1'>Tab 1</Tab>
                    <Tab id='tab2'>Tab 2</Tab>
                    <Tab id='tab3'>Tab 3</Tab>
                </Tabs>
            )
        },
        initPropValues: {
            tab: 0,
            tabElementType: 'button',
            onTabClick: tabId => console.log(`Tab with id=${tabId} was clicked`)           
        }
    })
]