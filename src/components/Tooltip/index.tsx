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
                            position = "top",
                            ...props
                        }: TooltipProps) {

    const theme = useTheme();

    const [show, setShow] = useState(false);
    const [offset, setOffset] = useState(initOffset);

    const tooltipRef = useRef() as MutableRefObject<HTMLDivElement>;
    const enteredTheTooltipAreaRef = useRef(false);

    const updateOffset = useCallback(() => {
        let offset = getElementPositionRelativeTo(targetElementRef.current, tooltipRef.current, positionToPointMap[position], positionToPivotMap[position]);
        if(offset) setOffset({left: offset.x, top: offset.y});
    }, [position])

    const showTooltip = useCallback(debounce(target => {

        if (/*!target*/!targetElementRef.current || !tooltipRef.current) return;

        //let offset = getElementPositionRelativeTo(/*target*/targetElementRef.current, tooltipRef.current, positionToPointMap[position], positionToPivotMap[position]);
        //setOffset({left: offset.x, top: offset.y});
        updateOffset();

        setShow(true);

    }, showDelay * 1000), [position, showDelay]);

    const hideTooltip = useCallback(debounce(target => {

        if (!tooltipRef.current || enteredTheTooltipAreaRef.current) return;

        setShow(false)

        if(!/*target*/targetElementRef.current) return;

        //let offset = getElementPositionRelativeTo(/*target*/targetElementRef.current, tooltipRef.current, positionToPointMap[position], positionToPivotMap[position]);
        //if (offset) setOffset({left: offset.x, top: offset.y});

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
    }, [])

    useEffect(() => {

        const handleMouseEnter = (e) => {
            showTooltip?.(e.currentTarget)
        }

        const handleMouseLeave = (e) => {
            showTooltip.cancel?.();
            hideTooltip?.(e.currentTarget);
        }

        targetElementRef.current?.addEventListener('mouseenter', handleMouseEnter);
        targetElementRef.current?.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            targetElementRef.current?.removeEventListener('mouseenter', handleMouseEnter);
            targetElementRef.current?.removeEventListener('mouseleave', handleMouseLeave);
        }

    }, [showTooltip, hideTooltip, targetElementRef.current])

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
        <div {...props}
             css={[tooltipCss, dynTooltipCss({theme})]}>
            {children}
        </div>
    );

    const arrowElement = hideArrow ? null : <div css={[arrowCss, dynArrowCss({theme, position})]}></div>;

    return (
        <div
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