import React, {forwardRef} from 'react'
import {useTheme} from '../../theme'
import {toArray} from '../../utils'
import {Ripple} from '../Ripple'
import {dynIconCss, dynRootCss, labelCss, rootCss} from './style'
import {CheckboxProps} from "./CheckboxProps";

const rippleStyle = {
    width: '200%',
    height: '200%',
    left: '-50%',
    top: '-50%',
    borderRadius: '100%',
};

/**
 * Чекбокс
 * @param name
 * @param css
 * @param colorStyle
 * @param disabled
 * @param checked
 * @param onClick
 * @param children
 * @param value
 * @param props
 * @constructor
 */
export const Checkbox : React.FC<CheckboxProps> = forwardRef<HTMLDivElement, CheckboxProps>(({
                             name,
                             css,
                             colorStyle = 'secondary',
                             disabled = false,
                             checked = false,
                             onClick,
                             children,
                             value,
                             ...props
                         }: CheckboxProps, ref) => {

    const theme = useTheme()
    const {colorStyles, checkbox} = theme

    return (
        <div ref={ref} {...props} onClick={() => onClick?.()}
             css={[rootCss, dynRootCss({disabled}), checkbox.css, ...toArray(css)]}>
            <div
                css={[
                    dynIconCss({theme, disabled, checked, colorStyle}),
                    {
                        position: 'relative',
                        overflow: 'unset'
                    }
                ]}
            >
                <Ripple
                    style={rippleStyle}
                    color={colorStyles[colorStyle].ripple}
                />
                <i style={{display: 'block'}}
                   className='material-icons'>{checked ? "check_box" : "check_box_outline_blank"}
                </i>
            </div>
            <div css={labelCss}>{children}</div>
            <input name={name} type='hidden' readOnly checked={checked} value={value}/>
        </div>
    )
});