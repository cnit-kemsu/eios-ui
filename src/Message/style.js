import { css } from '@emotion/react'
import tc from 'tinycolor2'

export const dynMessageCss = ({ theme, flat, type, borderless }) => css`
    ${borderless ? 'border: none' : `border: 2px solid ${tc(theme.message.bg[type]).darken(10).toString()}`};
    background: ${theme.message.bg[type]};
    color: ${theme.message.color[type]};
    ${flat ? '' : theme.boxShadow + ";"}
`