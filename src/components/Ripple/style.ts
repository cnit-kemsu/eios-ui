import { css } from '@emotion/react'

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