import React from "react";
import {ChildrenProp, StyleProps} from "../types";

export type MenuItemProps = {
        onClick?: React.MouseEventHandler;
    }
    & StyleProps
    & ChildrenProp;