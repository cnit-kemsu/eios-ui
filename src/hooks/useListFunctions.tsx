import {GetContent, GetValue, IsSelectable} from "../types";
import {ReactElement, useMemo} from "react";
import {getValueFromIndex} from "../utils";

export type ListItemType = { [p: string]: string | ReactElement };

export function useListFunctions<C>(contentProp: string | GetContent<C>,
                                    valueProp: string | GetValue<C>,
                                    selectableProp: string | IsSelectable<C>,
                                    valueIsIndex: boolean) {
    return useMemo(() => ({
        getContent: (typeof contentProp === 'string' ? (item: ListItemType) => item[contentProp] : contentProp) as GetContent<C>,
        getValue: (valueIsIndex ? getValueFromIndex : (typeof valueProp === 'string' ? (item: ListItemType) => item[valueProp] : valueProp)) as GetValue<C>,
        isSelectable: (typeof selectableProp === 'string' ? (item: ListItemType) => item[selectableProp] : selectableProp) as IsSelectable<C>
    }), [contentProp, valueProp, selectableProp]);
}