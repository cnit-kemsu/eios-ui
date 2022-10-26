import React, {ReactElement} from "react";
import {ColorStyle, Css} from "../types";

export type TabProps= {
    id?: string | number;
    colorStyle?: ColorStyle;
    elementType?: React.ElementType;
    css?: Css;
    selected?: boolean;
    fillSelectedTab?: boolean;
    onClick?: () => void;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
};

export type TabsProps = {
    colorStyle?: ColorStyle;
    stretchTabs?: boolean;
    onTabClick?: (id: string | number) => void;
    tab?: string | number;
    css?: Css;
    fillSelectedTab?: boolean;
    children?: ReactElement<TabProps> | ReactElement<TabProps>[];
    style?: React.CSSProperties;
    className?: string;
};