import React from 'react'
import { useInputField, InputField } from '../../../src/index'


function Example() {

    const [ti] = useInputField(42)

    return (
        <>
            <InputField {...ti} />
            <div style={{ marginTop: '8px' }}>echo: {ti.value}</div>
        </>
    )
}

const code = `function Example() {

    const [ti] = useInputField(42)

    return (
        <>
            <InputField {...ti} />
            <div style={{ marginTop: '8px' }}>echo: {ti.value}</div>
        </>
    )
}
`

export default [
    {
        title: 'useInputField',
        target() {
            return <Example />
        },
        getCode: () => code
    }
]