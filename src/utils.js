import { cloneElement } from 'react'

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