import React, {MutableRefObject, useCallback, useEffect, useRef, useState} from 'react'
import {debounce, getElementPositionRelativeTo, toArray} from '../../utils'
import {useTheme} from '../../theme'
import {arrowCss, dynArrowCss, dynRootCss, dynTooltipCss, rootCss, tooltipCss} from './style'
import {TooltipProps} from "./TooltipProps";

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

export function Tooltip({
                            targetElementRef,
                            children,
                            hideArrow,
                            showDelay = 0.5,
                            hideDelay = 0.5,
                            css,
                            position = "top",
                            ...props
                        }: TooltipProps) {

    const theme = useTheme();

    const [show, setShow] = useState(false);
    const [offset, setOffset] = useState(initOffset);

    const tooltipRef = useRef() as MutableRefObject<HTMLDivElement>;

    const showTooltip = useCallback(debounce(target => {

        if (!target || !tooltipRef.current) return;

        let offset = getElementPositionRelativeTo(target, tooltipRef.current, positionToPointMap[position], positionToPivotMap[position]);

        setOffset({left: offset.x, top: offset.y});
        setShow(true);

    }, showDelay * 1000), [position, showDelay]);

    const hideTooltip = useCallback(debounce(target => {

        if (!target || !tooltipRef.current) return;

        setShow(false)

        let offset = getElementPositionRelativeTo(target, tooltipRef.current, positionToPointMap[position], positionToPivotMap[position]);
        if (offset) setOffset({left: offset.x, top: offset.y});

    }, hideDelay * 1000), [position, hideDelay]);

    const handleMouseEnter = useCallback((e) => {
        showTooltip?.(e.currentTarget)
    }, []);

    const handleMouseLeave = useCallback((e) => {
        showTooltip.cancel?.();
        hideTooltip?.(e.currentTarget);
    }, []);

    useEffect(() => {

        targetElementRef.current?.addEventListener('mouseenter', handleMouseEnter);
        targetElementRef.current?.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            targetElementRef.current?.removeEventListener('mouseenter', handleMouseEnter);
            targetElementRef.current?.removeEventListener('mouseleave', handleMouseLeave);
        }

    }, [targetElementRef])

    useEffect(() => () => {
        showTooltip?.cancel?.();
        hideTooltip?.cancel?.();
    }, []);

    const handleTooltipMouseEnter = () => hideTooltip.cancel?.();
    const handleTooltipMouseLeave = () => hideTooltip?.();

    const contentElement = (
        <div {...props}
             css={[tooltipCss, dynTooltipCss({theme}), ...(Array.isArray(css) ? css : [css])]}>
            {children}
        </div>
    );

    const arrowElement = hideArrow ? null : <div css={[arrowCss, dynArrowCss({theme, position})]}></div>;

    return (
        <div
            onMouseEnter={handleTooltipMouseEnter}
            onMouseLeave={handleTooltipMouseLeave}
            ref={tooltipRef} css={[rootCss, dynRootCss({theme, position, show, offset}), ...toArray(css)]}
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