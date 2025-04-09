import {ColorStyleProp, StyleProps} from "../../types";
import {ComponentPropsWithRef} from "react";

type BaseSpinnerProps = {
        /** толщина спиннера */
        spinnerStrokeWidth?: number;
    }
    & ColorStyleProp
    & StyleProps

export type SpinnerProps =
    BaseSpinnerProps
    & Omit<ComponentPropsWithRef<'svg'>, keyof BaseSpinnerProps>;