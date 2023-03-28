import React, {ForwardedRef, forwardRef, ReactElement} from "react"
import {buttonCss, dynButtonCss} from "../Button/style"
import {Ripple} from '../Ripple'
import {useTheme} from "../../theme"
import {toArray} from "../../utils"
import {inputCss, dynRootCss} from "./style"
import {FileInputProps} from "./FileInputProps";

export type FileInputComponent =
    ((props: FileInputProps, ref?: ForwardedRef<HTMLDivElement>) => ReactElement | null)
    & { displayName?: string };

export const FileInput: FileInputComponent = forwardRef<HTMLDivElement, FileInputProps>(({
                                                                                             label,
                                                                                             css,
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

    const finalCss = [
        buttonCss,
        dynButtonCss({theme, flat, stickOnHover, disabled, colorStyle, transparent, fillable, borderless}),
        button.css,
        ...toArray(css)
    ];

    return (
        <div ref={ref} css={dynRootCss({theme})}>
            <label css={finalCss}>
                <Ripple color={colorStyles[colorStyle].ripple}/>
                <span>{label}</span>
                <input onChange={onChange} multiple={multiple} type="file" ref={inputRef} css={inputCss} {...props} />
            </label>
        </div>
    );
});

FileInput.displayName = "FileInput";