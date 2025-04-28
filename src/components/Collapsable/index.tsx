import { type ComponentPropsWithRef, type FC, forwardRef, useLayoutEffect, useRef, useState } from "react"

import cssModule from "./index.module.scss"
import { cx } from "classix"

export type CollapsableProps = {
	open?: boolean
} & ComponentPropsWithRef<"div">

export const Collapsable = forwardRef<HTMLDivElement, CollapsableProps>(
	({ open, children, style, className, ...props }: CollapsableProps, ref) => {
		const [height, setHeight] = useState(-1)

		const innerRef = useRef<HTMLDivElement>(null)

		useLayoutEffect(() => {

			if (!innerRef.current) return

			setHeight(open ? innerRef.current.offsetHeight : 0)

		}, [open])

		let outerHeight = open ? "unset" : "0"

		if (height >= 0) outerHeight = height + "px"

		return (
			<div
				ref={ref}
				className={cx(cssModule.root, className)}
				style={{ height: outerHeight, ...style }}
				{...props}>
				<div ref={innerRef} className="w-[100%]">
					{children}
				</div>
			</div>
		)
	}
) as FC<CollapsableProps>

Collapsable.displayName = "Collapsable"
