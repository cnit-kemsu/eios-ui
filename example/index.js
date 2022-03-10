import React, { useEffect, useMemo } from 'react'
import ReactDOM from 'react-dom'

import createInteractiveDoc from './createInteractiveDoc'
import samples from './samples'

import { Select, useSelect, Message } from '../src/index'

const transformedSamples = samples.map(sample => ({ value: sample.title || sample, content: sample.title || sample }))


function App() {


    const [select] = useSelect(localStorage.getItem('sampleName') || '')

    useEffect(() => {
        localStorage.setItem('sampleName', select.value)
    }, [select.value])

    let sample

    for (let s of samples) {
        if (s.title === select.value) {
            sample = s
            break
        }
    }

    const InteractiveDoc = useMemo(() => sample && typeof sample !== 'string' ? createInteractiveDoc(sample) : null, [select.value])

    return (
        <>
            <h1>Interactive Samples</h1>

            <span style={{ marginRight: '8px' }}>Samples:</span><Select size={15} borderless items={transformedSamples} {...select} />

            <hr />

            <main>
                {
                    sample ?
                        InteractiveDoc && <InteractiveDoc />
                        :
                        <Message>Choose sample from the drop-down list above.</Message>
                }
            </main>
        </>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));