import React, {ChangeEvent, ForwardedRef, forwardRef, MutableRefObject, ReactElement, useCallback} from 'react'
import {useTheme} from '../../theme'
import {toArray} from '../../utils'
import {dynRootCss, rootCss} from './style'
import {InputFieldProps} from "./InputFieldProps";

type InputFieldComponent =
    ((props: InputFieldProps, ref: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>) => ReactElement | null)
    & { displayName?: string };

export const InputField: InputFieldComponent = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputFieldProps>(
    ({
         colorStyle = 'secondary',
         borderless,
         flat,
         filled,
         value,
         css,
         multiline,
         type = "text",
         onChange,
         ...props
     }: InputFieldProps, ref) => {

        const theme = useTheme();

        const elCss = [rootCss, dynRootCss({theme, filled, flat, borderless, colorStyle}), ...toArray(css)];
        const v = !value && value !== 0 && value !== "" ? "" : value;

        if (type === 'file') {
            throw new Error("Используйте FileInput вместо InputField для работы с файлами");
        }

        if (type === 'submit') {
            throw new Error("Используйте Button вместо InputField для submit-кнопки");
        }

        if (type === 'button') {
            throw new Error("Используйте Button вместо InputField для кнопки");
        }

        if (type === 'checkbox') {
            throw new Error("Используйте Checkbox вместо InputField для чекбокса");
        }

        const finalProps = {
            value: v,
            css: elCss,
            onChange: useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange?.(e.target.value), [onChange]),
            ...props
        };

        return multiline
            ? (<textarea ref={ref as MutableRefObject<HTMLTextAreaElement>} {...finalProps} />)
            : (<input ref={ref as MutableRefObject<HTMLInputElement>}
                      type={type as React.HTMLInputTypeAttribute} {...finalProps} />);
    });

InputField.displayName = "InputField";

