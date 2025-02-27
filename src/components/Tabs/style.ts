import {css} from '@emotion/react'
import {Theme} from "../../theme";
import {ColorStyle} from "../../types";

export const dynTabsCss = ({theme}: { theme: Theme }) => css`
  &:after {
    content: '';
    flex: 1;
    border-bottom-color: 4px solid ${theme.borderColor};
  }
`

export const dynTabCss = ({theme, colorStyle}: { theme: Theme, colorStyle: ColorStyle }) => css`
  /*height: ${theme.tabs.height};*/
  border-bottom: 4px solid ${theme.borderColor};
  padding: ${theme.tabs.tabPadding};
  background: ${theme.colorStyles[colorStyle].text};
`

type DynSelectedTabCssArgs = { theme: Theme, colorStyle: ColorStyle, fillSelectedTab: boolean };

export const dynSelectedTabCss = ({theme, fillSelectedTab, colorStyle}: DynSelectedTabCssArgs) => css`
  background: ${fillSelectedTab ? theme.colorStyles[colorStyle].origin : 'transparent'};
  color: ${fillSelectedTab ? theme.colorStyles[colorStyle].text : theme.colorStyles[colorStyle].origin};
  border-bottom-color: ${theme.colorStyles[colorStyle].origin};
`