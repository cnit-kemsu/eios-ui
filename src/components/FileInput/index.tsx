import React, {forwardRef} from "react"
import {buttonCss, dynButtonCss} from "../Button/style"
import {Ripple} from '../Ripple'
import {useTheme} from "../../theme"
import {toArray} from "../../utils"
import {inputCss, rootCss} from "./style"
import {FileInputProps} from "./FileInputProps";

export const FileInput = forwardRef<HTMLDivElement, FileInputProps>(({
                              label,
                              css,
                              colorStyle = "dark",
                              transparent,
                              fillable,
                              borderless,
                              stickOnHover,
                              flat,
                              disabled,
                              inputRef,
                              onChange,
                              multiple,
                              ...props
                          }: FileInputProps, ref) => {

    const theme = useTheme();
    const {colorStyles, button} = theme;

    const finalCss = [
        buttonCss,
        dynButtonCss({theme, flat, stickOnHover, disabled, colorStyle, transparent, fillable, borderless}),
        button.css,
        ...toArray(css)
    ]

    return (
        <div ref={ref} css={rootCss}>
            <label css={finalCss}>
                <Ripple color={colorStyles[colorStyle].ripple}/>
                <span>{label}</span>
                <input onChange={onChange} multiple={multiple} type="file" ref={inputRef} css={inputCss} {...props} />
            </label>
        </div>
    )
});

FileInput.displayName = "FileInput";