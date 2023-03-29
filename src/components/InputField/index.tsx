import type {ChangeEvent, ForwardedRef, HTMLInputTypeAttribute, MutableRefObject, ReactElement} from 'react';
import {forwardRef, useCallback} from 'react';
import {useTheme} from '../../theme';
import {toArray} from '../../utils';
import {dynRootCss, rootCss} from './style';
import type {InputFieldProps} from "./InputFieldProps";

export type InputFieldComponent =
    ((props: InputFieldProps, ref?: ForwardedRef<HTMLInputElement>) => (ReactElement | null))
    & { displayName?: string };

export const InputField: InputFieldComponent = forwardRef<HTMLInputElement, InputFieldProps>(
    ({
         colorStyle = 'secondary',
         borderless = false,
         flat = false,
         filled = false,
         css,
         type = "text",
         onChange,
         ...props
     }: InputFieldProps, ref?) => {

        const theme = useTheme();

        const elCss = [rootCss, dynRootCss({theme, flat, borderless, colorStyle}), ...toArray(css)];

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

        const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => onChange?.(e.target.value), [onChange])

        return <input ref={ref} type={type as HTMLInputTypeAttribute} onChange={handleChange} css={elCss} {...props} />
    });

InputField.displayName = "InputField";

