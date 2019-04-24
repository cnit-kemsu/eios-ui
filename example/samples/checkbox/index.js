import React from 'react'

import { Checkbox } from '../../../src/index'
import reactSample from '../reactSample'

export default [
    reactSample(Checkbox, {
        description: <>Uses inside the native input element and therefore can be used inside the form</>,
        initPropValues: {
            name: 'name-for-form',
            children: "i'm checkbox",
            onClick: () => alert('Checkbox was clicked')
        }

    })
]