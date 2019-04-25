import React, { Children, cloneElement, useState, useCallback, useRef } from 'react'
import PropTypes from 'prop-types'


import { useTheme } from '../theme'
import {
    addPropMetadataTo, positionType,
} from '../prop-types'

import {
    tooltipCss, dynRootCss, dynTooltipCss,
    arrowCss, dynArrowCss, rootCss
} from './style'

import { debounce, offset } from '../utils'


function getPosFor(targetElement, tooltipElement, position) {

    const { offsetLeft, offsetTop } = offset(targetElement)

    const haflTooltipElementHeight = tooltipElement.clientHeight / 2.0
    const haflTargetElementHeight = targetElement.clientHeight / 2.0

    const top = offsetTop - haflTooltipElementHeight + haflTargetElementHeight

    switch (position) {
        case 'top': return {
            top: offsetTop - targetElement.clientHeight - 5
        }
        case 'bottom': return {
            top: offsetTop + targetElement.clientHeight + 5
        }
        case 'left': return {
            top: top,
            left: offsetLeft - tooltipElement.clientWidth
        }
        case 'right': return {
            top: top,
            left: offsetLeft + targetElement.clientWidth + 5
        }
    }
}


export default function Tooltip({ children, text, delay, css, position, ...props }) {
    const theme = useTheme()
    const [state, setState] = useState({ show: false })

    const tooltipRef = useRef()

    const debouncedSetState = useCallback(debounce(state => setState(state), delay * 1000), [delay])
    const handleMouseEnter = useCallback((e) => debouncedSetState({ show: true, ...getPosFor(e.target, tooltipRef.current, position) }), [debouncedSetState, position])
    const handleMouseLeave = useCallback((e) => {
        debouncedSetState.cancel()
        setState({ show: false, ...getPosFor(e.target, tooltipRef.current, position) })
    }, [debouncedSetState, position])

    const contentElement = <div {...props} css={[tooltipCss, dynTooltipCss({ theme }), ...(Array.isArray(css) ? css : [css])]}>{text}</div>
    const arrowElement = <div css={[arrowCss, dynArrowCss({ theme, position })]}></div>

    return (
        <>
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {children}
            </div>
            <div ref={tooltipRef} css={[rootCss, dynRootCss({ theme, position, state })]}>
                {
                    position === 'left' || position === 'top'
                        ?
                        <>{contentElement}{arrowElement}</>
                        :
                        <>{arrowElement}{contentElement}</>
                }
            </div>
        </>
    )
}


addPropMetadataTo(Tooltip, {
    position: { type: positionType, def: 'top' },
    delay: { type: PropTypes.number, def: 1 },
    text: { type: PropTypes.node }
})