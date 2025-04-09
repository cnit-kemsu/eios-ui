import { forwardRef, useCallback, useEffect, useState } from "react"
import { Button } from "../Button"
import type { ModalProps } from "./ModalProps"
import type { FCR } from "../../types"
import cssStyle from "./index.module.css"
import cx from "classix"

export type { ModalProps }

/** Модальное окно. */
export const Modal = forwardRef<HTMLDivElement, ModalProps>(({
																 open = false,
																 title,
																 onClose,
																 children,
																 style,
																 colorStyle = "primary",
																 className
															 }: ModalProps, ref) => {


	const [isAnimFin, setAnimFin] = useState(true)
	const handleAnimationEnd = useCallback(() => {
		setAnimFin(true)
	}, [])

	const handleEffect = useCallback(() => {
		if (open && isAnimFin) {
			setAnimFin(false)
		}
	}, [open, isAnimFin])

	useEffect(handleEffect, [open])

	return (open || !isAnimFin) ? (
		<div ref={ref} className={cx(`cs-${colorStyle}`, cssStyle.modalBacklayer, open && cssStyle.open)} /*css={dynBackLayerCss({ theme, open })}*/>
			<div
				onAnimationEnd={open ? undefined : handleAnimationEnd}
				/*css={dynContainerCss({ theme, open })}*/
				style={style}
				className={cx(cssStyle.modalContainer, className)}
			>
				<div className={cssStyle.modalHeader}>
					<h2>{title}</h2>
					<Button
						transparent
						fillable
						borderless
						colorStyle={colorStyle}
						onClick={onClose}
					>
						<i className="material-icons">close</i>
					</Button>
				</div>
				<div>
					{children}
				</div>
			</div>
		</div>
	) : null
}) as FCR<ModalProps, HTMLDivElement>

Modal.displayName = "Modal"