import React, { ForwardedRef, forwardRef } from "react"
import { Ripple } from "../Ripple"
import { TabProps } from "./TabProps"

import tabsCss from "./index.module.css"
import cx from "classix"
import { getRippleColorFromColorStyle } from "../../utils.ts"

export type { TabProps }

export type TabComponent =
	((props: TabProps, ref?: ForwardedRef<HTMLElement>) => (React.ReactElement | null))
	& { displayName?: string };

/** Отдельная вкладка. Используется в качестве дочернего элемента [Tabs](..?path=/docs/компоненты-tabs--docs) */
export const Tab = forwardRef<HTMLDivElement, TabProps>(({
															 // eslint-disable-next-line @typescript-eslint/no-unused-vars
															 id,
															 fillSelectedTab = false,
															 colorStyle = "secondary",
															 selected,
															 children,
															 onClick,
															 className,
															 ...props
														 }: TabProps, ref) => {

	return (
		<div onClick={onClick} ref={ref} {...props}
			 className={cx(`cs-${colorStyle}`, tabsCss.tab, selected && tabsCss.selected,
				 fillSelectedTab && tabsCss.fill, className)}>
			<><Ripple color={getRippleColorFromColorStyle(colorStyle)} />{children}</>
		</div>
	)
}) as TabComponent

Tab.displayName = "Tab"