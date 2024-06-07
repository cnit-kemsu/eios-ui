import {css} from "@emotion/react";
import {Theme} from "../../theme.ts";

export const popupCss = css`
    position: absolute;
    z-index: 1000;
    transition: transform 0.1s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;    
`

export const showPopupCss = css`
    transform: scale(1);
`

export const popupPosToCss = {
    'top': css`
        margin-top: -0.1rem;
        transform: scaleY(0);
        transform-origin: bottom;
        flex-direction: column;
    `,
    'bottom': css`
        margin-top: 0.1rem;
        transform: scaleY(0);
        transform-origin: top;
        flex-direction: column;
    `,
    'left': css`
        margin-left: -0.1rem;
        transform: scaleX(0);
        transform-origin: right;
    `,
    'right': css`
        margin-left: 0.1rem;
        transform: scaleX(0);
        transform-origin: left;
    `
}
export const dynContentCss = (theme : Theme) => css`
    
    background: ${theme.tooltip.bg};
    color: ${theme.tooltip.color};
    padding: 0.25rem;
    border-radius: 4px;
    font-size: small;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
    position: relative;
`

export const arrowCss = css`
  width: 0;
  height: 0;
  border-style: solid;
  position: relative;
`

export const dynArrowCss = ({theme, position, hideArrow}: {theme: Theme, position: string, hideArrow?: boolean}) => {


    switch (position) {

        case 'top':
            return css`
              border-width: 8px 4px 0 4px;
              border-color: ${hideArrow ? 'transparent' : theme.tooltip.bg} transparent transparent transparent;
            `

        case 'left':
            return css`
              border-width: 4px 0 4px 8px;
              border-color: transparent transparent transparent ${hideArrow ? 'transparent' : theme.tooltip.bg};
            `

        case 'right':
            return css`
              border-width: 4px 8px 4px 0;
              border-color: transparent ${hideArrow ? 'transparent' : theme.tooltip.bg} transparent transparent;
            `

        case 'bottom':
        default:
            return css`
              border-width: 0 4px 8px 4px;
              border-color: transparent transparent ${hideArrow ? 'transparent' : theme.tooltip.bg} transparent;
            `
    }
}