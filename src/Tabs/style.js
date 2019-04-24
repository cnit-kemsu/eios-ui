import { css } from '@emotion/core'

export const tabsCss = css`
    display: block;
`

export const dynTabsCss = ({ theme }) => css`    
    &:after {                
        content: '';
        flex: 1;        
        border-bottom-color: 4px solid ${theme.borderColor};
    }
`

export const tabCss = css` 
    outline: none;
    border: none;
    flex: unset;
    display: inline-block;   
    cursor: pointer;  
    font-weight: bold;
    color: inherit;
    user-select: none;   
    text-align: center; 
    text-decoration: none;
    overflow: hidden;
    position: relative;
`

export const dynTabCss = ({ theme, colorStyle }) => css`    
    border-bottom: 4px solid ${theme.borderColor};
    padding: ${theme.tabs.tabPadding};    
    background: ${theme.colorStyles[colorStyle].text};
`

export const stretchTabCss = css`
    flex: 1 1 0%;
    display: block;
`

export const dynSelectedTabCss = ({ theme, fillSelectedTab, colorStyle }) => css`
    background: ${fillSelectedTab ? theme.colorStyles[colorStyle].origin : 'transparent'};
    color: ${fillSelectedTab ? theme.colorStyles[colorStyle].text : theme.colorStyles[colorStyle].origin};
    border-bottom-color: ${theme.colorStyles[colorStyle].origin};
`

export const stretchTabsCss = css`
    display: flex;
    &:after {
        display: none;
    }    
`