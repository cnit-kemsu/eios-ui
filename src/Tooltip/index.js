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

import { debounce, undebounce, offset } from '../utils'


function getPosFor(targetElement, tooltipElement, position) {

    const { offsetLeft, offsetTop } = offset(targetElement)

    const haflTooltipElementHeight = tooltipElement.offsetHeight / 2
    const haflTargetElementHeight = targetElement.offsetHeight / 2

    const top = offsetTop - haflTooltipElementHeight + haflTargetElementHeight

    switch (position) {
        case 'top': return {
            top: offsetTop - targetElement.offsetHeight - 5
        }
        case 'bottom': return {
            top: offsetTop + targetElement.offsetHeight + 5
        }
        case 'left': return {
            top: top,
            left: offsetLeft - tooltipElement.offsetWidth
        }
        case 'right': return {
            top: top,
            left: offsetLeft + targetElement.offsetWidth + 5
        }
    }
}


export default function Tooltip({ children, content, delay, css, contentStyle, contentCss, position, ...props }) {

    const child = Children.only(children)
    let { onMouseEnter, onMouseLeave, ...childProps } = child.props

    const theme = useTheme()
    const [state, setState] = useState({ show: false })

    const tooltipRef = useRef()
    const debounceId = useRef()

    const handleMouseEnter = useCallback(
        onMouseEnter
            ?
            (e) => {
                onMouseEnter(e);
                const target = e.target
                debounceId.current = debounce(() => setState({ show: true, ...getPosFor(target, tooltipRef.current, position) }), delay)
            }
            :
            (e) => {
                const target = e.target
                debounceId.current = debounce(() => setState({ show: true, ...getPosFor(target, tooltipRef.current, position) }), delay)
            },
        [onMouseEnter, position]
    )

    const handleMouseLeave = useCallback(
        onMouseLeave ?
            (e) => {
                const target = e.target
                onMouseLeave(e);
                undebounce(debounceId.current)
                setState({ show: false, ...getPosFor(target, tooltipRef.current, position) })
            }
            :
            (e) => {
                const target = e.target
                undebounce(debounceId.current)
                setState({ show: false, ...getPosFor(target, tooltipRef.current, position) })
            },
        [onMouseLeave, position]
    )

    const contentElement = <div style={contentStyle} css={[tooltipCss, dynTooltipCss({ theme })]}>{content}</div>
    const arrowElement = <div css={[arrowCss, dynArrowCss({ theme, position }), ...(Array.isArray(contentCss) ? contentCss : [contentCss])]}></div>

    return (
        <>
            {
                cloneElement(child, {
                    onMouseEnter: handleMouseEnter,
                    onMouseLeave: handleMouseLeave,
                    ...childProps
                })
            }
            <div ref={tooltipRef} {...props} css={[rootCss, dynRootCss({ theme, position, state })]}>
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
    delay: { type: PropTypes.number, def: 1 }
})