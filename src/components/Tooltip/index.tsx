import {MutableRefObject, useCallback, useEffect, useRef, useState} from 'react'
import {debounce, getElementPositionRelativeTo} from '../../utils'
import {useTheme} from '../../theme'
import {arrowCss, dynArrowCss, dynRootCss, dynTooltipCss, rootCss, tooltipCss} from './style'
import {TooltipProps} from "./types";

const initOffset = {left: 0, top: 0};

const positionToPointMap = {
    'left': {x: 0, y: 0.5},
    'right': {x: 1, y: 0.5},
    'top': {x: 0.5, y: 0},
    'bottom': {x: 0.5, y: 1}
};

const positionToPivotMap = {
    'left': {x: 1, y: 0.5},
    'right': {x: 0, y: 0.5},
    'top': {x: 0.5, y: 1},
    'bottom': {x: 0.5, y: 0}
}

export type {TooltipProps};

/** @deprecated Используйте Popup, usePopup и withPopup */
export function Tooltip({
                            targetElementRef,
                            children,
                            hideArrow,
                            showDelay = 0.5,
                            hideDelay = 0.5,
                            position = "top",
                            style, className,
                            contentStyle, contentClassName,
                            arrowStyle, arrowClassName
                        }: TooltipProps) {

    const theme = useTheme();

    const [show, setShow] = useState(false);
    const [offset, setOffset] = useState(initOffset);

    const tooltipRef = useRef() as MutableRefObject<HTMLDivElement>;
    const enteredTheTooltipAreaRef = useRef(false);

    const updateOffset = useCallback(() => {
        if (!targetElementRef?.current) return;
        const offset = getElementPositionRelativeTo(targetElementRef.current, tooltipRef.current, positionToPointMap[position], positionToPivotMap[position]);
        if (offset) setOffset({left: offset.x, top: offset.y});
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [position])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const showTooltip = useCallback(debounce(() => {

        if (!targetElementRef?.current || !tooltipRef.current) return;
        updateOffset();
        setShow(true);

    }, showDelay * 1000), [position, showDelay]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const hideTooltip = useCallback(debounce(() => {

        if (!tooltipRef.current || enteredTheTooltipAreaRef.current) return;

        setShow(false)
        if (!targetElementRef?.current) return;
        updateOffset();

    }, hideDelay * 1000), [position, hideDelay]);

    useEffect(() => {

        const handleResize = () => {
            updateOffset();
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {

        const handleMouseEnter = (e: MouseEvent) => {
            showTooltip?.(e.currentTarget)
        }

        const handleMouseLeave = (e: MouseEvent) => {
            showTooltip.cancel?.();
            hideTooltip?.(e.currentTarget);
        }

        targetElementRef?.current?.addEventListener('mouseenter', handleMouseEnter);
        targetElementRef?.current?.addEventListener('mouseleave', handleMouseLeave);

        const targetElement = targetElementRef?.current;

        return () => {
            targetElement?.removeEventListener('mouseenter', handleMouseEnter);
            targetElement?.removeEventListener('mouseleave', handleMouseLeave);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showTooltip, hideTooltip, targetElementRef?.current])

    useEffect(() => () => {
        showTooltip?.cancel?.();
        hideTooltip?.cancel?.();
    }, [showTooltip, hideTooltip]);

    const handleTooltipMouseEnter = () => {
        hideTooltip.cancel?.();
        enteredTheTooltipAreaRef.current = true;
    }
    const handleTooltipMouseLeave = () => {
        enteredTheTooltipAreaRef.current = false;
        hideTooltip?.();
    }

    const contentElement = (
        <div
            style={contentStyle} className={contentClassName}
            css={[tooltipCss, dynTooltipCss({theme})]}>
            {children}
        </div>
    );

    const arrowElement = <div style={arrowStyle} className={arrowClassName}
                              css={[arrowCss, dynArrowCss({theme, position, hideArrow})]}></div>;

    return (
        <div
            style={style} className={className}
            onMouseEnter={handleTooltipMouseEnter}
            onMouseLeave={handleTooltipMouseLeave}
            ref={tooltipRef} css={[rootCss, dynRootCss({theme, position, show, offset})]}
        >
            {
                position === 'left' || position === 'top'
                    ?
                    <>{contentElement}{arrowElement}</>
                    :
                    <>{arrowElement}{contentElement}</>
            }
        </div>
    )
}