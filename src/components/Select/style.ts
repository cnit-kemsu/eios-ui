import {css} from '@emotion/react'
import {Theme} from "../../theme";

export const containerCss = css`
  display: inline-block;
  position: relative;  
  box-sizing: content-box;
`

export const dynOptionCss = ({theme}: { theme: Theme }) => css`
  padding: 8px;
  position: relative;
  overflow: hidden;
  height: ${theme.select.itemHeight};
  display: flex;
  align-items: center;
  cursor: pointer;
  box-sizing: content-box;

  &:hover, &:active {
    background: ${theme.select.selectedOptionBg};
  }
`

type DynOptionsCssArgs = { theme: Theme, borderless: boolean, flat: boolean };

export const dynOptionsCss = ({theme, borderless, flat}: DynOptionsCssArgs) => css`
  background: white;
  overflow: auto;
  z-index: 100;
  min-width: 100%;
  position: absolute;
  white-space: nowrap;${/*borderless ? 'border: none' : `border: 1px solid ${theme.select.borderColor}`*/''};
  ${flat ? borderless ? 'border: none' : `border: 1px solid ${theme.select.borderColor};` : 'border: none;'} /*border-top: none;*/ transform: scaleY(0);
  opacity: 0;
  transform-origin: top;
  transition: transform ${theme.transitionDuration}, opacity ${theme.transitionDuration};
  ${flat ? '' : theme.boxShadow + ";"};
  padding: 4px;
  box-sizing: content-box;
`

type DynSelectCssArgs = {theme: Theme, disabled: boolean, borderless: boolean, flat: boolean, open: boolean};

export const dynSelectCss = ({theme, disabled, borderless, flat, open}: DynSelectCssArgs) => css`
  min-width: 100%;
  background: white;
  height: ${theme.select.height};
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  ${flat ? borderless ? 'border: none; padding: 3px;' : `border: 1px solid ${theme.select.borderColor};` : 'border: none; border-bottom: 2px solid transparent;'}  
  outline: none;
  transition-property: border;
  padding: 8px 0 8px 8px;
  ${open && !borderless ? 'border-bottom: none; padding-bottom: 9px;' : ''}
  cursor: pointer;
  justify-content: space-between;
  pointer-events: ${disabled ? 'none' : 'auto'};
  box-sizing: content-box;

  ${flat ? '' : 'box-shadow: 0 2px 4px rgba(0,0,0,0.4);'}
  * {
    opacity: ${disabled ? theme.disabledOpacity : '1'};
  }

  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const displayedSelectOptionsCss = css`
  transform: scaleY(1);
  opacity: 1;
`

export const selectCloseAreaCss = css`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;  
`