import { css } from '@emotion/react'


export const rootCss = css`
    outline: none;
    padding: 8px;    
    transition-property: border, box-shadow;    
    height: 32px;
`

export const dynRootCss = ({ theme, filled, borderless, flat, colorStyle }) => css`    

    ${!flat ? css`                
        box-shadow: 0px 2px 4px rgba(0,0,0,0.4);
    ` : ''}

    ${flat ? `${borderless ? 'border: none; border-bottom' : 'border'}: 1px solid ${theme.borderColor};` : 'border: none; border-bottom: 2px solid transparent;'}
    background: ${filled ? 'rgba(240,240,240,1)' : 'white'};
    transition-duration: ${theme.transitionDuration};
    &:focus{
        border-bottom: 2px solid ${theme.colorStyles[colorStyle].origin};        
    } 
        
`