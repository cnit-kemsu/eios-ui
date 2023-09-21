import React, {ComponentPropsWithRef, ReactElement} from "react";
import {ColorStyle, Css} from "../types";

type TabPropsBase = {
    id?: string | number;
    colorStyle?: ColorStyle;
    elementType?: React.ElementType;
    selected?: boolean;
    fillSelectedTab?: boolean;
    onClick?: () => void;
    children?: React.ReactNode;
};

export type TabProps = TabPropsBase & Omit<ComponentPropsWithRef<"div">, keyof TabPropsBase>;

type TabsPropsBase = {
    colorStyle?: ColorStyle;
    stretchTabs?: boolean;
    onTabClick?: (id: string | number) => void;
    tab?: string | number;
    fillSelectedTab?: boolean;
    children?: ReactElement<TabProps> | ReactElement<TabProps>[];
};

export type TabsProps = TabsPropsBase & Omit<ComponentPropsWithRef<"div">, keyof TabsPropsBase>;