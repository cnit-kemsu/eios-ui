import React, {ComponentPropsWithRef} from "react";
import {ChildrenProp, ColorStyleProp, StyleProps} from "../types";

export type TabProps = {
        /** id вкладки, которое используется в [Tabs](..?path=/docs/компоненты-tabs--docs) в качестве значение свойства `tab` */
        id?: string | number;
        /** выделяет вкладку */
        selected?: boolean;
        /** заполняет вкладку цветом в соответствии с `colorStyle`, когда она выделена */
        fillSelectedTab?: boolean;
        /** вызывается при нажатии на вкладку */
        onClick?: () => void;
        ref?: ComponentPropsWithRef<'div'>['ref'];
    }
    & ColorStyleProp
    & StyleProps
    & ChildrenProp;