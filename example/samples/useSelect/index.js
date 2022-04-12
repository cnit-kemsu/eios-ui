import React from 'react'
import { useSelect, Select } from '../../../src/index'

const items = ['Item 1', 'Item 2', 'Item 3 Long', 'Item 4']

function Example() {

    const [select] = useSelect('Item 1')

    return (
        <>
            <Select fullWidth valueFromContent items={items} {...select} />
            <div style={{ marginTop: '8px' }}>Selected Item: {select.value}</div>
        </>
    )
}

const code = `const items = ['Item 1', 'Item 2', 'Item 3 Long', 'Item 4']

function Example() {

    const [select] = useSelect('Item 1')

    return (
        <>
            <Select valueFromContent items={items} {...select} />
            <div>{select.value}</div>
        </>
    )
}
`

export default [
    {
        title: 'useSelect',
        target() {
            return <Example />
        },
        getCode: () => code
    }
]