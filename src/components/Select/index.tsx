import React, {forwardRef, MutableRefObject, useLayoutEffect} from 'react'
import {useTheme} from '../../theme'
import {toArray} from '../../utils'
import {Ripple} from '../Ripple'
import {
    displayedSelectOptionsCss,
    containerCss,
    dynOptionCss,
    dynOptionsCss,
    selectCloseAreaCss,
    dynSelectCss
} from './style'
import {defGetContent, defGetSelectable, defGetValue} from "../List/defaults";
import {SelectProps} from "./SelectProps";

const nativeSelectStyle = {display: 'none'}

export const Select : React.FC<SelectProps> = forwardRef<HTMLDivElement, SelectProps>(({
                                                                   name,
                                                                   open = false,
                                                                   enableOutsideArea,
                                                                   onClick,
                                                                   onOutsideClick,
                                                                   selectStyle,
                                                                   onChange,
                                                                   valueProp = 'value',
                                                                   contentProp = 'content',
                                                                   selectableProp = 'selectable',
                                                                   getContent = defGetContent,
                                                                   getValue = defGetValue,
                                                                   getSelectable = defGetSelectable,
                                                                   disabled = false,
                                                                   items = [],
                                                                   value,
                                                                   size,
                                                                   itemStyle,
                                                                   placeholder,
                                                                   css,
                                                                   borderless = false,
                                                                   flat = false,
                                                                   fullWidth = false,
                                                                   valueIsIndex,
                                                                   ...props
                                                               }: SelectProps, ref) => {

    const theme = useTheme();

    const item = React.useMemo(() => items.find((item, index) => valueIsIndex ? index === value : getValue(item, valueProp, index) === value), [items, valueProp, value]);

    const selectRef = React.useRef() as MutableRefObject<HTMLDivElement>;
    const listRef = React.useRef() as MutableRefObject<HTMLDivElement>;

    useLayoutEffect(() => {

        if (fullWidth) {
            const listStyle = window.getComputedStyle(listRef.current)
            selectRef.current.style.width = `calc(${listStyle.width} + ${theme.select.height} - ${listStyle.paddingLeft})`
        }

    }, [fullWidth, theme])

    useLayoutEffect(() => {

        if (typeof size === 'number' && size > 0 && listRef.current.children.length > 0) {
            const itemHeight = listRef.current.children[0].clientHeight
            listRef.current.style.maxHeight = `calc(${itemHeight}px * ${size})`
        }

    }, [items, size]);

    return (
        <>
            {enableOutsideArea && open && <div onClick={onOutsideClick} ref={ref}
                                               css={[selectCloseAreaCss]}/>}
            <div ref={ref} {...props} css={[containerCss, ...toArray(css)]}>
                <div
                    ref={selectRef}
                    onClick={onClick}
                    style={selectStyle}
                    css={[dynSelectCss({theme, borderless, flat, disabled, open})]}
                >
                    <Ripple color='rgba(0,0,0,0.2)'/>
                    <span>{item ? getContent(item, contentProp) : placeholder} </span>
                    <i style={{userSelect: 'none'}} className="material-icons">arrow_drop_down</i>
                </div>

                <div
                    ref={listRef}
                    style={itemStyle}
                    css={[dynOptionsCss({theme, borderless, flat}), open && displayedSelectOptionsCss]}
                >
                    {
                        items.map((item, index) => {

                            const curValue = valueIsIndex ? index : getValue(item, valueProp, index)

                            return (
                                <div
                                    key={curValue}
                                    css={dynOptionCss({theme})}
                                    onClick={onChange && getSelectable(item, selectableProp, index) ?
                                        (e) => onChange(curValue, item, e) : undefined
                                    }
                                >
                                    {getContent(item, contentProp)}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <select
                disabled
                name={name}
                value={value}
                style={nativeSelectStyle}
            >
                {
                    items.map((item, index) => {
                        const curValue = valueIsIndex ? index : getValue(item, valueProp, index)
                        return (<option key={curValue}
                                        value={curValue}
                        />)
                    })
                }
            </select>
        </>
    )
});

Select.displayName = "Select";