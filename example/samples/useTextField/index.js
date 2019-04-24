import React from 'react'
import { useTextField, TextField } from '../../../src/index'


function Example() {

    const ti = useTextField(42)

    return (
        <>
            <TextField {...ti} />
            <div style={{ marginTop: '8px' }}>echo: {ti.value}</div>
        </>
    )
}

const code = `function Example() {

    const ti = useTextField(42)

    return (
        <>
            <TextField {...ti} />
            <div style={{ marginTop: '8px' }}>echo: {ti.value}</div>
        </>
    )
}
`

export default [
    {
        title: 'useTextField',
        target() {
            return <Example />
        },
        getCode: () => code
    }
]