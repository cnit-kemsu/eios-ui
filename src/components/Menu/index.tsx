import { forwardRef } from "react"
import { useTheme } from "../../theme"
import { dynMenuCloseAreaCss, dynMenuCss } from "./style"
import type { MenuProps } from "./MenuProps"
import type { FCR } from "../../types"

export type { MenuProps }

/** Выпадающее меню. В качестве дочерних элементов принимает [MenuItem](..?path=/docs/компоненты-menuitem--docs) */
export const Menu = forwardRef<HTMLUListElement, MenuProps>(({
																															 show,
																															 enableOutsideArea,
																															 x = 0,
																															 y = 0,
																															 flat = false,
																															 borderless = false,
																															 children,
																															 onOutsideClick,
																															 className,
																															 style
																														 }: MenuProps, ref) => {

	const theme = useTheme()

	return (
		<>
			<div>
				{enableOutsideArea && show && <div onClick={onOutsideClick} css={[dynMenuCloseAreaCss({ theme })]} />}
			</div>
			<ul ref={ref} style={style} className={className}
					css={dynMenuCss({ theme, flat, borderless, x, y, show: !!show })}>
				{children}
			</ul>
		</>
	)
}) as FCR<MenuProps, HTMLUListElement>

Menu.displayName = "Menu"