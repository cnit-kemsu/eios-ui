import { MutableRefObject, useLayoutEffect, useMemo, useReducer, useRef } from "react"
import { useTheme } from "../../theme"
import { dynRippleCss } from "./style"
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

	const { disableRipple } = useTheme()
	const [, forceUpdate] = useReducer(x => x + 1, 0, undefined)
	const rippleDomRef = useRef(null) as MutableRefObject<HTMLDivElement | null>
	const rippleDataRef = useRef({ ...initRippleData })

	const {
		mouseEventHandlers, onTransitionEnd, handleEffect
	} = useMemo(() => new RippleCallbacks(() => forceUpdate(), rippleDataRef, rippleDomRef), [])

	useLayoutEffect(handleEffect)

	if (disableRipple) return null

	const { active, x, y, diameter, hideRipple } = rippleDataRef.current

	return (
		<div style={style}
			 className={cx(rippleCss.rippleContainer, className)}
			 ref={rippleDomRef}
			 {...mouseEventHandlers}>
			{
				active && (
					<div
						style={rippleStyle}
						className={cx(rippleCss.ripple, rippleClassName)}
						css={dynRippleCss({ color, duration, x, y, diameter, hideRipple })}
						onTransitionEnd={onTransitionEnd}
					>
					</div>
				)
			}
		</div>
	)
}