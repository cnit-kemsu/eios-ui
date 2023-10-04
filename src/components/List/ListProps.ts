import {BaseListProps} from "../types";
import {ComponentPropsWithRef} from "react";

export type ListProps = BaseListProps & {
    ref?: ComponentPropsWithRef<'ul'>['ref']
}




