import { css } from '@emotion/react'

export const dynMenuCss = ({ theme, flat, borderless, x, y }) => css`
    padding: 0px;
    margin: 0px;
    border: ${borderless ? 'none' : `1px solid ${theme.borderColor}`};
    position: absolute;
    background: white;
    z-index: 1000000;
    left: ${x}px;
    top: ${y}px;
    ${flat ? '' : 'box-shadow: 0px 2px 4px rgba(0,0,0,0.5);'}
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
    transition-property: transform, opacity;
    transition-duration: ${theme.transitionDuration};
`

export const displayedMenuCss = css`
    opacity: 1;
    transform: scaleY(1);
`

export const dynMenuItemCss = ({ theme }) => css`
    list-style: none;
    padding: ${theme.menu.padding};    
    color: ${theme.colorStyles.light.text};
    cursor: pointer;

    &:hover {        
        background: ${theme.colorStyles.light.origin};
    }
`