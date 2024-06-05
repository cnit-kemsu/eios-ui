import {ComponentPropsWithRef, ReactElement} from "react";
import {ColorStyleProp, StyleProps} from "../../types";
import {TabProps} from "./TabProps";

export type TabsProps = {
        /** растягивает вкладки, выравнивая их по ширине */
        stretchTabs?: boolean;
        /** вызвается при нажатии на вкладку */
        onTabClick?: (id: string | number) => void;
        /** id выделяемой вкладки */
        tab?: string | number | undefined;
        /** заполняет вкладку цветом в соответствии с `colorStyle`, когда она выделена */
        fillSelectedTab?: boolean;
        children?: ReactElement<TabProps> | boolean | null | undefined | (ReactElement<TabProps> | boolean | null | undefined)[];
        ref?: ComponentPropsWithRef<'div'>['ref'];
    }
    & ColorStyleProp
    & StyleProps;