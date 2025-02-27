import { ForwardedRef, forwardRef, ReactElement } from "react"
import { useTheme } from "../../theme"
import { dynItemCss, dynRootCss, dynSelectedItemCss } from "./style"
import type { ListProps } from "./ListProps"
import { Ripple } from "../Ripple"
import { useListFunctions } from "../../hooks/useListFunctions"
import { getTrue } from "../../utils"
import cx from "classix"

import listStyle from "./index.module.css"

export type { ListProps }

export type ListComponent = (<C>(props: ListProps<C>, ref?: ForwardedRef<HTMLUListElement>) => (ReactElement | null))
	& { displayName?: string };

/**
 * Обертка вокруг `<select>`.
 */
export const List = forwardRef(function List<C>({
																									name,
																									items = [],
																									borderless = false,
																									flat = false,
																									colorStyle = "primary",
																									valueIsIndex = false,
																									valueProp = "value",
																									contentProp = "content",
																									selectableProp = getTrue,
																									value,
																									disabled = false,
																									onChange,
																									style,
																									className,
																									itemContainerStyle,
																									itemContainerClassName
																								}: ListProps<C>, ref?: ForwardedRef<HTMLUListElement>) {

	const theme = useTheme()

	const {
		getContent,
		getValue,
		isSelectable
	} = useListFunctions<C>(contentProp, valueProp, selectableProp, valueIsIndex)

	return (
		<>
			<ul ref={ref} style={style} className={cx(listStyle.list, className)}
					css={[dynRootCss({ disabled, borderless, theme, flat })]}>
				{
					items.map((item, index) => {

						const curValue = getValue(item, index)

						return <li
							key={curValue}
							onClick={
								onChange && isSelectable(item, index)
									? () => onChange(curValue, item, index)
									: undefined
							}
							css={[
								dynItemCss({ theme, colorStyle }),
								(curValue === value) && dynSelectedItemCss({ theme, colorStyle })
							]}
							className={itemContainerClassName}
							style={itemContainerStyle}
						>
							<Ripple color={theme.colorStyles[colorStyle].ripple} />
							{getContent(item, index)}
						</li>
					})
				}
			</ul>
			<input type="hidden" name={name} value={value}/>
		</>
	)
}) as ListComponent

List.displayName = "List"