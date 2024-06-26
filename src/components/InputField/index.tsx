import type {ChangeEvent, ForwardedRef, HTMLInputTypeAttribute, ReactElement} from 'react';
import {forwardRef, useCallback} from 'react';
import {useTheme} from '../../theme';
import {dynRootCss, rootCss} from './style';
import type {InputFieldProps} from "./InputFieldProps";

export type {InputFieldProps};

export type InputFieldComponent =
    ((props: InputFieldProps, ref?: ForwardedRef<HTMLInputElement>) => (ReactElement | null))
    & { displayName?: string };

/**
 * Обертка вокруг `<input>`. Помимо своих свойств, также принимает свойства `<input>`.
 */
export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(({
                                                                             colorStyle = 'secondary',
                                                                             borderless = false,
                                                                             flat = false,
                                                                             type = "text",
                                                                             onChange,
                                                                             ...props
                                                                         }: InputFieldProps, ref?) => {

    const theme= useTheme();

    const elCss = [rootCss, dynRootCss({theme, flat, borderless, colorStyle})];

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
}) as InputFieldComponent;

InputField.displayName = "InputField";

