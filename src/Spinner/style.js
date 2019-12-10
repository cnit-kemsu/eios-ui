import { css, keyframes } from '@emotion/core'


const spinnerRotateKeyframe = (l) => keyframes`
    100% {
        transform: rotate(360deg);
    }
`

const spinnerDashKeyframe = (l) => keyframes`
    0% {
        stroke-dasharray: 20, ${l - 20};  
        stroke-dashoffset: 0;         
    }    
    50% {
        stroke-dasharray: ${l - 20}, 20;
        stroke-dashoffset: 0;     
    }
    100% {
        stroke-dashoffset: -${l};
        stroke-dasharray: 20, ${l - 20};        
    }
`

export const spinnerCss = css`
    position: relative;
    width: inherit;
    /*height: 100%;*/
`

export const spinnerCircleCss = css`
    fill: transparent;
    stroke-width: 5;        
    stroke-linecap: round;
    transform-origin: 50% 50%; 
`

export const dynSpinnerCircleCss = ({ theme, colorStyle, l }) => css`   
    stroke: ${theme.colorStyles[colorStyle].origin};     
    animation: ${spinnerDashKeyframe(l)} 1.5s linear infinite, ${spinnerRotateKeyframe(l)} 2s linear infinite;
`