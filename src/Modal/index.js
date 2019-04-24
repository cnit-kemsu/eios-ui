import React, { useCallback, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import { useTheme } from '../theme'
import { addPropMetadataTo } from '../prop-types'

import Button from '../Button'

import {
    dynBacklayerCss,
    dynContainerCss,
    dynHeaderCss,
    dynTitleCss,
    dynContentCss
} from './style'

// create backlayer for modals
let modalLayerNode = document.getElementById('__modal_layer__')

if (!modalLayerNode) {
    modalLayerNode = document.createElement('div')
    modalLayerNode.id = '__modal_layer__'
    modalLayerNode.style.position = 'fixed'
    modalLayerNode.style.zIndex = '99999'

    document.body.insertBefore(modalLayerNode, document.body.firstChild)
}

export default function Modal({ open, title, onClose, children, css, modalLayerDOMElement, ...props }) {

    const theme = useTheme()
    
    const [isAnimFin, setAnimFin] = useState(true)
    const handleAnimationEnd = useCallback(() => {
        setAnimFin(true)
    })
    const handleEffect = useCallback(() => {
        if (open && isAnimFin) {
            setAnimFin(false)
        }
    })

    useEffect(handleEffect, [open])

    return ReactDOM.createPortal(
        (open || !isAnimFin) && (
            <div {...props} css={[dynBacklayerCss({ theme, open }), css]}>
                <div
                    onAnimationEnd={open ? undefined : handleAnimationEnd}
                    css={dynContainerCss({ theme, open })}
                >
                    <div css={dynHeaderCss({ theme })}>
                        <div css={dynTitleCss({ theme })}>
                            {title}
                        </div>
                        <Button
                            style={{ padding: '0px' }}
                            flat
                            transparent
                            fillable
                            borderless
                            onClick={onClose}
                        >
                            <i className='material-icons'>close</i>
                        </Button>
                    </div>
                    <div css={dynContentCss({ theme })}>
                        {children}
                    </div>
                </div>
            </div>
        ),
        modalLayerDOMElement
    )

}

addPropMetadataTo(Modal, {
    modalLayerDOMElement: { type: PropTypes.instanceOf(Element), def: modalLayerNode },
    children: { type: PropTypes.node },
    title: { type: PropTypes.string },
    onClose: { type: PropTypes.func },
    open: { type: PropTypes.bool }
})