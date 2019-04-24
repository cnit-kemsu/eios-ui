import React from 'react'

import { Ripple } from '../../../src/index'
import reactSample from '../reactSample'

const divStyle = {
    textAlign: 'center',
    background: 'gray',
    color: 'white',
    width: '100px',
    height: '100px'
}

const titleStyle = {
    marginTop: '40%',
    display: 'inline-block'
}

export default [
    reactSample(Ripple, {
        title: 'Ripple',
        description: <><div>An example of using Ripple to create a ripple effect. </div><div><b>Important!</b> Add the style property "position: relative" to the parent.</div></>,
        target(props) {
            return (
                <div style={{ position: 'relative', ...divStyle }}>
                <Ripple {...props} />
                <span style={titleStyle}>Click Me!</span>
            </div>
            )
        }
    })
]