import { css } from "@emotion/react"
import { Theme } from "../../theme"
import { ColorStyle } from "../../types"

export const dynSwitchCss = ({theme, disabled} : {theme: Theme, disabled: boolean}) => css`
	background-color: ${theme.switch.background};
	pointer-events: ${disabled ? 'none' : 'unset'};
	opacity: ${disabled ? '0.5' : '1'};
`

export const dynSwitchButtonCss = ({theme, checked, colorStyle} : {theme: Theme, checked: boolean, colorStyle: ColorStyle}) => css`
    border: 2px solid ${checked ? theme.colorStyles[colorStyle].light : 'rgba(0,0,0,0.25)'};
`