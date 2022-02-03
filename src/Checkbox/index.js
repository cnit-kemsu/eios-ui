import React from 'react'

import { useTheme } from '../theme'
import Ripple from '../Ripple'

import { rootCss, dynRootCss, dynIconCss } from './style'
import propMetadata from './propMetadata'

import { toArray, createUIComponent } from '../utils'


export default createUIComponent(propMetadata, function Checkbox({ name, css, colorStyle, disabled, checked, onClick, children, value, ...props }, ref) {

    const theme = useTheme()
    const { colorStyles, checkbox } = theme

    return (
        <div ref={ref} {...props} onClick={onClick} css={[rootCss, dynRootCss({ disabled }), checkbox.css, ...toArray(css)]}>
            <div
                css={[
                    dynIconCss({ theme, disabled, checked, colorStyle }),
                    {
                        position: 'relative',
                        overflow: 'unset'
                    }
                ]}
            >
                <Ripple
                    style={{
                        width: '200%',
                        height: '200%',
                        left: '-50%',
                        top: '-50%',
                        borderRadius: '100%'
                    }}
                    color={colorStyles[colorStyle].ripple}
                />
                <i style={{ display: 'block' }} className='material-icons'>{checked ? "check_box" : "check_box_outline_blank"}</i>
            </div>
            <div>{children}</div>
            <input name={name} type='hidden' readOnly checked={checked} value={value} />
        </div>
    )
})