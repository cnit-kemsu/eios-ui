import React, { useCallback, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import {
    dynBacklayerCss,
    dynContainerCss,
    dynHeaderCss,
    dynTitleCss,
    dynContentCss
} from './style'
import propMetadata from './propMetadata'

import { useTheme } from '../theme'
import Button from '../Button'
import { toArray, createUi } from '../utils'


export default createUi(propMetadata, function Modal({ open, title, onClose, children, css, modalLayerDOMElement, ...props }, ref) {

    const theme = useTheme()
    
    const [isAnimFin, setAnimFin] = useState(true)
    const handleAnimationEnd = useCallback(() => {
        setAnimFin(true)
    }, [])
    
    const handleEffect = useCallback(() => {
        if (open && isAnimFin) {
            setAnimFin(false)
        }
    }, [open, isAnimFin])

    useEffect(handleEffect, [open])

    return ReactDOM.createPortal(
        (open || !isAnimFin) && (
            <div ref={ref} {...props} css={[dynBacklayerCss({ theme, open }), ...toArray(css)]}>
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
})