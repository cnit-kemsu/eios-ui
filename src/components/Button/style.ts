import {css} from '@emotion/react'
import {Theme} from "../../theme";
import {ColorStyle} from "../types";

export const buttonCss = css`
  font-size: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition-property: background, color, box-shadow;
  box-sizing: content-box;
  /* for anchor */
  text-decoration: none;
  cursor: pointer;
  
  &:focus {
    outline: none;
  }
`
type DynButtonCssArgs = {
    theme: Theme, colorStyle: ColorStyle, flat: Boolean,
    stickOnHover: boolean, transparent: boolean, fillable: boolean,
    borderless: boolean, disabled: boolean
};

export const dynButtonCss = ({
                                 theme, colorStyle, flat, stickOnHover,
                                 transparent, fillable, borderless, disabled
                             }: DynButtonCssArgs) => {

    const {transitionDuration, colorStyles} = theme
    const cs = colorStyles[colorStyle]

    return css`
      height: ${theme.button.height};
      ${borderless ? 'border: none' : `border: 1px solid ${cs.origin}`};
      ${flat && !stickOnHover ? '' : 'border-bottom: none;'};
      background: ${transparent ? 'transparent' : cs.origin};
      color: ${transparent ? cs.origin : cs.text};
      opacity: ${disabled ? theme.disabledOpacity : '1'};
      transition-duration: ${transitionDuration};

      ${flat ? '' : `box-shadow: ${theme.button.shadow} ${cs.shadow};`}
      ${!disabled
              ?
              css`
                &:hover {
                  background: ${!transparent || fillable ? cs.hover : 'transparent'};
                  color: ${!transparent || fillable ? cs.textHover : cs.hover};
                  ${stickOnHover ? `box-shadow: ${theme.button.shadowOnHover} ${cs.shadow};` : ''}
                }

                &:active {
                  box-shadow: none;
                }
              `
              :
              'pointer-events: none;'
      }
      
    `
}