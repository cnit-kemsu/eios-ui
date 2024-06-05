import {BorderlessProp, ColorStyleProp, DisabledProp, FCR, FlatProp, StyleProps} from "../../types";
import {ChangeEvent, ComponentPropsWithRef, forwardRef, useCallback} from "react";
import {useTheme} from "../../theme";
import {dynRootCss, rootCss} from "../InputField/style";

export type TextAreaPropsBase = {
        onChange?: (value: string) => void;
    }
    & ColorStyleProp
    & DisabledProp
    & FlatProp
    & BorderlessProp
    & StyleProps;

export type TextAreaProps = TextAreaPropsBase
    & Omit<ComponentPropsWithRef<"textarea">, keyof TextAreaPropsBase>

/** Обертка вокруг `<textarea>`. Принимает также свойства `textarea`. */
export const TextArea = forwardRef<HTMLTextAreaElement>(({
                                                             colorStyle = 'secondary',
                                                             borderless = false,
                                                             flat = false,
                                                             onChange,
                                                             ...props
                                                         }: TextAreaProps, ref) => {
    const theme = useTheme();
    const elCss = [rootCss, dynRootCss({theme, flat, borderless, colorStyle, textarea: true})];

    const handleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => onChange?.(e.target.value), [onChange]);

    return <textarea ref={ref} css={elCss} onChange={handleChange} {...props} />
}) as FCR<TextAreaProps, HTMLTextAreaElement>;

TextArea.displayName = "TextArea";