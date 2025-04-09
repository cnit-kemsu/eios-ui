import { forwardRef } from "react"
import type { MenuProps } from "./MenuProps"
import type { FCR } from "../../types"
import cssStyle from "./index.module.css"
import cx from "classix"

export type { MenuProps }

/** Выпадающее меню. В качестве дочерних элементов принимает [MenuItem](..?path=/docs/компоненты-menuitem--docs) */
export const Menu = forwardRef<HTMLUListElement, MenuProps>(({
																 show,
																 enableOutsideArea,
																 x = 0,
																 y = 0,
																 children,
																 onOutsideClick,
																 className,
																 style
															 }: MenuProps, ref) => {

	return (
		<>
			<div>
				{enableOutsideArea && show && <div onClick={onOutsideClick} className={cssStyle.menuCloseArea} />}
			</div>
			<ul ref={ref} style={{
				left: `${x}px`,
				top: `${y}px`,
				...style
			}} className={cx(cssStyle.menu, show && cssStyle.show, className)}>
				{children}
			</ul>
		</>
	)
}) as FCR<MenuProps, HTMLUListElement>

Menu.displayName = "Menu"