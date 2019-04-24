import React from 'react'

import { Tooltip, Button } from '../../../src/index'
import reactSample from '../reactSample'

function Example(props) {

    return (
        <div css={{
            display: 'flex',            
            justifyContent: 'center'
        }}>
            <Tooltip content="I'am button tooltip" {...props} contentStyle={{ width: '200px' }}>
                <Button>I'am button with tooltip</Button>
            </Tooltip>
        </div>
    )
}

export default [
    reactSample(Tooltip, {
        title: 'Tooltip',
        target(props) {
            return <Example {...props} />
        }
    })
]