import React, { ForwardedRef, forwardRef } from "react"
import { useTheme } from "../../theme"
import { dynSelectedTabCss, dynTabCss } from "./style"
import { Ripple } from "../Ripple"
import { TabProps } from "./TabProps"

import tabsCss from "./index.module.css"
import cx from "classix"

export type { TabProps }

export type TabComponent =
	((props: TabProps, ref?: ForwardedRef<HTMLElement>) => (React.ReactElement | null))
	& { displayName?: string };

/** Отдельная вкладка. Используется в качестве дочернего элемента [Tabs](..?path=/docs/компоненты-tabs--docs) */
export const Tab = forwardRef<HTMLDivElement, TabProps>(({
															 fillSelectedTab = false,
															 colorStyle = "secondary",
															 selected,
															 children,
															 onClick,
															 style,
															 className
														 }: TabProps, ref) => {

	const theme = useTheme()

	return (
		<div onClick={onClick} ref={ref}
			 className={cx(tabsCss.tab, className)}
			 css={[
				 dynTabCss({ theme, colorStyle }),
				 selected ? dynSelectedTabCss({ theme, fillSelectedTab, colorStyle }) : undefined
			 ]} style={style}>
			<><Ripple color={theme.colorStyles[colorStyle].ripple} />{children}</>
		</div>
	)
}) as TabComponent

Tab.displayName = "Tab"