import { css } from '@emotion/react'


export const rootCss = css`
    outline: none;
    padding: 8px;    
    transition-property: padding, border, box-shadow;        
`

export const dynRootCss = ({ theme, filled, borderless, flat, colorStyle }) => css`    

    ${!flat ? `${theme.boxShadow};` : ''}

    min-height: ${theme.textField.height};

    ${flat ? `${borderless ? 'border: none; border-bottom' : 'border'}: 1px solid ${theme.borderColor};` : 'border: none; border-bottom: 2px solid transparent;'}
    background: ${filled ? 'rgba(240,240,240,1)' : 'white'};
    
    transition-duration: ${theme.transitionDuration};
    transition: padding-bottom 0.1s ease-out border 0.1s ease-out;

    &:focus {
        border-bottom: 2px solid ${theme.colorStyles[colorStyle].origin};   
        padding-bottom: 7px;        
    }
        
`