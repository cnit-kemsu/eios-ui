import {css, keyframes} from '@emotion/react'
import tc from 'tinycolor2'
import {Theme} from "../../theme";
import {ColorStyle} from "../../types";

export const rootCss = css`
  background: white;
  border-width: 1px;
  border-style: solid;
  padding: 1rem 0 2rem 0;
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
  padding: 0.6rem 1rem 0.6rem 2rem;
  display: block;
  cursor: pointer;
  border-left: 0.3rem solid transparent;
`

type DynItemCssArgs = { theme: Theme, colorStyle: ColorStyle };

export const dynItemCss = ({theme, colorStyle}: DynItemCssArgs) => css`  
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
    `;
}

export const dynSelectedItemCss = ({theme, colorStyle}: DynItemCssArgs) => css`
  background: ${tc(theme.colorStyles[colorStyle].origin).setAlpha(0.05).toString()};  
  padding: 0.6rem 1rem 0.6rem 2rem;
  border-left: 0.3rem solid ${theme.colorStyles[colorStyle].origin};
  animation: ${dynSelectedItemKeyframes({theme, colorStyle})} 0.5s;
`