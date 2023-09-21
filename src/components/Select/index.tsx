import React, {forwardRef, MutableRefObject, useLayoutEffect, useMemo, useRef} from 'react'
import {useTheme} from '../../theme'
import {Ripple} from '../Ripple'
import {
    containerCss,
    displayedSelectOptionsCss,
    dynOptionCss,
    dynOptionsCss,
    dynSelectCss,
    selectCloseAreaCss
} from './style'
import {defGetContent, defGetSelectable, defGetValue} from "../List/defaults";
import type {SelectProps} from "./SelectProps";
import type {FCR} from "../types";

const nativeSelectStyle = {display: 'none'}

export const Select: FCR<SelectProps, HTMLDivElement> = forwardRef<HTMLDivElement, SelectProps>(({
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
                                                                                                     borderless = false,
                                                                                                     flat = false,
                                                                                                     fullWidth = false,
                                                                                                     width,
                                                                                                     valueIsIndex,
                                                                                                     BeforeContentComponent,
                                                                                                     AfterContentComponent,
                                                                                                     ContentWrapper = ({children}) => <>{children}</>,
                                                                                                     ...props
                                                                                                 }: SelectProps, ref) => {

    const theme = useTheme();

    const item = useMemo(() => items.find((item, index) => valueIsIndex ? index === value : getValue(item, valueProp, index) === value), [items, valueProp, value]);

    const selectRef = useRef() as MutableRefObject<HTMLDivElement>;
    const listRef = useRef() as MutableRefObject<HTMLDivElement>;

    useLayoutEffect(() => {

        if (!width) {
            selectRef.current.style.width = 'unset';
            listRef.current.style.width = 'unset';
        } else {
            const listStyle = window.getComputedStyle(listRef.current);
            const listPaddingLeft = Number.parseFloat(listStyle.paddingLeft);

            selectRef.current.style.width = width//`calc(${width} - ${listPaddingLeft}px - ${borderless ? '0px' : '2px'})`;
            listRef.current.style.width = width //`calc(${width} - ${listPaddingLeft * 2}px - ${borderless ? '0px' : '2px'})`;
        }

    }, [width, borderless])

    useLayoutEffect(() => {

        if (width) return;

        selectRef.current.style.width = 'unset';
        listRef.current.style.width = 'unset';

        if (fullWidth) {
            const listStyle = window.getComputedStyle(listRef.current);
            const selectStyle = window.getComputedStyle(selectRef.current);

            //const listPaddingLeft = Number.parseFloat(listStyle.paddingLeft);
            let listWidth = Number.parseFloat(listStyle.width)// + listPaddingLeft;
            let selectWidth = Number.parseFloat(selectStyle.width);

            if (listWidth > selectWidth) {
                selectRef.current.style.width = `${listWidth}px`;
            } else {
                listRef.current.style.width = selectWidth + "px"//(selectWidth - listPaddingLeft) + "px";
            }
        }

    }, [items, fullWidth, theme, width]);

    useLayoutEffect(() => {

        if (typeof size === 'number' && size > 0 && listRef.current.children.length > 0) {
            const itemHeight = listRef.current.children[0].clientHeight
            listRef.current.style.maxHeight = `calc(${itemHeight}px * ${size} + 16px)`
        }

    }, [items, size]);

    return (
        <>
            {enableOutsideArea && open && <div onClick={onOutsideClick} ref={ref}
                                               css={[selectCloseAreaCss]}/>}
            <div ref={ref} {...props} css={[containerCss]}>
                <div
                    ref={selectRef}
                    onClick={onClick}
                    style={selectStyle}
                    css={[dynSelectCss({theme, borderless, flat, disabled})]}
                >
                    <Ripple color='rgba(0,0,0,0.2)'/>
                    <span data-placeholder={placeholder ? true : undefined}>
                        {item ? getContent(item, contentProp) : placeholder}
                    </span>
                    <i style={{userSelect: 'none', width: "24px"}} className="material-icons">arrow_drop_down</i>
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
                                <div  key={curValue} style={{display: "flex", alignItems: "center"}}>
                                    {BeforeContentComponent && <BeforeContentComponent item={item}/>}
                                    <div

                                        css={dynOptionCss({theme})}
                                        onClick={onChange && getSelectable(item, selectableProp, index) ?
                                            (e) => onChange(curValue, item, e) : undefined
                                        }
                                    >
                                        <ContentWrapper item={item}>
                                            {getContent(item, contentProp)}
                                        </ContentWrapper>
                                    </div>
                                    {AfterContentComponent && <AfterContentComponent item={item}/>}
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