import { css } from '@emotion/react'
import {Theme} from "../../theme";

type DynRootCssArgs = { theme: Theme, flat: boolean, borderless: boolean };

export const dynRootCss = ({ theme, flat, borderless }: DynRootCssArgs) => css`
    ${borderless ? 'border: none' : `border: 1px solid ${theme.pane.borderColor}`};
    ${flat ? 'box-shadow: none' : theme.boxShadow + ';'};
    display: flex;
    flex-direction: column;
`

export const dynTitleCss = ({ theme }: {theme: Theme}) => css`
    background: ${theme.pane.titleBg};
    display: flex;
    align-items: center;
    margin: 0;
    padding: ${theme.pane.padding};
`

export const dynContentCss = ({ theme }: {theme: Theme}) => css`
    padding: ${theme.pane.padding};
    flex: 1 0 auto; 
`