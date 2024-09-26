import {css} from '@emotion/react'
import {Theme} from "../../theme";
import {ColorStyle} from "../../types";

type DynButtonCssArgs = {
    theme: Theme, colorStyle: ColorStyle, flat: boolean,
    transparent: boolean, fillable: boolean,
    borderless: boolean, disabled: boolean
};

export const dynButtonCss = ({
                                 theme, colorStyle, flat,
                                 transparent, fillable, borderless, disabled
                             }: DynButtonCssArgs) => {

    const {transitionDuration, colorStyles} = theme
    const cs = colorStyles[colorStyle]

    return css`
      height: ${theme.button.height};
      ${borderless ? 'border: none' : `border: 1px solid ${cs.origin}`};
      ${flat ? '' : 'border-bottom: none;'};
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