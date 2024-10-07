import {css} from '@emotion/react'
import tc from 'tinycolor2'
import {MessageType} from "./MessageProps";
import {Theme} from "../../theme";

type DynMessageCssArgs = {
    theme: Theme,
    flat: boolean,
    type: MessageType,
    borderless: boolean
}

export const dynMessageCss = ({theme, flat, type, borderless}: DynMessageCssArgs) => css`
    ${borderless ? 'border: none' : `border: 1px solid ${tc.mix(theme.message.bg[type], tc('black'), 10).toString()}`};
    background: ${theme.message.bg[type]};
    color: ${theme.message.color[type]};
    ${flat ? '' : theme.boxShadow + ";"}
`