import React from 'react'

import { Table } from '../../../src/index'
import reactSample from '../reactSample'

export default [
    reactSample(Table, {
        description: (
            <p>
                A wrapper around the native table element. 
                As child elements accepts the same as the native element.               
            </p>
        ),
        target(props){
            return (
                <Table {...props}>
                    <thead>
                        <tr>
                            <td>№</td>
                            <td>Head col 1</td>
                            <td>Head col 2</td>
                            <td>Head col 3</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Col 1.1</td>
                            <td>Col 1.2</td>
                            <td>Col 1.3</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Col 2.1</td>
                            <td>Col 2.2</td>
                            <td>Col 2.3</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Col 3.1</td>
                            <td>Col 3.2</td>
                            <td>Col 3.3</td>
                        </tr>
                    </tbody>
                </Table>
            )
        }
    })
]