import {ElementType, forwardRef, JSX} from "react";

import {useTheme} from '../../theme'
import {Ripple} from '../Ripple'
import type {PolymorphicRef} from "../../types";
import {buttonCss, dynButtonCss} from './style'
import type {ButtonProps} from "./ButtonProps";

export type {ButtonProps};

export type ButtonComponent =
    (<C extends ElementType = 'button'>(props: ButtonProps<C>, ref?: PolymorphicRef<C>) => JSX.Element)
    & { displayName: string };

/**
 * Кнопка. По умолчанию представляет собой обертку вокруг `button`. Помимо своих свойств, принимает свойства оборачиваемого элемента.
 */
export const Button = forwardRef(<C extends ElementType = 'button'>({
                                                                        elementType,
                                                                        disabled = false,
                                                                        flat = false,
                                                                        stickOnHover = false,
                                                                        colorStyle = "dark",
                                                                        transparent = false,
                                                                        fillable = false,
                                                                        borderless = false,
                                                                        children,
                                                                        ...props
                                                                    }: ButtonProps<C>, ref?: PolymorphicRef<C>) => {

    const theme = useTheme();
    const {colorStyles, button} = theme;

    const Component: ElementType = elementType ?? 'button';

    return (
        <Component ref={ref} css={[
            buttonCss,
            dynButtonCss({
                theme,
                flat,
                stickOnHover,
                disabled,
                colorStyle,
                transparent,
                fillable,
                borderless
            }),
            button.css
        ]} {...props}>
            <Ripple color={colorStyles[colorStyle].ripple}/>
            {children}
        </Component>
    );
}) as ButtonComponent;

Button.displayName = "Button"