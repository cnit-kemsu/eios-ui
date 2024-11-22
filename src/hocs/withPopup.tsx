import { createElement, FunctionComponent, ReactNode, Ref, useRef } from "react"
import { Popup, PopupProps } from "../components/Popup"
import { usePopup } from "../hooks/usePopup"

export type WithTooltipProps<P> =  {
    tooltip?: ReactNode,
    tooltipDelay?: number,
    popupProps?: Omit<PopupProps, 'show' | 'onMouseEnter' | 'onMouseLeave' | 'children'>
} & P;

export function withPopup<P>(C: FunctionComponent<P & { ref: Ref<HTMLElement> }>) {
    function WithTooltip({tooltip, tooltipDelay = 0, popupProps = {}, ...props}: WithTooltipProps<P>) {

        const elRef = useRef<HTMLElement>(null);
        const popup = usePopup(elRef, tooltipDelay);

        return <>
            <Popup {...popup} {...popupProps}>{tooltip}</Popup>
            {createElement(C, {
                ...props as P,
                ref: elRef
            })}
        </>
    }

    WithTooltip.displayName = C.displayName ?? C.name;

    return WithTooltip;
}