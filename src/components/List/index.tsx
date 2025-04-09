import { ForwardedRef, forwardRef, ReactElement } from "react"
import type { ListProps } from "./ListProps"
import { Ripple } from "../Ripple"
import { useListFunctions } from "../../hooks/useListFunctions"
import { getRippleColorFromColorStyle, getTrue } from "../../utils"
import cx from "classix"

import listStyle from "./index.module.css"

export type { ListProps }

export type ListComponent = (<C>(props: ListProps<C>, ref?: ForwardedRef<HTMLUListElement>) => (ReactElement | null))
	& { displayName?: string };

/**
 * Список с выбором
 */
export const List = forwardRef(function List<C>({
													name,
													items = [],
													borderless = false,
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

	const {
		getContent,
		getValue,
		isSelectable
	} = useListFunctions<C>(contentProp, valueProp, selectableProp, valueIsIndex)

	return (
		<>
			<ul ref={ref} style={style}
				className={cx(listStyle.list,
					borderless && listStyle.borderless,
					disabled && listStyle.disabled,
					className)}>
				{
					items.map((item, index) => {

						const curValue = getValue(item, index)

						return <li
							key={curValue}
							onClick={onChange && isSelectable(item, index)
								? () => onChange(curValue, item, index)
								: undefined}
							className={cx(`cs-${colorStyle}`, (curValue === value) && listStyle.selected, itemContainerClassName)}
							style={itemContainerStyle}
						>
							<Ripple color={getRippleColorFromColorStyle(colorStyle)} />
							{getContent(item, index)}
						</li>
					})
				}
			</ul>
			<input type="hidden" name={name} value={value} />
		</>
	)
}) as ListComponent

List.displayName = "List"