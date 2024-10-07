import {MutableRefObject, ReactNode, useRef} from "react";
import {Popup, PopupProps} from "../components/Popup";
import {FCR} from "../types";
import {usePopup} from "../hooks/usePopup";

export type WithTooltipProps<P> =  {
    tooltip?: ReactNode,
    tooltipDelay?: number,
    popupProps?: Omit<PopupProps, 'show' | 'onMouseEnter' | 'onMouseLeave' | 'children'>
} & P;

export function withPopup<P, R>(C: FCR<P, R>) {
    function WithTooltip({tooltip, tooltipDelay = 0, popupProps = {}, ...props}: WithTooltipProps<P>) {

        const elRef = useRef() as MutableRefObject<HTMLElement>;
        const popup = usePopup(elRef, tooltipDelay);

        return <>
            <Popup {...popup} {...popupProps}>{tooltip}</Popup>
            <C ref={elRef} {...props as P}/>
        </>
    }

    WithTooltip.displayName = C.displayName ?? C.name;

    return WithTooltip;
}