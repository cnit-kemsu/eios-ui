import { css, keyframes } from '@emotion/core'
import tc from 'tinycolor2'

export const rootCss = css`
    background: white;
    border-width: 1px;
    border-style: solid;    
    padding: 14px 0px 28px 0px;
`

export const dynRootCss = ({ theme, disabled, flat, borderless }) => css`
    ${!borderless ? `border: 1px solid ${theme.borderColor}` : 'border: none'};
    pointer-events: ${disabled ? 'none' : 'auto'};
    opacity: ${disabled ? theme.disabledOpacity : '1'};
    ${flat ? '' : 'box-shadow: 0 2px 4px rgba(0,0,0,0.4);'}
`

export const itemCss = css`
    position: relative;    
    overflow: hidden;         
    padding: 8px 24px;
    display: block;
    cursor: pointer;
`

export const dynItemCss = ({ theme, colorStyle }) => css`
    &:hover{                                         
        color: ${theme.colorStyles[colorStyle].hover};
    }
`

const dynSelectedItemKeyframes = ({ theme, colorStyle }) => {

    const baseColor = tc(theme.colorStyles[colorStyle].origin)

    return keyframes`
        from {
            background: ${baseColor.setAlpha(0.2).toString()};
        }
        to {
            background: ${baseColor.setAlpha(0.05).toString()};
        }
    `
}

export const dynSelectedItemCss = ({ theme, colorStyle }) => css`    
    background: ${tc(theme.colorStyles[colorStyle].origin).setAlpha(0.05).toString()};
    border-left: 1px solid ${theme.colorStyles[colorStyle].origin};
    border-left-width: 4px;
    border-left-style: solid;
    padding-left: 20px;  
    animation: ${dynSelectedItemKeyframes({ theme, colorStyle })} 0.5s;
`