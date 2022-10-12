import {isPrimitive} from "../../utils";

export const defGetValue = (item, valueProp, itemIndex) => isPrimitive(item) ? item : item[valueProp];
export const defGetContent = (item, contentProp) => isPrimitive(item) ? item : item[contentProp];
export const defGetSelectable = (item, selectableProp, itemIndex) => item[selectableProp] || typeof item[selectableProp] === 'undefined';