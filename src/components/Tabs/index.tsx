import React, { Children, cloneElement, CSSProperties, ForwardedRef, forwardRef } from "react"
import { dynTabsCss } from "./style"
import { useTheme } from "../../theme"
import { TabsProps } from "./TabsProps"

import tabsCss from "./index.module.css"
import cx from "classix"

export type { TabsProps }

export type TabsComponent = ((props: TabsProps, ref?: ForwardedRef<HTMLDivElement>) => (React.ReactElement | null))
	& { displayName?: string };

/** Вкладки. В качестве дочерних элементов принимает [Tab](..?path=/docs/компоненты-tab--docs) */
export const Tabs = forwardRef<HTMLDivElement, TabsProps>(({
															   colorStyle = "secondary",
															   stretchTabs,
															   onTabClick,
															   tab,
															   fillSelectedTab,
															   className,
															   children,
															   ...props
														   }: TabsProps, ref) => {


	const theme = useTheme()

	return (
		<div ref={ref} {...props}
			 className={cx(tabsCss.tabs, stretchTabs && tabsCss.stretch, className)}
			 css={dynTabsCss({ theme })}>
			{
				Children.map(children, (child, index) => {

					if (!child || child === true) return null

					const selected = tab === child.props.id || tab === index

					const childStyle: CSSProperties = { flex: "1 1 0", ...child.props.style }

					return cloneElement(child, {
						...child.props,
						style: childStyle,
						colorStyle: child.props.colorStyle ?? colorStyle,
						selected,
						fillSelectedTab,
						onClick: onTabClick ? () => {
							onTabClick(child.props.id || index)
						} : undefined
					})
				})
			}
		</div>
	)
}) as TabsComponent

Tabs.displayName = "Tabs"