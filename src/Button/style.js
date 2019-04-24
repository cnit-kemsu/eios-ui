import { css } from '@emotion/core'


export const buttonCss = css`
    font-size: unset;
    display: inline-flex;        
    align-items: center;
    justify-content: center;
    transition-property: background, color, box-shadow;
    /* for anchor */
    text-decoration: none;
    cursor: pointer;   
`

export const dynButtonCss = ({
    theme, colorStyle, flat, stickOnHover,
    transparent, fillable, borderless, disabled
}) => {

    const { transitionDuration, colorStyles } = theme
    const cs = colorStyles[colorStyle]

    return css`              
        ${borderless ? 'border: none' : `border: 2px solid ${cs.origin}`};        
        ${flat && !stickOnHover ? '' : 'border-bottom: none;'};
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
                    ${stickOnHover ? `box-shadow: ${theme.button.shadowOnHover} ${cs.shadow};` : ''}
                }

                &:active {
                    box-shadow: none;                    
                }
            `
            :
            'pointer-events: none;'
        }

        &:focus{
            outline: none;
        } 
    `
}