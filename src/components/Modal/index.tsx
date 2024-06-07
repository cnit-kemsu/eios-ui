import {forwardRef, useCallback, useEffect, useState} from 'react'
import {useTheme} from '../../theme'
import {Button} from '../Button'
import {
    closeButtonCss,
    dynCloseButtonIconCss,
    contentCss,
    dynBackLayerCss,
    dynContainerCss,
    dynHeaderCss,
    titleCss
} from './style'
import type {ModalProps} from "./ModalProps";
import type {FCR} from "../../types";

export type {ModalProps};

/** Модальное окно. */
export const Modal = forwardRef<HTMLDivElement, ModalProps>(({
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(handleEffect, [open])

    return (open || !isAnimFin) ? (
        <div ref={ref} css={dynBackLayerCss({theme, open})}>
            <div
                onAnimationEnd={open ? undefined : handleAnimationEnd}
                css={[dynContainerCss({theme, open})]}
                style={style} className={className}
            >
                <div css={dynHeaderCss({theme, colorStyle})}>
                    <h2 css={titleCss}>
                        {title}
                    </h2>
                    <Button
                        css={closeButtonCss}
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
}) as FCR<ModalProps, HTMLDivElement>;

Modal.displayName = "Modal";