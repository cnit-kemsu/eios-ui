import {css, keyframes} from '@emotion/react'
import tc from 'tinycolor2'
import {Theme} from "../../theme";
import {ColorStyle} from "../types";

export const rootCss = css`
  background: white;
  border-width: 1px;
  border-style: solid;
  padding: 0;
`

type DynRootCssArgs = { theme: Theme, disabled: boolean, flat: boolean, borderless: boolean };

export const dynRootCss = ({theme, disabled, flat, borderless}: DynRootCssArgs) => css`
  ${!borderless ? `border: 1px solid ${theme.borderColor}` : 'border: none'};
  pointer-events: ${disabled ? 'none' : 'auto'};
  opacity: ${disabled ? theme.disabledOpacity : '1'};
  ${flat ? '' : theme.boxShadow + ";"}
`

export const itemCss = css`
  position: relative;
  overflow: hidden;
  padding: 0.5rem 1rem 0.5rem 1rem;
  display: block;
  cursor: pointer;
`

type DynItemCssArgs = { theme: Theme, colorStyle: ColorStyle, disableSeparators?: boolean };

export const dynItemCss = ({theme, colorStyle, disableSeparators}: DynItemCssArgs) => css`

  ${disableSeparators
          ? ""
          : css`
            &:not(:last-of-type) {
              border-bottom: 1px solid ${theme.borderColor};
            }`
  }
  &:hover {
    color: ${theme.colorStyles[colorStyle].hover};
  }
`

const dynSelectedItemKeyframes = ({theme, colorStyle}: DynItemCssArgs) => {

    const baseColor = tc(theme.colorStyles[colorStyle].origin)

    return keyframes`
      from {
        background: ${baseColor.setAlpha(0.2).toString()};
      }
      to {
        background: ${baseColor.setAlpha(0.05).toString()};
      }
    `
}

export const dynSelectedItemCss = ({theme, colorStyle}: DynItemCssArgs) => css`
  background: ${tc(theme.colorStyles[colorStyle].origin).setAlpha(0.05).toString()};
  padding: 0.5rem 1rem 0.5rem 0.7rem;
  border-left: 0.3rem solid ${theme.colorStyles[colorStyle].origin};
  animation: ${dynSelectedItemKeyframes({theme, colorStyle})} 0.5s;
`