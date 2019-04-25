import React from 'react'

import { Checkbox } from '../../../src/index'
import reactSample from '../reactSample'

export default [
    reactSample(Checkbox, {
        description: <>Can be used inside the <i>form</i> element</>,
        initPropValues: {
            name: 'name-for-form',
            children: "i'm checkbox",
            onClick: () => alert('Checkbox was clicked')
        }

    })
]