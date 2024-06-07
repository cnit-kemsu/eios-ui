import {MutableRefObject, useEffect, useRef} from "react";
import {createPortal} from "react-dom";
import {PopupProps} from "./types";
import {arrowCss, dynArrowCss, dynContentCss, popupCss, popupPosToCss, showPopupCss} from "./style";
import {useTheme} from "../../theme";

export type {PopupProps};

export function Popup({style, className, children, show = false, position = "top", targetElementRef, ...props}: PopupProps) {

    const theme = useTheme();

    const divElRef = useRef() as MutableRefObject<HTMLDivElement>;

    const update = () => {
        if (!targetElementRef?.current) return;

        const targetRect = targetElementRef.current.getBoundingClientRect();

        const divWidth = divElRef.current.clientWidth;
        const divHeight = divElRef.current.clientHeight;

        const scrollX = window.scrollX;
        const scrollY = window.scrollY;

        if (position === 'bottom') {
            divElRef.current.style.left = `${targetRect.left + (targetRect.width - divWidth) * 0.5 + scrollX}px`;
            divElRef.current.style.top = `${targetRect.bottom + scrollY}px`;
        } else if (position === 'top') {
            divElRef.current.style.left = `${targetRect.left + (targetRect.width - divWidth) * 0.5 + scrollX}px`;
            divElRef.current.style.top = `${targetRect.top - divHeight + scrollY}px`;
        } else if (position === 'left') {
            divElRef.current.style.left = `${targetRect.left - divWidth + scrollX}px`;
            divElRef.current.style.top = `${targetRect.top + (targetRect.height - divHeight) * 0.5 + scrollY}px`;
        } else if (position === 'right') {
            divElRef.current.style.left = `${targetRect.right + scrollX}px`;
            divElRef.current.style.top = `${targetRect.top + (targetRect.height - divHeight) * 0.5 + scrollY}px`;
        }
    };

    useEffect(() => {
        update();

        window.addEventListener('resize', update);

        return () => {
            window.removeEventListener('resize', update);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [position, targetElementRef?.current, divElRef.current]);

    const contentEl = <div css={[arrowCss, dynArrowCss({theme, position})]}/>;
    const arrowEl = <div css={[dynContentCss(theme)]}>
        {children}
    </div>;


    return createPortal(<div ref={divElRef} style={style} className={className}
                             css={[popupPosToCss[position], popupCss, show ? showPopupCss : undefined]} {...props}>
        {position === 'top' || position === 'left'
            ? <>{arrowEl}{contentEl}</>
            : <>{contentEl}{arrowEl}</>
        }
    </div>, document.body);
}