import { css, keyframes } from '@emotion/react'


const dynBacklayerKeyframes = ({ open }) => open ?
    keyframes`
        from { opacity: 0; }
        to { opacity: 1; }
    `
    :
    keyframes`
        from { opacity: 1; }
        to { opacity: 0; }
    `

const dynModalKeyframes = ({ open }) => open ?
    keyframes`
        from { 
            /*margin-top: 0%;*/
            opacity: 0;
            transform: scale(0.5,0); 
        }
        to { 
            /*margin-top: 10%;*/
            opacity: 1;
            transform: scale(1,1); 
        }
    `
    :
    keyframes`
        from { 
            /*margin-top: 10%;*/
            opacity: 1;
            transform: scale(1,1); 
        }
        to { 
            /*margin-top: 50%;*/
            opacity: 0;
            transform: scale(0.5,0); 
        }
    `

export const dynBacklayerCss = ({ theme, open }) => css`
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);    
    z-index: 99998;    
    display: flex;    
    align-items: flex-start;
    justify-content: center;

    animation-name: ${dynBacklayerKeyframes({ theme, open })}; 
    animation-duration: ${theme.transitionDuration};
    animation-fill-mode: forwards;
`


export const dynContainerCss = ({ theme, open }) => css`
    box-shadow: ${theme.boxShadow}; 
    display: inline-flex;
    flex-direction: column;  
    position: relative;
    background: white;
    z-index: 99999;
    margin-top: 10%; 

    transform-origin: ${open ? 'top' : 'bottom'};  

    animation-name: ${dynModalKeyframes({ theme, open })}; 
    animation-duration: ${theme.transitionDuration};
    animation-fill-mode: forwards;

    * {
        z-index: 101;
    }


`

export const dynHeaderCss = ({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: ${theme.modal.padding};
`

export const dynTitleCss = ({ theme }) => css`
    font-weight: bold;
    font-size: 24px;
    margin: 0px;
    margin-right: ${theme.modal.padding};
    padding-bottom: 0px;
`

export const dynContentCss = ({ theme }) => css`
    padding: ${theme.modal.padding};
    text-align: justify;
    margin-top: -1em;
`

