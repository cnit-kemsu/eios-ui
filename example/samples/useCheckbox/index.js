import React from 'react'
import { useCheckbox, Checkbox } from '../../../src/index'


function Example() {

    const [checkbox] = useCheckbox(false)

    return (
        <Checkbox {...checkbox}>i'am checkbox</Checkbox>
    )
}

const code = `function Example() {

    const [checkbox] = useCheckbox(false)

    return (
        <Checkbox {...checkbox}>i'am checkbox</Checkbox>
    )
}`

export default [
    {
        title: 'useCheckbox',
        target() {
            return <Example />
        },
        getCode: () => code
    }
]