import React from "react";
import {buttonCss, dynButtonCss} from './style'
import {ButtonProps} from "./ButtonProps";
import Ripple from '../Ripple'
import {toArray} from '../../utils'
import {useTheme} from '../../theme'

export default function Button<C extends React.ElementType = 'button'>({
                                                                           elementType,
                                                                           disabled = false,
                                                                           flat = false,
                                                                           stickOnHover = false,
                                                                           colorStyle = "dark",
                                                                           transparent = false,
                                                                           fillable = false,
                                                                           borderless = false,
                                                                           children,
                                                                           css,
                                                                           ...props
                                                                       }: ButtonProps<C>) {

    const theme = useTheme()
    const {colorStyles, button} = theme

    const Component = elementType || 'button'

    return (
        <Component css={[
            buttonCss,
            dynButtonCss({
                theme,
                flat,
                elementType,
                stickOnHover,
                disabled,
                colorStyle,
                transparent,
                fillable,
                borderless
            }),
            button.css,
            ...toArray(css)
        ]} {...props}>
            <Ripple color={colorStyles[colorStyle].ripple}/>
            {children}
        </Component>
    );
}