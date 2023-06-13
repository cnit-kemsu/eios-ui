import {css} from '@emotion/react'
import {Theme} from "../../theme";
import {ColorStyle} from "../types";

export const rootCss = css`
  outline: none;
  padding: 8px;
  transition-property: padding, border, box-shadow;
  box-sizing: border-box;
`

type DynRootCssArgs = {
    theme: Theme, borderless: boolean, flat: boolean, colorStyle: ColorStyle
};

export const dynRootCss = ({theme, borderless, flat, colorStyle}: DynRootCssArgs) => css`

  ${!flat ? `${theme.boxShadow};` : ''}

  height: ${theme.inputField.height};

  ${flat && borderless ? `border: none; border-bottom: 1px solid ${theme.inputField.borderColor}; padding: 9px 9px 8px 9px;` : ''}
  ${flat && !borderless ? `border: 1px solid ${theme.inputField.borderColor};` : ''}
  ${!flat ? 'border: none; padding: 9px;' : ''}

  background: white;

  &::placeholder {
    color: ${theme.inputField.placeholderColor}
  }

  ${flat ? `transition: border-bottom-color ${theme.transitionDuration} ease-out` : ''};

  &:focus {
    border-bottom: 1px solid ${theme.colorStyles[colorStyle].origin};
    padding-bottom: 8px;
  }
  
  &:disabled {
    opacity: ${theme.disabledOpacity};
  }
`