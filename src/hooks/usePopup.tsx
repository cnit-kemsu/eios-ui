import {MutableRefObject, useEffect, useRef, useState} from "react";
import {debounce} from "../utils";

export function usePopup(targetElementRef: MutableRefObject<HTMLElement | null>, delay = 0) {
    const [show, setShow] = useState(false);
    const insideTooltipRef = useRef(false);

    useEffect(() => {

        if (!targetElementRef.current) return;

        const mouseEnterHandler = debounce(() => setShow(true), delay);
        const mouseLeaveHandler = debounce(() => setShow(insideTooltipRef.current || false), delay);

        targetElementRef.current.addEventListener('mouseenter', mouseEnterHandler);
        targetElementRef.current.addEventListener('mouseleave', mouseLeaveHandler);

        const targetEl = targetElementRef.current;

        return () => {
            targetEl.removeEventListener('mouseenter', mouseEnterHandler);
            targetEl.removeEventListener('mouseleave', mouseLeaveHandler);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [targetElementRef.current, delay]);

    return {
        show,
        targetElementRef,
        onMouseEnter: () => {
            insideTooltipRef.current = true;
        },
        onMouseLeave: debounce(() => {
            setShow(false);
            insideTooltipRef.current = false;
        }, delay)
    } as const;
}