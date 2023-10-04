import type {ForwardedRef, ReactElement} from "react";
import {forwardRef} from 'react';
import {buttonCss, dynButtonCss} from "../Button/style";
import {Ripple} from '../Ripple';
import {useTheme} from "../../theme";
import {inputCss, rootCss} from "./style";
import type {FileInputProps} from "./FileInputProps";
import {CSSObject} from "@emotion/react";

export type FileInputComponent =
    ((props: FileInputProps, ref?: ForwardedRef<HTMLDivElement>) => ReactElement | null)
    & { displayName?: string };

/** Обёртка вокруг `<input type='file'>`. */
export const FileInput: FileInputComponent = forwardRef<HTMLDivElement, FileInputProps>(({
                                                                                             label,
                                                                                             colorStyle = "dark",
                                                                                             transparent = false,
                                                                                             fillable = false,
                                                                                             borderless = false,
                                                                                             stickOnHover = false,
                                                                                             flat = false,
                                                                                             disabled = false,
                                                                                             onChange,
                                                                                             multiple = false,
                                                                                             accept, style, className
                                                                                         }: FileInputProps, ref) => {

    const theme = useTheme();
    const {colorStyles, button} = theme;
    // <label> нужен для создания связи со скрытым <input>, чтобы при нажатии на него открывалось окно выбора файла
    return (
        <div ref={ref} css={rootCss} style={style} className={className}>
            <label css={[
                buttonCss,
                dynButtonCss({theme, flat, stickOnHover, disabled, colorStyle, transparent, fillable, borderless}),
                button.css as CSSObject
            ]}>
                <Ripple color={colorStyles[colorStyle].ripple}/>
                <span>{label}</span>
                <input onChange={e => onChange?.(e.target.files)} multiple={multiple} type="file" css={inputCss} accept={accept} />
            </label>
        </div>
    );
});

FileInput.displayName = "FileInput";