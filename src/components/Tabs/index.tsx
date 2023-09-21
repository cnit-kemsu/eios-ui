import React, {Children, cloneElement, CSSProperties, ForwardedRef, forwardRef} from 'react'
import {dynSelectedTabCss, dynTabCss, dynTabsCss, stretchTabsCss, tabCss, tabsCss} from './style'
import {Ripple} from '../Ripple'
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
                                                                              fillSelectedTab,
                                                                              children,
                                                                              ...props
                                                                          }: TabsProps, ref) => {


    const theme = useTheme();

    return (
        <div ref={ref} {...props}
             css={[tabsCss, dynTabsCss({theme}), stretchTabs ? stretchTabsCss : undefined]}>
            {
                Children.map(children, (child, index) => {

                    if (!child) return null;

                    const selected = tab === child.props.id || tab === index;

                    const childStyle : CSSProperties = child.props.style ?? {};
                    childStyle.flex = '1 1 0';
                    //childStyle.display = 'block';

                    return cloneElement(child, {
                        ...child.props,
                        style: childStyle,
                        colorStyle: child.props.colorStyle ?? colorStyle,
                        selected,
                        fillSelectedTab,
                        onClick: onTabClick ? () => {
                            onTabClick(child.props.id || index);
                        } : undefined,
                        //css: stretchTabs ? stretchTabCss : undefined
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
            //...(css instanceof Array ? css : [css])
        ]} {...props}>
            <><Ripple color={theme.colorStyles[colorStyle].ripple}/>{children}</>
        </Component>
    );
});

Tab.displayName = "Tab";



