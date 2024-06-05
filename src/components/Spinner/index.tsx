import {forwardRef} from 'react'
import {dynSpinnerCircleCss, spinnerCircleCss, spinnerCss} from './style'
import {useTheme} from '../../theme'
import type {SpinnerProps} from "./SpinnerProps";
import type {FCR} from "../../types";

export type {SpinnerProps};

/** Спиннер (крутилка). Используется для отображеня выполнения некого процесса (например, запрос api).
 * Принимает также свойства `<svg>`.
 */
export const Spinner = forwardRef<SVGSVGElement, SpinnerProps>(({
                                                                                            colorStyle = "secondary",
                                                                                            scale = 1,
                                                                                            ...props
                                                                                        }: SpinnerProps, ref) => {

    const theme = useTheme();

    const r = scale * 45;
    const l = 2 * Math.PI * r;

    return (
        <svg ref={ref} {...props} css={[spinnerCss]} viewBox="0 0 100 100">
            <circle css={[spinnerCircleCss, dynSpinnerCircleCss({theme, l, colorStyle})]} cx="50" cy="50" r={r}/>
        </svg>
    )
}) as FCR<SpinnerProps, SVGSVGElement>;

Spinner.displayName = 'Spinner';