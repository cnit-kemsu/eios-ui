import React, {MouseEvent, MutableRefObject} from "react";
import {offset} from '../../utils'
import {RippleData} from "./RippleData";

export class RippleCallbacks {

    update: () => void;
    rippleDomRef: React.MutableRefObject<HTMLElement | null>;
    rippleDataRef: React.MutableRefObject<RippleData>;

    constructor(update: () => void, rippleDataRef: MutableRefObject<RippleData>, rippleDomRef: MutableRefObject<HTMLElement | null>) {
        this.update = update;
        this.rippleDomRef = rippleDomRef;
        this.rippleDataRef = rippleDataRef;
    }

    mouseEventHandlers = {
        onMouseDown: (event: MouseEvent) => {

            let active = false, restart = false
            const rippleData = this.rippleDataRef.current;
            const rippleDom = this.rippleDomRef.current

            if (!rippleDom) return;

            if (rippleData.active) {
                restart = true
            } else {
                active = true
            }

            const {offsetLeft, offsetTop} = offset(rippleDom)

            const radius = Math.max(rippleDom.offsetWidth, rippleDom.offsetHeight)

            const scrollTop = window.scrollY;
            const scrollLeft = window.scrollX;

            rippleData.hideRipple = false
            rippleData.active = active
            rippleData.restart = restart
            rippleData.diameter = radius * 2
            rippleData.x = event.clientX + scrollLeft - radius - offsetLeft
            rippleData.y = event.clientY + scrollTop - radius - offsetTop

            this.update()
        },

        onMouseUp: () => {
            if (this.rippleDataRef.current.active) {
                this.rippleDataRef.current.hideRipple = true
                this.update()
            }
        },

        onMouseLeave: () => {
            if (this.rippleDataRef.current.active) {
                this.rippleDataRef.current.hideRipple = true
                this.update()
            }
        }
    }

    onTransitionEnd = () => {
        if (!this.rippleDataRef.current.restart && this.rippleDataRef.current.active) {
            this.rippleDataRef.current.active = false
            this.update()
        }
    }

    handleEffect = () => {
        if (this.rippleDataRef.current.restart) {
            this.rippleDataRef.current.restart = false
            this.rippleDataRef.current.active = true
            this.update()
        }
    }
}