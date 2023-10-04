import {GetContent, GetValue, IsSelectable} from "../components/types";
import {useMemo} from "react";
import {getValueFromIndex} from "../utils";

export function useListFunctions(contentProp: string | GetContent,
                                 valueProp: string | GetValue,
                                 selectableProp: string | IsSelectable,
                                 valueIsIndex: boolean) {
    return useMemo(() => ({
        getContent: (typeof contentProp === 'string' ? item => item[contentProp] : contentProp) as GetContent,
        getValue: (valueIsIndex ? getValueFromIndex : (typeof valueProp === 'string' ? item => item[valueProp] : valueProp)) as GetValue,
        isSelectable: (typeof selectableProp === 'string' ? item => item[selectableProp] : selectableProp) as IsSelectable
    }), [contentProp, valueProp, selectableProp]);
}