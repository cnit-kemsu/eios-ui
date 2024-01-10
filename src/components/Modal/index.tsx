import {forwardRef, useCallback, useEffect, useState} from 'react'
import {useTheme} from '../../theme'
import {Button} from '../Button'
import {
    dynCloseButtonCss,
    dynCloseButtonIconCss,
    contentCss,
    dynBackLayerCss,
    dynContainerCss,
    dynHeaderCss,
    dynTitleCss
} from './style'
import type {ModalProps} from "./ModalProps";
import type {FCR} from "../types";

/** Модальное окно. */
export const Modal: FCR<ModalProps, HTMLDivElement> = forwardRef<HTMLDivElement, ModalProps>(({
                                                                                                  open = false,
                                                                                                  title,
                                                                                                  onClose,
                                                                                                  children,
                                                                                                  style,
                                                                                                  colorStyle = 'primary',
                                                                                                  className
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
        <div ref={ref} css={dynBackLayerCss({theme, open})}>
            <div
                onAnimationEnd={open ? undefined : handleAnimationEnd}
                css={[dynContainerCss({theme, open})]}
                style={style} className={className}
            >
                <div css={dynHeaderCss({theme, colorStyle})}>
                    <h2 css={dynTitleCss({theme})}>
                        {title}
                    </h2>
                    <Button
                        css={dynCloseButtonCss({theme})}
                        flat
                        transparent
                        fillable
                        borderless
                        colorStyle={colorStyle}
                        onClick={onClose}
                    >
                        <i css={dynCloseButtonIconCss({theme, colorStyle})} className='material-icons'>close</i>
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