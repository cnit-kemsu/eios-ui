import {css, keyframes} from '@emotion/react'
import {Theme} from "../../theme";


const dynBacklayerKeyframes = ({open}: { open: boolean }) => open ?
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

const dynModalKeyframes = ({open}: { open: boolean }) => open ?
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

export const dynBackLayerCss = ({theme, open}: { theme: Theme, open: boolean }) => css`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  /*width: 100%;
  height: 100%;*/
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000001;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  animation-name: ${dynBacklayerKeyframes({open})};
  animation-duration: ${theme.transitionDuration};
  animation-fill-mode: forwards;
`


export const dynContainerCss = ({theme, open}: { theme: Theme, open: boolean }) => css`
  box-shadow: ${theme.boxShadow};
  display: inline-flex;
  flex-direction: column;
  position: relative;
  background: white;
  z-index: 1000002;
  margin-top: 10%;

  transform-origin: ${open ? 'top' : 'bottom'};

  animation-name: ${dynModalKeyframes({open})};
  animation-duration: ${theme.transitionDuration};
  animation-fill-mode: forwards;

  * {
    z-index: 101;
  }


`

export const dynHeaderCss = ({theme}: { theme: Theme }) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${theme.modal.padding};
`

export const dynTitleCss = ({theme}: { theme: Theme }) => css`
  font-weight: bold;
  font-size: 24px;
  margin: 0 ${theme.modal.padding} 0 0;
  padding-bottom: 0;
`

export const dynContentCss = ({theme}: { theme: Theme }) => css`
  padding: ${theme.modal.padding};
  text-align: justify;
  margin-top: -1em;
`
