import React, { Children, cloneElement } from 'react'
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'

import { addPropMetadataTo, colorStyleType, stringOrNumberType } from '../prop-types'
import { useTheme } from '../theme'

import {
    tabsCss, dynTabsCss, stretchTabsCss,
    tabCss, dynSelectedTabCss,
    dynTabCss, stretchTabCss
} from './style'

import Ripple from '../Ripple'

import { toArray } from '../utils'


export default function Tabs({
    tabElementType, colorStyle, stretchTabs, onTabClick,
    tab, css, fillSelectedTab, children, ...props
}) {

    const theme = useTheme()

    return (
        <div {...props} css={[tabsCss, dynTabsCss({ theme }), stretchTabs ? stretchTabsCss : undefined, ...toArray(css)]}>
            {
                Children.map(children, (child, index) => {

                    const selected = tab === child.props.id || tab === index
                    let childCss = child.props.css || []

                    if (!(childCss instanceof Array)) childCss = [childCss]

                    return cloneElement(child, {
                        ...child.props,
                        tabElementType,
                        colorStyle,
                        selected,
                        fillSelectedTab,
                        onClick: onTabClick ? () => onTabClick(child.props.id || index) : undefined,
                        css: [stretchTabs ? stretchTabCss : undefined, ...childCss]
                    })
                })
            }
        </div>
    )
}

export function Tab({ css, id, tabElementType, fillSelectedTab, colorStyle, selected, children, ...props }) {

    const theme = useTheme()

    return jsx(tabElementType, {
        css: [
            tabCss,
            dynTabCss({ theme, colorStyle }),
            selected ? dynSelectedTabCss({ theme, fillSelectedTab, selected, colorStyle }) : undefined,
            ...(css instanceof Array ? css : [css])
        ],
        ...props
    }, <><Ripple color={theme.colorStyles[colorStyle].ripple} />{children}</>)
}

const tabElementType = {
    type: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
    def: 'div'
}

addPropMetadataTo(Tabs, {
    onTabClick: { type: PropTypes.func },
    tabElementType,
    colorStyle: {
        type: colorStyleType,
        def: 'secondary'
    },
    stretchTabs: { type: PropTypes.bool },
    tab: { type: stringOrNumberType },
    fillSelectedTab: { type: PropTypes.bool }

})

addPropMetadataTo(Tab, {
    tabElementType,
    colorStyle: {
        type: colorStyleType,
        def: 'secondary'
    },
    id: { type: stringOrNumberType },
    selected: { type: PropTypes.bool },
    fillSelectedTab: { type: PropTypes.bool }
})