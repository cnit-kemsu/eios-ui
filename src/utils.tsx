import React from 'react'
import {Point} from "./components/types";

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

    let timer: number = 0;

    function debounced(...args) {

        if (timer) window.clearTimeout(timer)

        timer = window.setTimeout(() => {
            f(...args)
            timer = 0
        }, delayMs)
    }

    debounced.cancel = () => window.clearTimeout(timer);

    return debounced;
}

export function getValueFromIndex(item: any, index: number) {
    return index;
}

export function getTrue(){
    return true;
}

export function getElementPositionRelativeTo(element: HTMLElement, targetElement: HTMLElement, targetPosition: Point, targetElementPivot: Point) {

    const elementBCR = element.getBoundingClientRect();
    const targetElementBCR = targetElement.getBoundingClientRect();

    const p = {
        x: lerp(elementBCR.left, elementBCR.right, targetPosition.x),
        y: lerp(elementBCR.top, elementBCR.bottom, targetPosition.y)
    };

    const parentEl = targetElement.offsetParent;

    if (!parentEl) throw new Error();

    const parentElBCR = parentEl.getBoundingClientRect();
    //const parentElPosition = parentEl.style.position ?? window.getComputedStyle(parentEl).position;

    return ({
        x: p.x - parentElBCR.left /* + (parentElPosition === 'relative' ? 0 : parentEl.offsetLeft)*/ - targetElement.clientWidth * targetElementPivot.x,
        y: p.y - parentElBCR.top /* + (parentElPosition === 'relative' ? 0 : parentEl.offsetTop)*/ - targetElement.clientHeight * targetElementPivot.y
    }) as Point
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