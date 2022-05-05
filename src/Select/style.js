import { css } from '@emotion/react'

export const dynContainerCss = ({ theme }) => css`
    display: inline-block;
    position: relative;  
    background: white;
    height: ${theme.select.height};
`

export const dynOptionCss = ({ theme }) => css`
    padding: 4px;
    position: relative;
    overflow: hidden;
    height: ${theme.select.height};
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover, &:active  {        
        background: ${theme.select.selectedOptionBg};
    } 
`

export const dynOptionsCss = ({ theme, borderless, flat }) => css`  
    background: white;
    overflow: auto;
    z-index: 100;
    min-width: 100%;
    position: absolute;
    white-space: nowrap;  
    ${/*borderless ? 'border: none' : `border: 1px solid ${theme.select.borderColor}`*/''};
    ${flat ? borderless ? 'border: none' : `border: 1px solid ${theme.select.borderColor};` : 'border: none;'}
    /*border-top: none;*/
    transform: scaleY(0);
    opacity: 0;    
    transform-origin: top;
    transition: transform ${theme.transitionDuration}, opacity ${theme.transitionDuration};
    ${flat ? '' : theme.boxShadow + ";"};
   
`

export const dynSelectCss = ({ theme, disabled, borderless, flat, open }) => css`    
    min-width: 100%;
    height: 100%;
    position: relative;
    padding: 1em;
    overflow: hidden;
    display: inline-flex;
    align-items: center;    
    ${/*borderless ? 'border: none; padding: 3px;' : `border: 1px solid ${theme.select.borderColor}`*/''};
    ${flat ? borderless ? 'border: none; padding: 3px;' : `border: 1px solid ${theme.select.borderColor};` : 'border: none; border-bottom: 2px solid transparent;'}
    ${open ? 'border-bottom: none; padding-bottom: 12px;' : ''}
    outline: none;
    transition-property: border;    
    padding-right: 0px;
    cursor: pointer;
    justify-content: space-between;  
    pointer-events: ${disabled ? 'none' : 'auto'};
    ${flat ? '' : 'box-shadow: 0 2px 4px rgba(0,0,0,0.4)'};

    * {        
        opacity: ${disabled ? theme.disabledOpacity : '1'};
    }  

    span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`

export const displayedSelectOptionsCss = css`       
    transform: scaleY(1);
    opacity: 1;
`