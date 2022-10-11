import * as React from "react";
import {MutableRefObject, useCallback, useEffect, useLayoutEffect, useRef, useState} from "react";
import {lerp} from '../utils'

const defOffset = {x: 0, y: 0}
const defPosition = {} as MenuAnchorPosition
type MenuAnchorPosition = { x?: number | undefined, y?: number | undefined };

export function useMenu(anchorElementRef: MutableRefObject<Element>, position: MenuAnchorPosition = defPosition) {
    const [menuPos, setMenuPosition] = useState({x: 0, y: 0});
    const [show, setShow] = useState(false);
    const elRef = useRef() as MutableRefObject<HTMLUListElement>;

    useEffect(() => {
        if (!show) return;

        const handleClick = (e) => {
            if (!e.target.dataset.menuitem) {
                setShow(false);
            }
        };

        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);

    }, [show])

    const showMenu = useCallback((e?: React.MouseEvent | undefined) => {
        e?.preventDefault();
        setShow(true);

        let x, y;
        const parentEl = elRef.current.parentElement;

        if (parentEl) {

            const el = anchorElementRef.current;//e.currentTarget;
            const brc = el.getBoundingClientRect();

            if (e && position.x === undefined) {
                x = e.clientX;
            } else {
                x = lerp(brc.left, brc.right, position.x);
            }

            if (e && position.y === undefined) {
                y = e.clientY;
            } else {
                y = lerp(brc.top, brc.bottom, position.y);
            }

            setMenuPosition({
                x: x - parentEl.getBoundingClientRect().left + (parentEl.style.position === 'relative' ? 0 : parentEl.offsetLeft),
                y: y - parentEl.getBoundingClientRect().top + (parentEl.style.position === 'relative' ? 0 : parentEl.offsetTop)
            });
        }
    }, [position.x, position.y]);

    const menu = {ref: elRef, show, ...menuPos}

    return [menu, showMenu, setShow] as [typeof menu, typeof showMenu, typeof setShow];

}

export function useSubmenu(menu: { ref: MutableRefObject<HTMLUListElement>, x: number, y: number, show: boolean }) {
    const [showSubmenu, setShowSubmenu] = useState(false);
    const [submenuPos, setSubmenuPos] = useState({x: 0, y: 0});
    const ref = useRef() as MutableRefObject<HTMLUListElement>;

    useLayoutEffect(() => {
        ref.current.style.zIndex = (+getComputedStyle(menu.ref.current).zIndex - 1).toString();
    }, [menu.ref]);

    useEffect(() => {
        setShowSubmenu(false);
    }, [menu.x, menu.y]);

    useEffect(() => {
        !menu.show && setShowSubmenu(false);
    }, [menu.show]);

    const onClick = useCallback((e: React.MouseEvent<HTMLLIElement>) => {

        if (showSubmenu) {
            setShowSubmenu(false);
            return;
        }

        const parentEl = ref.current.parentElement;

        if (parentEl) {
            const menuItemBCR = e.currentTarget.getBoundingClientRect();
            const parentBCR = parentEl.getBoundingClientRect();

            setSubmenuPos({
                x: menuItemBCR.right - parentBCR.left + (parentEl.style.position === 'relative' ? 0 : parentEl.offsetLeft),
                y: menuItemBCR.top - parentBCR.top + (parentEl.style.position === 'relative' ? 0 : parentEl.offsetTop) - ref.current.clientTop
            });

            setShowSubmenu(true);
        }
    }, [showSubmenu]);

    const menuButton = {onClick};
    const submenu = {ref, show: showSubmenu, ...submenuPos};

    return [menuButton, submenu, setShowSubmenu] as [typeof menuButton, typeof submenu, typeof setShowSubmenu];
}