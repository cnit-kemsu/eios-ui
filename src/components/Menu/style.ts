import { css } from "@emotion/react"
import { Theme } from "../../theme"

type DynMenuCssArgs = {
    theme: Theme,
    flat: boolean,
    borderless: boolean,
    x: number,
    y: number,
    show: boolean
};

export const dynMenuCss = ({ theme, flat, borderless, x, y, show }: DynMenuCssArgs) => css`
    padding: 0;
    margin: 0;
    border: ${borderless ? "none" : `1px solid ${theme.borderColor}`};
    position: absolute;
    background: white;
    z-index: ${theme.menu.zIndex};
    left: ${x}px;
    top: ${y}px;
    ${flat ? "" : theme.boxShadow + ";"}
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
    transition-property: transform, opacity;
    transition-duration: ${theme.transitionDuration};
    width: max-content;

    ${show
            ? `opacity: 1;
    transform: scaleY(1);`
            : ""}
`

export const dynMenuItemCss = ({ theme }: { theme: Theme }) => css`
    list-style: none;
    padding: ${theme.menu.padding};
    color: ${theme.colorStyles.light.text};
    cursor: pointer;
    position: relative;

    &:hover {
        background: ${theme.colorStyles.light.origin};
    }
`

export const dynMenuCloseAreaCss = ({ theme }: { theme: Theme }) => css`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: ${theme.menu.zIndex - 1000};
`