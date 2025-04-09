import { ForwardedRef, forwardRef, MutableRefObject, ReactElement, useLayoutEffect, useMemo, useRef } from "react"
import { Ripple } from "../Ripple"

import type { SelectProps } from "./SelectProps"
import { getTrue } from "../../utils"
import { useListFunctions } from "../../hooks/useListFunctions"
import selectCss from "./index.module.css"
import cx from "classix"

export type { SelectProps }

export type SelectComponent =
	(<C>(props: SelectProps<C>, ref?: ForwardedRef<HTMLUListElement>) => (ReactElement | null))
	& { displayName?: string };

/** Выпадающий список. */
export const Select = forwardRef(function Select<C>({
														name,
														open = false,
														enableOutsideArea,
														onClick,
														onOutsideClick,
														selectStyle,
														onChange,
														valueProp = "value",
														contentProp = "content",
														selectableProp = getTrue,
														disabled = false,
														items = [],
														value,
														size,
														itemsContainerStyle,
														itemStyle,
														contentStyle,
														placeholder,
														valueIsIndex = false,
														BeforeContentComponent,
														AfterContentComponent,
														ContentWrapper = ({ children }) => <>{children}</>,
														style,
														className
													}: SelectProps<C>, ref?: ForwardedRef<HTMLDivElement>) {

	const {
		getContent,
		getValue,
		isSelectable
	} = useListFunctions<C>(contentProp, valueProp, selectableProp, valueIsIndex)

	const itemIndex = useMemo(() => items?.findIndex((item, index) => getValue(item, index) === value), [items, getValue, value])
	const item = itemIndex > -1 ? items[itemIndex] : null

	const selectRef = useRef() as MutableRefObject<HTMLDivElement>
	const listRef = useRef() as MutableRefObject<HTMLUListElement>

	useLayoutEffect(() => {

		if (typeof size === "number" && size > 0 && listRef.current.children.length > 0) {

			const options = listRef.current.children

			if (options.length > 0) {
				let h = 0
				const n = Math.min(size, options.length)

				for (let i = 0; i < n; ++i) {
					h += options[i].clientHeight
				}

				listRef.current.style.maxHeight = `calc(${h}px + 2rem)`
			}
		}

	}, [items, size])

	return (
		<div ref={ref} style={style} className={cx(selectCss.select, className)}>
			{enableOutsideArea && open && <div onClick={onOutsideClick} className={selectCss.closeArea} />}
			<div
				ref={selectRef}
				onClick={onClick}
				style={selectStyle}
				className={cx(selectCss.button, disabled && selectCss.disabled)}
			>
				<Ripple color="rgba(0,0,0,0.2)" />
				<span data-placeholder={placeholder ? true : undefined}>
					{item ? getContent(item, itemIndex) : placeholder}
				</span>
				<i style={{ userSelect: "none", width: "24px" }}
				   className={cx("material-icons", selectCss.arrow, open && selectCss.arrowOpen)}>arrow_drop_down</i>
			</div>

			<ul
				style={itemsContainerStyle}
				ref={listRef}
				className={cx(selectCss.options, open && selectCss.open)}
			>
				{
					items.map((item, index) => {

						const curValue = getValue(item, index)

						return (
							<li key={curValue} style={{ display: "flex", alignItems: "center", ...itemStyle }}>
								{BeforeContentComponent && <BeforeContentComponent open={open} item={item} />}
								<ContentWrapper open={open} item={item}>
									<div
										className={selectCss.option}
										style={contentStyle}
										onClick={onChange && isSelectable(item, index) ?
											() => onChange(curValue, item, index) : undefined
										}
									>

										{getContent(item, index)}

									</div>
								</ContentWrapper>
								{AfterContentComponent && <AfterContentComponent open={open} item={item} />}
							</li>
						)
					})
				}
			</ul>
			<input type="hidden" value={value} name={name} />
		</div>
	)
}) as SelectComponent

Select.displayName = "Select"