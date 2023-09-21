import type {ForwardedRef, ReactElement} from "react";
import {forwardRef} from 'react';
import {buttonCss, dynButtonCss} from "../Button/style";
import {Ripple} from '../Ripple';
import {useTheme} from "../../theme";
import {toArray} from "../../utils";
import {inputCss, dynRootCss} from "./style";
import type {FileInputProps} from "./FileInputProps";
import {CSSObject, SerializedStyles} from "@emotion/react";

export type FileInputComponent =
    ((props: FileInputProps, ref?: ForwardedRef<HTMLDivElement>) => ReactElement | null)
    & { displayName?: string };

export const FileInput: FileInputComponent = forwardRef<HTMLDivElement, FileInputProps>(({
                                                                                             label,
                                                                                             colorStyle = "dark",
                                                                                             transparent = false,
                                                                                             fillable = false,
                                                                                             borderless = false,
                                                                                             stickOnHover = false,
                                                                                             flat = false,
                                                                                             disabled = false,
                                                                                             inputRef,
                                                                                             onChange,
                                                                                             multiple = false,
                                                                                             ...props
                                                                                         }: FileInputProps, ref) => {

    const theme = useTheme();
    const {colorStyles, button} = theme;

    return (
        <div ref={ref} css={dynRootCss({theme})}>
            <label css={[
                buttonCss,
                dynButtonCss({theme, flat, stickOnHover, disabled, colorStyle, transparent, fillable, borderless}),
                button.css as CSSObject
            ]}>
                <Ripple color={colorStyles[colorStyle].ripple}/>
                <span>{label}</span>
                <input onChange={onChange} multiple={multiple} type="file" ref={inputRef} css={inputCss} {...props} />
            </label>
        </div>
    );
});

FileInput.displayName = "FileInput";