import { css } from '@emotion/react'

export const dynRootCss = ({ theme, flat, borderless }) => css`
    ${borderless ? 'border: none' : `border: 1px solid ${theme.pane.borderColor}`};
    ${flat ? 'box-shadow: none' : 'box-shadow: 0px 2px 4px rgba(0,0,0,0.4)'};
    display: flex;
    flex-direction: column;
`

export const dynTitleCss = ({ theme }) => css`
    background: ${theme.pane.titleBg};
    display: flex;
    align-items: center;
    margin: 0px;
    padding: ${theme.pane.padding};
`

export const dynContentCss = ({ theme }) => css`
    padding: ${theme.pane.padding};
    flex: 1 0 auto; 
`