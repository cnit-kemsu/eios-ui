import React, {ForwardedRef, forwardRef, ReactElement} from 'react'
import {useTheme} from '../../theme'
import {dynItemCss, dynRootCss, dynSelectedItemCss, itemCss, rootCss} from './style'
import type {ListProps} from "./ListProps";
import {Ripple} from "../Ripple";
import {useListFunctions} from "../../hooks/useListFunctions";
import {getTrue} from "../../utils";

export type ListComponent = ((props: ListProps, ref?: ForwardedRef<HTMLUListElement>) => (ReactElement | null))
    & { displayName?: string };

/**
 * Обертка вокруг `<select>`.
 */
export const List: ListComponent = forwardRef<HTMLUListElement, ListProps>(({
                                                                                name,
                                                                                items = [],
                                                                                borderless = false,
                                                                                flat = false,
                                                                                colorStyle = "primary",
                                                                                valueIsIndex = false,
                                                                                valueProp = "value",
                                                                                contentProp = "content",
                                                                                selectableProp = getTrue,
                                                                                value,
                                                                                disabled = false,
                                                                                onChange,
                                                                                style,
                                                                                className,
                                                                                itemContainerStyle,
                                                                                itemContainerClassName
                                                                            }: ListProps, ref) => {

    const theme = useTheme();

    const {getContent, getValue, isSelectable} = useListFunctions(contentProp, valueProp, selectableProp, valueIsIndex);

    return (
        <>
            <ul ref={ref} style={style} className={className}
                css={[rootCss, dynRootCss({disabled, borderless, theme, flat})]}>
                {
                    items.map((item, index) => {

                        const curValue = getValue(item, index);

                        return <li
                            key={curValue}
                            onClick={
                                onChange && isSelectable(item, index)
                                    ? () => onChange(curValue, item, index)
                                    : undefined
                            }
                            css={[
                                itemCss,
                                dynItemCss({theme, colorStyle}),
                                (curValue === value) && dynSelectedItemCss({theme, colorStyle})
                            ]}
                            className={itemContainerClassName}
                            style={itemContainerStyle}
                        >
                            <Ripple color={theme.colorStyles[colorStyle].ripple}/>
                            {getContent(item, index)}
                        </li>
                    })
                }
            </ul>
            <select disabled value={value} style={{display: 'none'}}>
                {
                    items.map((item, index) => {
                        const curValue = getValue(item, index);
                        return <option key={curValue} value={curValue}/>
                    })
                }
            </select>
        </>
    )
});

List.displayName = "List";