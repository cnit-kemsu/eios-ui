import { css } from "@emotion/react"
import { Theme } from "../../theme"

type DynRootCssArgs = { theme: Theme, flat: boolean, borderless: boolean };

export const dynRootCss = ({ theme, flat, borderless }: DynRootCssArgs) => css`
    ${borderless ? "border: none" : `border: 1px solid ${theme.pane.borderColor}`};
    ${flat ? "box-shadow: none" : theme.boxShadow + ";"};
    display: flex;
    flex-direction: column;

    & > div {
        padding: 16px;
        flex: 1 0 auto;
    }
`

export const dynTitleCss = ({ theme }: { theme: Theme }) => css`
    background: ${theme.pane.titleBg};
    display: flex;
    align-items: center;
    margin: 0;
    padding: 16px;
    font-size: 1.5rem;
`