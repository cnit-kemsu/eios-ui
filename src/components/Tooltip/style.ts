import {css} from '@emotion/react'
import {Theme} from "../../theme";

export const rootCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100000;
  position: absolute;
`

type DynRootCssArgs = {
    theme: Theme,
    position: 'top'|'bottom'|'right'|'left',
    show: boolean,
    offset: { left: number, top: number }
};

export const dynRootCss = ({theme, position, show, offset: {left, top}}: DynRootCssArgs) => {

    const topOrBottom = position === 'top' || position === 'bottom'

    const scaleProp = topOrBottom ? 'scaleY' : 'scaleX'

    let scaleOrigin = 'top'
    if (position === 'left') scaleOrigin = 'right'
    else if (position === 'right') scaleOrigin = 'left'
    else if (position === 'top') scaleOrigin = 'bottom'

    return css`
      transform-origin: ${scaleOrigin};
      transform: ${scaleProp}(${show ? '1' : '0'});
      opacity: ${show ? '1' : '0'};
      transition-property: transform, opacity;
      transition-duration: ${theme.transitionDuration};
      flex-direction: ${position === 'top' || position === 'bottom' ? 'column' : 'row'};
      left: ${isNaN(left) ? 'unset' : `${left}px`};
      top: ${isNaN(top) ? 'unset' : `${top}px`};
    `
}

export const dynTooltipCss = ({theme}: {theme: Theme}) => css`
  background: ${theme.tooltip.bg};
  color: ${theme.tooltip.color};
`

export const tooltipCss = css`
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 8px;
  font-size: 0.85rem;
`

export const arrowCss = css`
  width: 0;
  height: 0;
  border-style: solid;
  position: relative;
`

export const dynArrowCss = ({theme, position}: {theme: Theme, position: string}) => {

    switch (position) {

        case 'top':
            return css`
              border-width: 8px 8px 0 8px;
              border-color: ${theme.tooltip.bg} transparent transparent transparent;
            `

        case 'left':
            return css`
              border-width: 8px 0 8px 8px;
              border-color: transparent transparent transparent ${theme.tooltip.bg};
            `

        case 'right':
            return css`
              border-width: 8px 8px 8px 0;
              border-color: transparent ${theme.tooltip.bg} transparent transparent;
            `

        case 'bottom':
        default:
            return css`
              border-width: 0 8px 8px 8px;
              border-color: transparent transparent ${theme.tooltip.bg} transparent;
            `
    }
}

