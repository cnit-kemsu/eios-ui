import React, {Children, cloneElement, CSSProperties, ForwardedRef, forwardRef} from 'react'
import {dynTabsCss, stretchTabsCss, tabsCss} from './style'
import {useTheme} from '../../theme'
import {TabsProps} from "./TabsProps";

export type {TabsProps};

export type TabsComponent = ((props: TabsProps, ref?: ForwardedRef<HTMLDivElement>) => (React.ReactElement | null))
    & { displayName?: string };

/** Вкладки. В качестве дочерних элементов принимает [Tab](..?path=/docs/компоненты-tab--docs) */
export const Tabs = forwardRef<HTMLDivElement, TabsProps>(({
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

                    if (!child || child === true) return null;

                    const selected = tab === child.props.id || tab === index;

                    const childStyle: CSSProperties = {flex: '1 1 0', ...child.props.style};

                    return cloneElement(child, {
                        ...child.props,
                        style: childStyle,
                        colorStyle: child.props.colorStyle ?? colorStyle,
                        selected,
                        fillSelectedTab,
                        onClick: onTabClick ? () => {
                            onTabClick(child.props.id || index);
                        } : undefined
                    });
                })
            }
        </div>
    );
}) as TabsComponent;

Tabs.displayName = "Tabs";