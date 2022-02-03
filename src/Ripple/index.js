import React, { useState, useMemo, useRef, useEffect } from 'react'

import RippleExtra from './RippleExtra'
import { useTheme } from '../theme'
import { toArray, createUIComponent } from '../utils'

import { rootCss, rippleCss, dynRippleCss } from './style'
import propMetadata from './propMetadata'


export default createUIComponent(propMetadata, function Ripple({
    color, duration, containerStyle, css,
    rippleCss: rippleCssProp, rippleStyle, rippleClassName, ...props
}) {

    const { disableRipple } = useTheme()
    const [, forceUpdate] = useState()
    const rippleDomRef = useRef()
    const rippleExtra = useMemo(() => new RippleExtra(forceUpdate, rippleDomRef), [])

    const {
        mouseEventHandlers, onTransitionEnd, handleEffect,
        active, x, y, diameter, hideRipple
    } = rippleExtra

    useEffect(handleEffect)

    if (disableRipple) return null

    return (
        <div {...props} ref={rippleDomRef} css={[rootCss, ...toArray(css)]} {...mouseEventHandlers}>
            {
                active && (
                    <div
                        style={rippleStyle}
                        css={[rippleCss, dynRippleCss({ color, duration, x, y, diameter, hideRipple }), rippleCssProp]}
                        className={rippleClassName}
                        onTransitionEnd={onTransitionEnd}
                    >
                    </div>
                )
            }
        </div>
    )
}, true)