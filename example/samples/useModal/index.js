import React, { useState, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'

import { Modal, Button, useModal } from '../../../src/index'
import reactSample from '../reactSample'


function ModalExample({...props}) {

    const [modal, setOpen] = useModal(false)    

    return (
        <>
            <Modal {...props} {...modal}>
                <p style={{ width: '400px' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi adipisci, tenetur distinctio maiores temporibus vero
                    voluptas nihil aperiam. Hic voluptates tempore incidunt quia
                    enim consectetur voluptate quidem necessitatibus deserunt
                    inventore?
                </p>
            </Modal>
            <Button onClick={() => setOpen(true)}>Open Modal</Button>
        </>
    )
}

const ModalExampleStr = ({ title }) => `function ModalExample() {

    const [modal, setOpen] = useModal(false)    

    return (
        <>
            <Modal title='${title}' {...modal}>
                <p style={{ width: '400px' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi adipisci, tenetur distinctio maiores temporibus vero
                    voluptas nihil aperiam. Hic voluptates tempore incidunt quia
                    enim consectetur voluptate quidem necessitatibus deserunt
                    inventore?
                </p>
            </Modal>
            <Button onClick={() => setOpen(true)}>Open Modal</Button>
        </>
    )
}`


export default [
    {
        title: 'useModal',
        description: <>Click the button below in the View block to open a modal window.</>,
        initPropValues: {
            title: 'Modal Title'
        },
        target(props) {
            return <ModalExample {...props} />
        },
        getCode: (_, props) => ModalExampleStr(props),
        propTypes: {
            title: PropTypes.string
        }

    }
]