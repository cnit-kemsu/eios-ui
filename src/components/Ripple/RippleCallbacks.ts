import React from "react";
import {offset} from '../../utils'
import {RippleData} from "./RippleData";

export class RippleCallbacks {

    update: () => void;
    rippleDomRef: React.MutableRefObject<HTMLElement>;
    rippleDataRef: React.MutableRefObject<RippleData>;

    constructor(update, rippleDataRef, rippleDomRef) {
        this.update = () => update();
        this.rippleDomRef = rippleDomRef;
        this.rippleDataRef = rippleDataRef;
    }

    mouseEventHandlers = {
        onMouseDown: event => {

            let active = false, restart = false
            const rippleData = this.rippleDataRef.current;

            if (rippleData.active) {
                restart = true
            } else {
                active = true
            }

            const rippleDom = this.rippleDomRef.current

            const {offsetLeft, offsetTop} = offset(rippleDom)

            const radius = Math.max(rippleDom.offsetWidth, rippleDom.offsetHeight)

            let scrollTop = window.scrollY;
            let scrollLeft = window.scrollX;

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