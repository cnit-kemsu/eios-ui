import {css} from '@emotion/react'
import {Theme} from "../../theme";

export const containerCss = css`
  display: inline-block;
  position: relative;  
  box-sizing: border-box;
`

export const dynOptionCss = ({theme}: { theme: Theme }) => css`
  padding: 8px;
  position: relative;
  overflow: hidden;
  height: ${theme.select.itemHeight};
  display: flex;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
  width: 100%;

  &:hover, &:active {
    background: ${theme.select.selectedOptionBg};
  }
`

type DynOptionsCssArgs = { theme: Theme, borderless: boolean, flat: boolean };

export const dynOptionsCss = ({theme, borderless, flat}: DynOptionsCssArgs) => css`
  background: white;
  overflow: auto;
  z-index: 100;  
  position: absolute;
  white-space: nowrap;
  ${flat ? borderless ? 'border: none' : `border: 1px solid ${theme.select.borderColor};` : 'border: none;'} transform: scaleY(0);
  opacity: 0;
  transform-origin: top;
  transition: transform ${theme.transitionDuration}, opacity ${theme.transitionDuration};
  ${flat ? '' : theme.boxShadow + ";"};
  padding: 8px;
  box-sizing: border-box;
  margin-top: -1px;
`

type DynSelectCssArgs = {theme: Theme, disabled: boolean, borderless: boolean, flat: boolean};

export const dynSelectCss = ({theme, disabled, borderless, flat}: DynSelectCssArgs) => css`  
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
  cursor: pointer;
  justify-content: space-between;
  pointer-events: ${disabled ? 'none' : 'auto'};
  box-sizing: border-box;  
  
  ${flat ? '' : theme.boxShadow + ';'}
  * {
    opacity: ${disabled ? theme.disabledOpacity : '1'};
  }

  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  span[data-placeholder=true] {
    color: ${theme.select.placeholderColor};
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
  z-index: 90;
`