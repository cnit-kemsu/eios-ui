import {ColorStyle, Css, FCR} from "../types";
import React, {
    ChangeEvent,
    ComponentPropsWithRef,
    forwardRef,
    MutableRefObject,
    TextareaHTMLAttributes,
    useCallback
} from "react";
import {useTheme} from "../../theme";
import {dynRootCss, rootCss} from "../InputField/style";
import {toArray} from "../../utils";

export interface TextAreaPropsBase {
    colorStyle?: ColorStyle;
    borderless?: boolean;
    flat?: boolean;
    onChange?: (value: string | number | undefined) => void;
    disabled?: boolean;
    ref?: MutableRefObject<HTMLTextAreaElement>
}

export type TextAreaProps = TextAreaPropsBase
    & Omit<ComponentPropsWithRef<"textarea">, keyof TextAreaPropsBase>

export const TextArea: FCR<TextAreaProps, HTMLTextAreaElement> = forwardRef<HTMLTextAreaElement>(({
                                                                                 colorStyle = 'secondary',
                                                                                 borderless = false,
                                                                                 flat = false,
                                                                                 onChange,
                                                                                 ...props
                                                                             }: TextAreaProps, ref) => {
    const theme = useTheme();
    const elCss = [rootCss, dynRootCss({theme, flat, borderless, colorStyle})];

    const handleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => onChange?.(e.target.value), [onChange]);

    return <textarea ref={ref} css={elCss} onChange={handleChange} {...props} />
});

TextArea.displayName = "TextArea";