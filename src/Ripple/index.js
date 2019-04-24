import React, { useState, useMemo, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

import RippleExtra from './RippleExtra'
import { useTheme } from '../theme'
import { rootCss, rippleCss, dynRippleCss } from './style'
import { addPropMetadataTo } from '../prop-types'

export default function Ripple({ 
    color, duration, containerStyle, css, 
    rippleCss: rippleCssProp, rippleStyle, rippleClassName, ...props }) {

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
        <div {...props} ref={rippleDomRef} css={[rootCss, css]} {...mouseEventHandlers}>
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
}

addPropMetadataTo(Ripple, {
    color: {
        type: PropTypes.string,
        def: 'rgba(0,0,0,0.5)'
    },
    duration: {
        type: PropTypes.string,
        def: '2s'
    }
})