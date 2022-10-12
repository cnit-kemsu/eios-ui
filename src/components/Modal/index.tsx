import React, {forwardRef, useCallback, useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import {toArray} from '../../utils'
import {useTheme} from '../../theme'
import {Button} from '../Button'
import {dynBackLayerCss, dynContainerCss, dynContentCss, dynHeaderCss, dynTitleCss} from './style'
import {ModalProps} from "./ModalProps";

export const Modal = forwardRef<HTMLDivElement, ModalProps>(({
                                                                 open,
                                                                 title,
                                                                 onClose,
                                                                 children,
                                                                 css,
                                                                 modalLayerDOMElement = document.body,
                                                                 style,
                                                                 ...props
                                                             }: ModalProps, ref) => {

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
            <div ref={ref} {...props} css={dynBackLayerCss({theme, open})}>
                <div
                    onAnimationEnd={open ? undefined : handleAnimationEnd}
                    css={[dynContainerCss({theme, open}), ...toArray(css)]}
                    style={style}
                >
                    <div css={dynHeaderCss({theme})}>
                        <h1 css={dynTitleCss({theme})}>
                            {title}
                        </h1>
                        <Button
                            style={{padding: '0px'}}
                            flat
                            transparent
                            fillable
                            borderless
                            onClick={onClose}
                        >
                            <i className='material-icons'>close</i>
                        </Button>
                    </div>
                    <div css={dynContentCss({theme})}>
                        {children}
                    </div>
                </div>
            </div>
        ),
        modalLayerDOMElement
    )
});

Modal.displayName = "Modal";