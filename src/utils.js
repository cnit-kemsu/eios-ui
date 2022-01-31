import React from 'react'
import { cloneElement, forwardRef } from 'react'
import PropTypes from 'prop-types'


export function offset(elem) {

    let offsetLeft = 0
    let offsetTop = 0

    do {
        if (!isNaN(elem.offsetLeft)) {
            offsetLeft += elem.offsetLeft
        }
        if (!isNaN(elem.offsetTop)) {
            offsetTop += elem.offsetTop
        }
    } while (elem = elem.offsetParent)

    return {
        offsetLeft, offsetTop
    }

}

export function toArray(val) {
    return Array.isArray(val) ? val : [val]
}

export function debounce(f, delayMs) {

    let timer = null

    function debounced(...args) {

        debounced.cancel = () => clearTimeout(timer)

        if (timer) clearTimeout(timer)

        timer = setTimeout(() => {
            f(...args)
            timer = null
        }, delayMs)


    }

    return debounced
}

export function addHandlersTo(element, eventHandlerMap) {

    const eventHandlerEntries = Object.entries(eventHandlerMap)

    if (eventHandlerEntries.length === 0) return element

    const elProps = element.props
    const props = {}

    for (let [event, handler] of eventHandlerEntries) {
        if (!elProps[event]) {
            props[event] = handler
        } else {
            props[event] = (e) => { elProps[event](e); handler(e) }
        }
    }

    return cloneElement(element, props)
}

export function createUi(metadata, ReactComponent, notForwardRef) {

    if (!notForwardRef) {
        const name = ReactComponent.name
        ReactComponent = forwardRef(ReactComponent)    
        ReactComponent.name = name    
        ReactComponent.displayName = name
    }

    ReactComponent.propTypes = {
        css: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
        style: PropTypes.object,
        className: PropTypes.string
    }
    ReactComponent.defaultProps = {}
    ReactComponent.propInfo = {
        css: <p>result of <i>css</i> function from <i>@emotion/react</i> lib</p>,
        style: <p>inline-style added to the root element of the component</p>,
        className: <p>css-class name added to the root element of the component</p>
    }

    Object.entries(metadata).map(([propName, { type = PropTypes.any, def, info }]) => {
        ReactComponent.propTypes[propName] = type
        if (def) ReactComponent.defaultProps[propName] = def
        if (info) ReactComponent.propInfo[propName] = info
    })

    

    return ReactComponent

}

export function getValue(valueFromContent, item, index) {

    if (valueFromContent) return (item.content || item || "").toString()

    return item.value === undefined ? index : item.value
}

export function getPosFor(targetElement, tooltipElement, position) {

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