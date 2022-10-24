import { css } from '@emotion/react'
import {Theme} from "../../theme";


export const dynRootCss = ({theme} : {theme:Theme}) => css`
    display: flex;
    align-items: center;
    height: ${theme.button.height};
`

export const inputCss = css`
    display: none;
`

