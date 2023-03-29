import {ColorStyle, Css, FCR} from "../types";
import React, {ChangeEvent, forwardRef, MutableRefObject, TextareaHTMLAttributes, useCallback} from "react";
import {useTheme} from "../../theme";
import {dynRootCss, rootCss} from "../InputField/style";
import {toArray} from "../../utils";

export interface TextAreaPropsBase {
    colorStyle?: ColorStyle;
    borderless?: boolean;
    flat?: boolean;
    css?: Css;
    onChange?: (value: string | number | undefined) => void;
    disabled?: boolean;
    ref?: MutableRefObject<HTMLTextAreaElement>
}

export type TextAreaProps = TextAreaPropsBase
    & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, keyof TextAreaPropsBase>

export const TextArea: FCR<TextAreaProps, HTMLTextAreaElement> = forwardRef<HTMLTextAreaElement>(({
                                                                                 colorStyle = 'secondary',
                                                                                 borderless = false,
                                                                                 flat = false,
                                                                                 css,
                                                                                 onChange,
                                                                                 ...props
                                                                             }: TextAreaProps, ref) => {
    const theme = useTheme();
    const elCss = [rootCss, dynRootCss({theme, flat, borderless, colorStyle}), ...toArray(css)];

    const handleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => onChange?.(e.target.value), [onChange]);

    return <textarea ref={ref} css={elCss} onChange={handleChange} {...props} />
});

TextArea.displayName = "TextArea";