import React from 'react'
import PropTypes from 'prop-types'

import { Button } from '../../../src/index'
import reactSample from '../reactSample'

export default [
    reactSample(Button, {     
        title: 'Button~1',
        description: <>By default, Button represents a wrapper around the native button element.</>,
        propTypes: {            
            onClick: PropTypes.func
        },
        initPropValues: {            
            children: 'Push Me!',
            onClick: () => alert('Good human :)')
        }
    }),

    reactSample(Button, {
        title: 'Button~2',
        description: <>Instead of button you can use another type of element, for example anchor.</>,
        propTypes: {
            href: PropTypes.string
        },
        dynamicPropValues({ href }) {
            return { children: `Go to ${href}` }
        },
        initPropValues: {
            elementType: 'a',
            href: '/'
        }
    })
]
