import React, { Children, cloneElement } from 'react'
import { jsx } from '@emotion/react'

import {
    tabsCss, dynTabsCss, stretchTabsCss,
    tabCss, dynSelectedTabCss,
    dynTabCss, stretchTabCss
} from './style'
import { tabPropMetadata, tabsPropMetadata } from './propMetadata'

import Ripple from '../Ripple'
import { toArray, createUi } from '../utils'
import { useTheme } from '../theme'


export default createUi(tabsPropMetadata, function Tabs({
    tabElementType, colorStyle, stretchTabs, onTabClick,
    tab, css, fillSelectedTab, children, ...props
}, ref) {

    const theme = useTheme()

    return (
        <div ref={ref} {...props} css={[tabsCss, dynTabsCss({ theme }), stretchTabs ? stretchTabsCss : undefined, ...toArray(css)]}>
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
})


export const Tab = createUi(tabPropMetadata, function Tab({ css, id, tabElementType, fillSelectedTab, colorStyle, selected, children, ...props }, ref) {

    const theme = useTheme()

    return jsx(
        tabElementType,
        {
            css: [
                tabCss,
                dynTabCss({ theme, colorStyle }),
                selected ? dynSelectedTabCss({ theme, fillSelectedTab, selected, colorStyle }) : undefined,
                ...(css instanceof Array ? css : [css])
            ],
            ref: ref,
            ...props
        },
        <><Ripple color={theme.colorStyles[colorStyle].ripple} />{children}</>
    )
})



