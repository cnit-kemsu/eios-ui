import React from 'react'
import PropTypes from 'prop-types'

import { List } from '../../../src/index'
import reactSample from '../reactSample'

export default [
    reactSample(List, {
        title: 'List~1',        
        initPropValues: {
            name: 'name-for-form',
            onChange: value => alert(`List item with value "${value}" was clicked`),
            value: 0,
            items: [1, 2, 3, 4, 5]
        }
    }),

    reactSample(List, {
        title: 'List~2',
        initPropValues: {
            name: 'name-for-form',
            value: 'item1',
            onChange: value => alert(`List item with value "${value}" was clicked`),
            items: [
                { value: 'item1', content: 'Item 1' },
                { value: 'item2', content: 'Item 2' },
                { value: 'item3', content: 'Item 3' },
                { value: 'item4', content: 'Item 4' }
            ]
        }
    })
]