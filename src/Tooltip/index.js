import React, { Children, useState, useCallback, useRef } from 'react'

import {
    tooltipCss,
    dynRootCss,
    dynTooltipCss,
    arrowCss,
    dynArrowCss,
    rootCss
} from './style'
import propMetadata from './propMetadata'

import { debounce, toArray, addHandlersTo, createUi, getPosFor } from '../utils'
import { useTheme } from '../theme'


export default createUi(propMetadata, function Tooltip({ children, hideArrow, hide, text, showDelay, hideDelay, css, position, ...props }) {

    const theme = useTheme()

    const [show, setShow] = useState(false)
    const [offset, setOffset] = useState({})

    const tooltipRef = useRef()

    const showTooltip = useCallback(debounce(offset => {
        setShow(true)
        setOffset(offset)
    }, showDelay * 1000), [showDelay])

    const hideTooltip = useCallback(debounce(offset => {
        setShow(false)
        if(offset) setOffset(offset)
    }, hideDelay * 1000), [hideDelay])

    const handleMouseEnter = useCallback((e) => {
        showTooltip(getPosFor(e.target, tooltipRef.current, position))
    }, [showTooltip, position])

    const handleMouseLeave = useCallback((e) => {
        showTooltip.cancel()
        hideTooltip(getPosFor(e.target, tooltipRef.current, position))
    }, [showTooltip, hideTooltip, position])

    const handleTooltipMouseEnter = useCallback(() => hideTooltip.cancel(), [hideTooltip])
    const handleTooltipMouseLeave = useCallback(() => hideTooltip(), [hideTooltip])

    const contentElement = <div {...props} css={[tooltipCss, dynTooltipCss({ theme }), ...(Array.isArray(css) ? css : [css])]}>{text}</div>
    const arrowElement = hideArrow ? null : <div css={[arrowCss, dynArrowCss({ theme, position })]}></div>

    return text ? (
        <>
            {
                addHandlersTo(Children.only(children), {
                    onMouseEnter: handleMouseEnter,
                    onMouseLeave: handleMouseLeave
                })
            }
            {
                <div
                    onMouseEnter={handleTooltipMouseEnter}
                    onMouseLeave={handleTooltipMouseLeave}
                    ref={tooltipRef} css={[rootCss, dynRootCss({ theme, position, show, offset, hide }), ...toArray(css)]}
                >
                    {
                        position === 'left' || position === 'top'
                            ?
                            <>{contentElement}{arrowElement}</>
                            :
                            <>{arrowElement}{contentElement}</>
                    }
                </div>
            }
        </>
    ) : children
}, true)