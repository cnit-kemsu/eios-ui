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

export function createUIComponent(metadata, ReactComponent, notForwardRef) {

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
        css: <p>результат функции <i>css</i> из библиотеки <i>@emotion/react</i></p>,
        style: <p>inline-style добавляемый в корневой элемент компонента</p>,
        className: <p>css-class добавляемый в корневой элемент компонента</p>
    }

    Object.entries(metadata).map(([propName, { type = PropTypes.any, def, info }]) => {
        ReactComponent.propTypes[propName] = type
        if (def) ReactComponent.defaultProps[propName] = def

        if (!info) {
            switch (propName) {
                case 'flat': info = 'если true, убирает эффект тени, делая элемент "плоским"'; break;
                case 'borderless': info = 'если true, убирает границы'; break;
                case 'colorStyle': info = 'цветовой стиль'; break;
                case 'disabled': info = 'если true, элемент перестанет принимать ввод пользователя'; break;
                case 'name': info = 'имя элемента, располагаемого внутри формы (form)'; break;
                case 'value': info = 'значение элемента формы'; break;
                case 'placeholder': info = 'строка, выводимая при пустом value'; break;
            }

        }

        if (info) ReactComponent.propInfo[propName] = info


    })



    return ReactComponent

}

export function getValue(valueFromContent, item, index, valueProp = 'value', contentProp = 'content') {

    if (valueFromContent) return (item[contentProp] || item || "").toString()

    return item[valueProp] === undefined ? index : item[valueProp]
}

export function getPosFor(relativeElement, targetElement, position) {

    const { left: offsetLeft, top: offsetTop } = offset(relativeElement)

    const haflTooltipElementHeight = targetElement.clientHeight / 2.0
    const haflTargetElementHeight = relativeElement.clientHeight / 2.0

    const top = offsetTop - haflTooltipElementHeight + haflTargetElementHeight

    switch (position) {
        case 'top': return {
            top: offsetTop - relativeElement.clientHeight - 5
        }
        case 'bottom': return {
            top: offsetTop + relativeElement.clientHeight + 5
        }
        case 'left': return {
            top: top,
            left: offsetLeft - targetElement.clientWidth
        }
        case 'right': return {
            top: top,
            left: offsetLeft + relativeElement.clientWidth + 5
        }
    }

}

export function getOffset(relativeElement, targetElement, position, pivot = { x: 0.5, y: 0.5 }) {

    let relativeElBCR = relativeElement.getBoundingClientRect()
    let targetElBCR = targetElement.getBoundingClientRect()

    relativeElBCR = { left: relativeElBCR.left, right: relativeElBCR.right, top: relativeElBCR.top, bottom: relativeElBCR.bottom, width: relativeElBCR.width, height: relativeElBCR.height }
    targetElBCR = { left: targetElBCR.left, top: targetElBCR.top, width: targetElBCR.width, height: targetElBCR.height }

    relativeElBCR.left += window.scrollX
    relativeElBCR.right += window.scrollX
    relativeElBCR.top += window.scrollY

    targetElBCR.left += window.scrollX
    targetElBCR.top += window.scrollY

    let p = { left: 0, top: 0 }

    if (position === "top" || position === "bottom") {
        p.left = relativeElBCR.left + relativeElement.clientWidth * pivot.x - targetElement.clientWidth * pivot.x;
        p.top = position === 'top' ? relativeElBCR.top - targetElement.clientHeight : relativeElBCR.bottom;
    } else {
        p.left = position === 'left' ? relativeElBCR.left - targetElement.clientWidth : relativeElBCR.right;
        p.top = relativeElBCR.top + relativeElement.clientHeight * pivot.y;
    }

    return p
}

export function isPrimitive(arg) {
    var type = typeof arg;
    return arg == null || (type != "object" && type != "function");
}

export function lerp(start, end, t) {
    return start * (1 - t) + end * t;
}

export function clamp(v, a = 0, b = 1) {
    return Math.min(Math.max(v, a), b);
}