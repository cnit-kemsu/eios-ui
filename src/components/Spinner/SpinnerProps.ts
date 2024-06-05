import {ColorStyleProp, StyleProps} from "../../types";
import {ComponentPropsWithRef} from "react";

type BaseSpinnerProps = {
        /** масштабирование спиннера */
        scale?: number;
    }
    & ColorStyleProp
    & StyleProps

export type SpinnerProps =
    BaseSpinnerProps
    & Omit<ComponentPropsWithRef<'svg'>, keyof BaseSpinnerProps>;