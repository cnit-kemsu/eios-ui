import { css } from '@emotion/core'

export const dynRootCss = ({ theme, borderless, flat, colorStyle }) => css`

    outline: none;
    padding: 8px;

    ${!flat ? css`                
        box-shadow: 0px 2px 4px rgba(0,0,0,0.4);
    ` : ''}

    ${flat ? `${borderless ? 'border: none; border-bottom' : 'border'}: 2px solid ${theme.borderColor};` : 'border: none; border-bottom: 2px solid transparent;'}

    background: rgba(255,255,255,0);
    transition-property: border, box-shadow;    
    transition-duration: ${theme.transitionDuration};

    &:focus{
        border-bottom: 2px solid ${theme.colorStyles[colorStyle].origin};        
    } 
    
`