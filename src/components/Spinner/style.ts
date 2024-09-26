import {css, keyframes} from '@emotion/react'
import {Theme} from "../../theme";
import {ColorStyle} from "../../types";


const spinnerRotateKeyframe = keyframes`
    100% {
        transform: rotate(360deg);
    }
`

const spinnerDashKeyframe = (l: number) => keyframes`
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

type DynSpinnerCircleCssArgs = { theme: Theme, colorStyle: ColorStyle, l: number };

export const dynSpinnerCircleCss = ({theme, colorStyle, l}: DynSpinnerCircleCssArgs) => css`
    stroke: ${theme.colorStyles[colorStyle].origin};
    animation: ${spinnerDashKeyframe(l)} 1.5s linear infinite, ${spinnerRotateKeyframe} 2s linear infinite;
`