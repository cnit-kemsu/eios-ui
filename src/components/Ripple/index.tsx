import React, {useEffect, useMemo, useReducer, useRef} from 'react'
import {useTheme} from '../../theme'
import {toArray} from '../../utils'
import {dynRippleCss, rippleCss, rootCss} from './style'
import {RippleCallbacks} from './RippleCallbacks'
import {initRippleData} from "./RippleData";
import {RippleProps} from "./RippleProps";

export default function Ripple({
                                   color = 'rgba(0,0,0,0.5)', duration = '2s', containerStyle, css,
                                   rippleCss: rippleCssProp, rippleStyle, rippleClassName, ...props
                               }: RippleProps) {

    const {disableRipple} = useTheme();
    const [, forceUpdate] = useReducer(x => x + 1, 0, undefined);
    const rippleDomRef = useRef<HTMLDivElement>(null);
    const rippleDataRef = useRef(initRippleData);

    const {
        mouseEventHandlers, onTransitionEnd, handleEffect
    } = useMemo(() => new RippleCallbacks(() => forceUpdate(), rippleDataRef, rippleDomRef), [])

    useEffect(handleEffect)

    if (disableRipple) return null

    const {active, x, y, diameter, hideRipple} = rippleDataRef.current;

    return (
        <div {...props} ref={rippleDomRef} css={[rootCss, ...toArray(css)]} {...mouseEventHandlers}>
            {
                active && (
                    <div
                        style={rippleStyle}
                        css={[rippleCss, dynRippleCss({color, duration, x, y, diameter, hideRipple}), rippleCssProp]}
                        className={rippleClassName}
                        onTransitionEnd={onTransitionEnd}
                    >
                    </div>
                )
            }
        </div>
    )
}