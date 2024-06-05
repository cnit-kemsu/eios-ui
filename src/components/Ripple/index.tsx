import {MutableRefObject, useEffect, useMemo, useReducer, useRef} from 'react'
import {useTheme} from '../../theme'
import {dynRippleCss, rippleCss, rootCss} from './style'
import {RippleCallbacks} from './RippleCallbacks'
import {initRippleData} from "./RippleData";
import {RippleProps} from "./RippleProps";

export type {RippleProps};

/** Эффект ряби. */
export function Ripple({
                           color = 'rgba(0,0,0,0.5)', duration = '2s',
                           rippleStyle, rippleClassName, style, className
                       }: RippleProps) {

    const {disableRipple} = useTheme();
    const [, forceUpdate] = useReducer(x => x + 1, 0, undefined);
    const rippleDomRef = useRef(null) as MutableRefObject<HTMLDivElement | null>;
    const rippleDataRef = useRef(initRippleData);

    const {
        mouseEventHandlers, onTransitionEnd, handleEffect
    } = useMemo(() => new RippleCallbacks(() => forceUpdate(), rippleDataRef, rippleDomRef), [])

    useEffect(handleEffect)

    if (disableRipple) return null

    const {active, x, y, diameter, hideRipple} = rippleDataRef.current;

    return (
        <div style={style} className={className} ref={rippleDomRef} css={[rootCss]} {...mouseEventHandlers}>
            {
                active && (
                    <div
                        style={rippleStyle} className={rippleClassName}
                        css={[rippleCss, dynRippleCss({color, duration, x, y, diameter, hideRipple})]}
                        onTransitionEnd={onTransitionEnd}
                    >
                    </div>
                )
            }
        </div>
    )
}