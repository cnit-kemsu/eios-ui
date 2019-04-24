import { css } from '@emotion/core'

export const rootCss = css`
    position: relative; 
    cursor: pointer;  
    display: inline-flex;
    align-items: center;
    flex-direction: row;
    user-select: none;
`

export const dynIconCss = ({ checked, disabled, theme, colorStyle }) => {    
    
    const color = checked ?
        theme.colorStyles[colorStyle].origin
        :
        theme.checkbox.uncheckedColor

    return css`
        color: ${color};
        opacity: ${disabled ? theme.disabledOpacity : '1'};        
    `
}

export const dynRootCss = ({ disabled }) => disabled ? css`pointer-events: none;` : ''