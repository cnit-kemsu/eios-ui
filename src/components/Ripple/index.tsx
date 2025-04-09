import { MutableRefObject, useLayoutEffect, useMemo, useReducer, useRef } from "react"
import { RippleCallbacks } from "./RippleCallbacks"
import { initRippleData } from "./RippleData"
import { RippleProps } from "./RippleProps"
import cx from "classix"

import rippleCss from "./index.module.css"

export type { RippleProps }

/** Эффект ряби. */
export function Ripple({
						   color = "rgba(0,0,0,0.5)", duration = "2s",
						   rippleStyle, rippleClassName, style, className
					   }: RippleProps) {

	const [, forceUpdate] = useReducer(x => x + 1, 0, undefined)
	const rippleDomRef = useRef(null) as MutableRefObject<HTMLDivElement | null>
	const rippleDataRef = useRef({ ...initRippleData })

	const {
		mouseEventHandlers, onTransitionEnd, handleEffect
	} = useMemo(() => new RippleCallbacks(() => forceUpdate(), rippleDataRef, rippleDomRef), [])

	useLayoutEffect(handleEffect)

	const { active, x, y, diameter, hideRipple } = rippleDataRef.current

	return (
		<div style={style} data-foo="ripple"
			 className={cx(rippleCss.rippleContainer, className)}
			 ref={rippleDomRef}
			 {...mouseEventHandlers}>
			{
				active && (
					<div
						style={{
							background: color,
							opacity: hideRipple ? "0" : "1",
							left: `${x}px`,
							top: `${y}px`,
							width: `${diameter}px`,
							height: `${diameter}px`,
							animationDuration: duration,
							...rippleStyle
						}}
						className={cx(rippleCss.ripple, rippleClassName)}
						onTransitionEnd={onTransitionEnd}
					>
					</div>
				)
			}
		</div>
	)
}