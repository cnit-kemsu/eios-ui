import React from 'react'

import { Checkbox } from '../../../src/index'
import reactSample from '../reactSample'

export default [
    reactSample(Checkbox, {
        description: <>Может быть использован внутри элемента <i>form</i>.</>,
        initPropValues: {
            name: 'name-for-form',
            children: "i'm checkbox",
            onClick: () => alert('Checkbox was clicked')
        }

    })
]