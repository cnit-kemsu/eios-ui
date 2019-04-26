import React from 'react'
import PropTypes from 'prop-types'

import { useTheme } from '../theme'
import Ripple from '../Ripple'
import { colorStyleType, addPropMetadataTo } from '../prop-types'

import { rootCss, dynRootCss, dynIconCss } from './style'

import { toArray } from '../utils'

export default function Checkbox({ name, css, colorStyle, disabled, checked, onClick, children, value, ...props }) {

    const theme = useTheme()
    const { colorStyles, checkbox } = theme

    return (
        <div {...props} onClick={onClick} css={[rootCss, dynRootCss({ disabled }), checkbox.css, ...toArray(css)]}>
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
}

addPropMetadataTo(Checkbox, {
    children: { type: PropTypes.node },
    name: {
        type: PropTypes.string,
        info: 'form element name'
    },
    colorStyle: {
        type: colorStyleType,
        def: 'secondary'
    },
    disabled: { type: PropTypes.bool },
    checked: { type: PropTypes.bool, def: false },
    onClick: { type: PropTypes.func }
})