import {SerializedStyles} from "@emotion/react";

export type ColorStyle = 'light' | 'dark' | 'primary' | 'secondary';

export type Css =
    SerializedStyles
    | ((...args: any) => SerializedStyles)
    | [SerializedStyles | ((...args: any) => SerializedStyles)];