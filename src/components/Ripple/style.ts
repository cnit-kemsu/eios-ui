import { keyframes, css } from '@emotion/react'


const rippleKeyframes = keyframes`
    from{        
        transform: scale(0,0);
    }
    to{        
        transform: scale(1,1);
    }
`

export const rootCss = css`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  overflow: hidden;
`

export const rippleCss = css`
  left: 0;
  top: 0;
  border-radius: 100%;
  position: absolute;
  width: 200px;
  height: 200px;
  transform-origin: center;

  animation-name: ${rippleKeyframes};
  animation-timing-function: cubic-bezier(0.120, 0.810, 0.650, 0.840);

  pointer-events: none;
  transition: opacity 1s;
`

type DynRippleCssArgs = { color: string, duration: string, hideRipple: boolean, x: number, y: number, diameter: number };

export const dynRippleCss = ({ color, duration, hideRipple, x, y, diameter }: DynRippleCssArgs) => css`
    background: ${color};
    opacity: ${hideRipple ? '0' : '1'};
    left: ${x}px;
    top: ${y}px;
    width: ${diameter}px;
    height: ${diameter}px;
    animation-duration: ${duration};
`