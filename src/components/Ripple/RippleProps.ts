import React from "react";
import {StyleProps} from "../types";

export type RippleProps = {
        /** цвет эффекта ряби */
        color?: string;
        /** длительность эффекта ряби */
        duration?: string;
        /** стиль, передаваемый div`у, представляющего рябь */
        rippleStyle?: React.CSSProperties;
        /** css-классы, передаваемые div`у, представляющего рябь */
        rippleClassName?: string;
    }
    & StyleProps;