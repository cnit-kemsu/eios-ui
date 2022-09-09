import { offset } from '../../utils'


export default class RippleExtra {

    constructor(update, rippleDomRef) {
        this.update = () => update({})
        this.rippleDomRef = rippleDomRef
        this.active = false
        this.restart = false
    }

    mouseEventHandlers = {
        onMouseDown: event => {
            let active = false, restart = false

            if (this.active) {
                restart = true
            } else {
                active = true
            }

            const rippleDom = this.rippleDomRef.current

            const { offsetLeft, offsetTop } = offset(rippleDom)

            const radius = Math.max(rippleDom.offsetWidth, rippleDom.offsetHeight)

            let scrollTop = window.pageYOffset
            let scrollLeft = window.pageXOffset

            this.hideRipple = false
            this.active = active
            this.restart = restart
            this.diameter = radius * 2
            this.x = event.clientX + scrollLeft - radius - offsetLeft
            this.y = event.clientY + scrollTop - radius - offsetTop

            this.update()

        },

        onMouseUp: () => {
            if (this.active) {
                this.hideRipple = true
                this.update()
            }
        },

        onMouseLeave: () => {
            if (this.active) {
                this.hideRipple = true
                this.update()
            }
        }
    }

    onTransitionEnd = () => {
        if (!this.restart && this.active) {
            this.active = false
            this.update()
        }
    }

    handleEffect = () => {
        if (this.restart) {
            this.restart = false
            this.active = true

            this.update()
        }
    }
}