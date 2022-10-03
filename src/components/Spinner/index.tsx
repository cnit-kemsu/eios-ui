import React, {forwardRef} from 'react'
import {dynSpinnerCircleCss, spinnerCircleCss, spinnerCss} from './style'
import {useTheme} from '../../theme'
import {toArray} from '../../utils'
import {SpinnerProps} from "./SpinnerProps";

function _Spinner({ colorStyle="secondary", scale = 1, css, ...props } : SpinnerProps, ref) {

    const theme = useTheme();

    const r = scale * 45;
    const l = 2 * Math.PI * r;

    return (
        <svg ref={ref} {...props} css={[spinnerCss, ...toArray(css)]} viewBox="0 0 100 100">
            <circle css={[spinnerCircleCss, dynSpinnerCircleCss({ theme, l, colorStyle })]} cx="50" cy="50" r={r} />
        </svg>
    )
}

export const Spinner = forwardRef<SVGSVGElement, SpinnerProps>(_Spinner);
Spinner.displayName = 'Spinner';