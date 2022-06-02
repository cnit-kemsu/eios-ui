import React, { Children, useState, useCallback, useRef, useEffect } from 'react'

import {
    tooltipCss,
    dynRootCss,
    dynTooltipCss,
    arrowCss,
    dynArrowCss,
    rootCss
} from './style'
import propMetadata from './propMetadata'

import { debounce, toArray, addHandlersTo, createUIComponent, getPosFor, getPosRelative } from '../utils'
import { useTheme } from '../theme'


export default createUIComponent(propMetadata, function Tooltip({ children, hideArrow, hide, text, showDelay, hideDelay, css, position, ...props }) {

    const theme = useTheme()

    const [show, setShow] = useState(false)
    const [offset, setOffset] = useState({})

    const tooltipRef = useRef()

    const showTooltip = useCallback(debounce(target => {
        
        setOffset(getPosRelative(target, tooltipRef.current, position))
        setShow(true)        

    }, showDelay * 1000), [position, showDelay])

    const hideTooltip = useCallback(debounce(target => {

        setShow(false)

        let offset = getPosRelative(target, tooltipRef.current, position) ;
        if (offset) setOffset(offset)

    }, hideDelay * 1000), [position, hideDelay])

    const handleMouseEnter = useCallback((e) => {
        showTooltip && showTooltip(e.currentTarget)
    }, [])

    const handleMouseLeave = useCallback((e) => {
        showTooltip.cancel && showTooltip.cancel()
        hideTooltip && hideTooltip(e.currentTarget)
    }, [])

    useEffect(() => () => {
        showTooltip && showTooltip.cancel && showTooltip.cancel()
        hideTooltip && hideTooltip.cancel && hideTooltip.cancel()
    }, [])

    const handleTooltipMouseEnter = () => hideTooltip.cancel && hideTooltip.cancel()
    const handleTooltipMouseLeave = () => hideTooltip && hideTooltip()

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