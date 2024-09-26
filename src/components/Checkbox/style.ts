import { css } from '@emotion/react'
import {Theme} from "../../theme";
import {ColorStyle} from "../../types";

type DynIconCssArgs = {
    checked: boolean, disabled: boolean, theme: Theme, colorStyle: ColorStyle
};

export const dynIconCss = ({ checked, disabled, theme, colorStyle } : DynIconCssArgs) => {
    
    const color = checked ?
        theme.colorStyles[colorStyle].origin
        :
        theme.checkbox.uncheckedColor;

    return css`
        color: ${color};
        opacity: ${disabled ? theme.disabledOpacity : '1'};
        margin: -2px;
    `
}

export const dynRootCss = ({ disabled } : { disabled: boolean }) => disabled ? css`pointer-events: none;` : ''

export const labelCss = css`
  margin-left: 4px;
`