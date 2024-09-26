import { css, keyframes } from "@emotion/react"
import { Theme } from "../../theme"
import { ColorStyle } from "../../types"


const dynBacklayerKeyframes = ({ open }: { open: boolean }) => open ?
	keyframes`
      from {
          opacity: 0;
      }
      to {
          opacity: 1;
      }
	`
	:
	keyframes`
      from {
          opacity: 1;
      }
      to {
          opacity: 0;
      }
	`

const dynModalKeyframes = ({ open }: { open: boolean }) => open ?
	keyframes`
      from {
          /*margin-top: 0%;*/
          opacity: 0;
          transform: scale(0.5, 0);
      }
      to {
          /*margin-top: 10%;*/
          opacity: 1;
          transform: scale(1, 1);
      }
	`
	:
	keyframes`
      from {
          /*margin-top: 10%;*/
          opacity: 1;
          transform: scale(1, 1);
      }
      to {
          /*margin-top: 50%;*/
          opacity: 0;
          transform: scale(0.5, 0);
      }
	`

export const dynBackLayerCss = ({ theme, open }: { theme: Theme, open: boolean }) => css`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000001;
    display: flex;
    align-items: flex-start;
    justify-content: center;

    animation-name: ${dynBacklayerKeyframes({ open })};
    animation-duration: ${theme.transitionDuration};
    animation-fill-mode: forwards;
`


export const dynContainerCss = ({ theme, open }: { theme: Theme, open: boolean }) => css`
    box-shadow: ${theme.boxShadow};
    display: inline-flex;
    flex-direction: column;
    position: relative;
    background: white;
    z-index: 1000002;
    margin-top: 10%;

    transform-origin: ${open ? "top" : "bottom"};

    animation-name: ${dynModalKeyframes({ open })};
    animation-duration: ${theme.transitionDuration};
    animation-fill-mode: forwards;

    & > div:nth-of-type(2) {
        padding: 1rem;
        text-align: justify;
    }

    * {
        z-index: 101;
    }
`

export const dynHeaderCss = ({ theme, colorStyle }: { theme: Theme, colorStyle: ColorStyle }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: ${theme.colorStyles[colorStyle].origin};
    color: ${theme.colorStyles[colorStyle].text};

    & > h2 {
        font-weight: bold;
        margin: 0 16px 0 0;
        padding-bottom: 0;
        font-size: 1.5rem;
    }

    & > button {
        width: 1.5rem;
        height: 1.5rem;
        padding: 0;
    }
`


export const dynCloseButtonIconCss = ({ theme, colorStyle }: { theme: Theme, colorStyle: ColorStyle }) => css`
    font-size: 1.5rem;
    color: ${theme.colorStyles[colorStyle].text};
`