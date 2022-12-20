import { css } from '@emotion/react'
import tc from 'tinycolor2'

type DynMessageCssArgs = { theme, flat, type, borderless }

export const messageCss = css`
  padding: 8px;
  margin: 0px;
  border-radius: 6px;
`

export const dynMessageCss = ({ theme, flat, type, borderless } : DynMessageCssArgs) => css`
    ${borderless ? 'border: none' : `border: 2px solid ${tc(theme.message.bg[type]).darken(10).toString()}`};
    background: ${theme.message.bg[type]};
    color: ${theme.message.color[type]};
    ${flat ? '' : theme.boxShadow + ";"}
`