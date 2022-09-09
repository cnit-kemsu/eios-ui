import React from 'react'

import { rootCss, dynRootCss } from './style'
import propMetadata from './propMetadata'

import { useTheme } from '../../theme'
import { toArray, createUIComponent } from '../../utils'


export default createUIComponent(propMetadata, function InputField({ colorStyle, borderless, flat, filled, value, css, multiline, type, fileInputLabel, ...props }, ref) {

    const theme = useTheme()

    const elCss = [rootCss, dynRootCss({ theme, filled, flat, borderless, colorStyle }), ...toArray(css)]
    const v = !value && value !== 0 && value !== "" ? "" : value


    if (type === 'file') {
        return (
            <>
                <label css={elCss}>
                    <span>{fileInputLabel}</span>
                    <input type="file" ref={ref} value={v} style={{ opacity: 0, position: 'absolute', left: "0px", top: "0px" }} {...props} />
                </label>
            </>
        )
    }

    const finalProps = {
        ref, type,
        value: v,
        css: elCss, ...props
    }

    return multiline ? (<textarea {...finalProps} />) : (<input {...finalProps} />)
})

