import {Point} from "./types";

export function offset(elem : HTMLElement) {

    let offsetLeft = 0;
    let offsetTop = 0;
    let el : HTMLElement | null = elem;

    do {
        if (!isNaN(el.offsetLeft)) {
            offsetLeft += el.offsetLeft;
        }
        if (!isNaN(elem.offsetTop)) {
            offsetTop += el.offsetTop;
        }

        el = el.offsetParent as HTMLElement;

    } while (el)

    return {
        offsetLeft, offsetTop
    }

}

export function toArray(val : unknown) {
    return Array.isArray(val) ? val : [val];
}

export function debounce(f : (...args: unknown[]) => void, delayMs : number) {

    let timer: number = 0;

    function debounced(...args: unknown[]) {

        if (timer) window.clearTimeout(timer);

        timer = window.setTimeout(() => {
            f(...args)
            timer = 0
        }, delayMs);
    }

    debounced.cancel = () => window.clearTimeout(timer);

    return debounced;
}

export function getValueFromIndex(_: unknown, index: number) {
    return index;
}

export function getTrue(){
    return true;
}

export function getElementPositionRelativeTo(element: HTMLElement, targetElement: HTMLElement, targetPosition: Point, targetElementPivot: Point) {

    const elementBCR = element.getBoundingClientRect();

    const p = {
        x: lerp(elementBCR.left, elementBCR.right, targetPosition.x),
        y: lerp(elementBCR.top, elementBCR.bottom, targetPosition.y)
    };

    const parentEl = targetElement.offsetParent;

    if (!parentEl) return null;

    const parentElBCR = parentEl.getBoundingClientRect();
    return ({
        x: p.x - parentElBCR.left - targetElement.clientWidth * targetElementPivot.x,
        y: p.y - parentElBCR.top - targetElement.clientHeight * targetElementPivot.y
    }) as Point
}

export function isPrimitive(arg : unknown) {
    const type = typeof arg;
    return arg == null || (type != "object" && type != "function");
}

export function lerp(start : number, end : number, t : number) {
    return start * (1 - t) + end * t;
}

export function clamp(v : number, a = 0, b = 1) {
    return Math.min(Math.max(v, a), b);
}