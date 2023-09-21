import {forwardRef, useCallback, useEffect, useState} from 'react'
import {useTheme} from '../../theme'
import {Button} from '../Button'
import {
    closeButtonCss,
    closeButtonIconCss,
    contentCss,
    dynBackLayerCss,
    dynContainerCss,
    dynHeaderCss,
    dynTitleCss
} from './style'
import type {ModalProps} from "./ModalProps";
import type {FCR} from "../types";

export const Modal : FCR<ModalProps, HTMLDivElement> = forwardRef<HTMLDivElement, ModalProps>(({
                                                                 open = false,
                                                                 title,
                                                                 onClose,
                                                                 children,
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
                css={[dynContainerCss({theme, open})]}
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
                <div css={contentCss}>
                    {children}
                </div>
            </div>
        </div>
    ) : null;
});

Modal.displayName = "Modal";