import React, {forwardRef, useCallback, useEffect, useState} from 'react'
import {toArray} from '../../utils'
import {useTheme} from '../../theme'
import {Button} from '../Button'
import {
    closeButtonCss,
    closeButtonIconCss,
    dynBackLayerCss,
    dynContainerCss,
    dynContentCss,
    dynHeaderCss,
    dynTitleCss
} from './style'
import {ModalProps} from "./ModalProps";

export const Modal : React.FC<ModalProps> = forwardRef<HTMLDivElement, ModalProps>(({
                                                                 open = false,
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

    return (open || !isAnimFin) ? (
        <div ref={ref} {...props} css={dynBackLayerCss({theme, open})}>
            <div
                onAnimationEnd={open ? undefined : handleAnimationEnd}
                css={[dynContainerCss({theme, open}), ...toArray(css)]}
                style={style}
            >
                <div css={dynHeaderCss({theme})}>
                    <h2 css={dynTitleCss({theme})}>
                        {title}
                    </h2>
                    <Button
                        css={closeButtonCss}
                        flat
                        transparent
                        fillable
                        borderless
                        onClick={onClose}
                    >
                        <i css={closeButtonIconCss} className='material-icons'>close</i>
                    </Button>
                </div>
                <div css={dynContentCss({theme})}>
                    {children}
                </div>
            </div>
        </div>
    ) : null;
});

Modal.displayName = "Modal";