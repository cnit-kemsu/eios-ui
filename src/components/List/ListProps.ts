import {BaseListProps} from "../../types";
import {ComponentPropsWithRef} from "react";

export type ListProps<C> = BaseListProps<C> & {
    ref?: ComponentPropsWithRef<'ul'>['ref']
}




