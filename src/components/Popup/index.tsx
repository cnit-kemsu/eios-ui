import { MutableRefObject, useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { PopupProps } from "./types"
import { dynArrowCss, dynContentCss } from "./style"
import { useTheme } from "../../theme"

import popupStyle from "./index.module.css"
import cx from "classix"

export type { PopupProps }

export function Popup({
						  style,
						  className,
						  children,
						  show = false,
						  position = "top",
						  targetElementRef,
						  ...props
					  }: PopupProps) {

	const theme = useTheme()

	const divElRef = useRef() as MutableRefObject<HTMLDivElement>

	const update = () => {
		if (!targetElementRef?.current) return

		const targetRect = targetElementRef.current.getBoundingClientRect()

		const divWidth = divElRef.current.clientWidth
		const divHeight = divElRef.current.clientHeight

		const scrollX = window.scrollX
		const scrollY = window.scrollY

		if (position === "bottom") {
			divElRef.current.style.left = `${targetRect.left + (targetRect.width - divWidth) * 0.5 + scrollX}px`
			divElRef.current.style.top = `${targetRect.bottom + scrollY}px`
		} else if (position === "top") {
			divElRef.current.style.left = `${targetRect.left + (targetRect.width - divWidth) * 0.5 + scrollX}px`
			divElRef.current.style.top = `${targetRect.top - divHeight + scrollY}px`
		} else if (position === "left") {
			divElRef.current.style.left = `${targetRect.left - divWidth + scrollX}px`
			divElRef.current.style.top = `${targetRect.top + (targetRect.height - divHeight) * 0.5 + scrollY}px`
		} else if (position === "right") {
			divElRef.current.style.left = `${targetRect.right + scrollX}px`
			divElRef.current.style.top = `${targetRect.top + (targetRect.height - divHeight) * 0.5 + scrollY}px`
		}
	}

	useEffect(() => {

		if (!show) return

		update()

		window.addEventListener("resize", update)

		return () => {
			window.removeEventListener("resize", update)
		}

	}, [show, position, targetElementRef?.current, divElRef.current])

	const contentEl = <div className={popupStyle.arrow} css={dynArrowCss({ theme, position })} />
	const arrowEl = <div css={dynContentCss(theme)}>
		{children}
	</div>

	return createPortal(<div ref={divElRef}
							 style={style}
							 className={cx(popupStyle[position], popupStyle.popup, show && popupStyle.show, className)}
							 {...props}>
		{position === "top" || position === "left"
			? <>{arrowEl}{contentEl}</>
			: <>{contentEl}{arrowEl}</>
		}
	</div>, document.body)
}