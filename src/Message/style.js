import { css } from '@emotion/core'
import tc from 'tinycolor2'

export const dynMessageCss = ({ theme, flat, type, borderless }) => css`
    ${borderless ? 'border: none' : `border: 2px solid ${tc(theme.message.bg[type]).darken(10).toString()}`};
    background: ${theme.message.bg[type]};
    color: ${theme.message.color[type]};
    ${flat ? '' : 'box-shadow: 0 2px 4px rgba(0,0,0,0.4)'};
`