import React from 'react'
import { useList, List } from '../../../src/index'

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4']

function Example() {

    const [list] = useList('Item 1')

    return (
        <>
            <List valueFromContent items={items} {...list} />
            <div style={{ marginTop: '8px' }}>Selected Item: {list.value}</div>
        </>
    )
}

const code = `const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4']

function Example() {

    const [list] = useList('item1')

    <>
        <List valueFromContent items={items} {...list} />
        <div style={{ marginTop: '8px' }}>Selected Item: {list.value}</div>
    </>
}
`

export default [
    {
        title: 'useList',
        target() {
            return <Example />
        },
        getCode: () => code
    }
]