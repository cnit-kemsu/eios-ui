import React from 'react'
import PropTypes from 'prop-types'

import { Button, Spinner } from '../../../src/index'
import reactSample from '../reactSample'

export default [

    reactSample(Button, {
        title: 'Button',
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
        title: 'Button (anchor as elementType)',
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
    }),

    reactSample(Spinner, {
        title: 'Button (with loading)',
        target(props) {
            return (
                <Button borderless disabled transparent style={{ width: '64px', height: '64px', borderRadius: '100%' }}>
                    <span>Loading</span>
                    <Spinner style={{ position: 'absolute' }} {...props} />
                </Button>
            )
        }
    })
]
