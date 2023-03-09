import React, {Children, cloneElement, ForwardedRef, forwardRef} from 'react'
import {dynSelectedTabCss, dynTabCss, dynTabsCss, stretchTabCss, stretchTabsCss, tabCss, tabsCss} from './style'
import {Ripple} from '../Ripple'
import {Css} from "../types";
import {toArray} from '../../utils'
import {useTheme} from '../../theme'
import {TabProps, TabsProps} from "./TabsProps";

type TabsComponent =
    (<C extends React.ElementType = 'div'>(props: TabsProps, ref?: ForwardedRef<HTMLDivElement>) => (React.ReactElement | null))
    & { displayName?: string };

export const Tabs: TabsComponent = forwardRef<HTMLDivElement, TabsProps>(({
                                                                              colorStyle = 'secondary',
                                                                              stretchTabs,
                                                                              onTabClick,
                                                                              tab,
                                                                              css,
                                                                              fillSelectedTab,
                                                                              children,
                                                                              ...props
                                                                          }: TabsProps, ref) => {


    const theme = useTheme();

    return (
        <div ref={ref} {...props}
             css={[tabsCss, dynTabsCss({theme}), stretchTabs ? stretchTabsCss : undefined, ...toArray(css)]}>
            {
                Children.map(children, (child, index) => {

                    if (!child) return null;

                    const selected = tab === child.props.id || tab === index;
                    let childCss = (child.props.css ? toArray(child.props.css) : [] as Css[]);

                    return cloneElement(child, {
                        ...child.props,
                        colorStyle: child.props.colorStyle ?? colorStyle,
                        selected,
                        fillSelectedTab,
                        onClick: onTabClick ? () => {
                            onTabClick(child.props.id || index);
                        } : undefined,
                        css: [stretchTabs ? stretchTabCss : undefined, ...childCss]
                    });
                })
            }
        </div>
    );
});

Tabs.displayName = "Tabs";

type TabComponent =
    ((props: TabProps, ref?: ForwardedRef<HTMLElement>) => (React.ReactElement | null))
    & { displayName?: string };

export const Tab: TabComponent = forwardRef<HTMLElement, TabProps>(({
                                                                        css,
                                                                        id,
                                                                        elementType,
                                                                        fillSelectedTab = false,
                                                                        colorStyle = 'secondary',
                                                                        selected,
                                                                        children,
                                                                        onClick,
                                                                        ...props
                                                                    }: TabProps, ref) => {

    const theme = useTheme();

    const Component: React.ElementType = elementType ?? 'div';

    return (
        <Component onClick={onClick} ref={ref} css={[
            tabCss,
            dynTabCss({theme, colorStyle}),
            selected ? dynSelectedTabCss({theme, fillSelectedTab, colorStyle}) : undefined,
            ...(css instanceof Array ? css : [css])
        ]} {...props}>
            <><Ripple color={theme.colorStyles[colorStyle].ripple}/>{children}</>
        </Component>
    );
});

Tab.displayName = "Tab";



