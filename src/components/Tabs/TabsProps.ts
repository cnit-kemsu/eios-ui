import {ComponentPropsWithRef, ReactElement} from "react";
import {ColorStyleProp, StyleProps} from "../types";
import {TabProps} from "./TabProps";

export type TabsProps = {
        /** растягивает вкладки, выравнивая их по ширине */
        stretchTabs?: boolean;
        /** вызвается при нажатии на вкладку */
        onTabClick?: (id: string | number) => void;
        /** id выделяемой вкладки */
        tab?: string | number;
        /** заполняет вкладку цветом в соответствии с `colorStyle`, когда она выделена */
        fillSelectedTab?: boolean;
        children?: ReactElement<TabProps> | ReactElement<TabProps>[];
        ref?: ComponentPropsWithRef<'div'>['ref'];
    }
    & ColorStyleProp
    & StyleProps;