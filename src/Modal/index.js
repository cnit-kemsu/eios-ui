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
import { toArray, createUIComponent } from '../utils'


export default createUIComponent(propMetadata, function Modal({ open, title, onClose, children, css, modalLayerDOMElement, style, ...props }, ref) {

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
            <div ref={ref} {...props} css={dynBacklayerCss({ theme, open })}>
                <div
                    onAnimationEnd={open ? undefined : handleAnimationEnd}
                    css={[dynContainerCss({ theme, open }), ...toArray(css)]}
                    style={style}
                >
                    <div css={dynHeaderCss({ theme })}>
                        <h1 css={dynTitleCss({ theme })}>
                            {title}
                        </h1>
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