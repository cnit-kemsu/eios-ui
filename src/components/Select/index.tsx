import {ForwardedRef, forwardRef, MutableRefObject, ReactElement, useLayoutEffect, useMemo, useRef} from 'react'
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
import type {SelectProps} from "./SelectProps";
import {getTrue} from "../../utils";
import {useListFunctions} from "../../hooks/useListFunctions";

const nativeSelectStyle = {display: 'none'};

export type {SelectProps};

export type SelectComponent =
    (<C>(props: SelectProps<C>, ref?: ForwardedRef<HTMLUListElement>) => (ReactElement | null))
    & { displayName?: string };

/** Выпадающий список. */
export const Select = forwardRef(function Select<C>({
                                                        name,
                                                        open = false,
                                                        enableOutsideArea,
                                                        onClick,
                                                        onOutsideClick,
                                                        selectStyle,
                                                        onChange,
                                                        valueProp = 'value',
                                                        contentProp = 'content',
                                                        selectableProp = getTrue,
                                                        disabled = false,
                                                        items = [],
                                                        value,
                                                        size,
                                                        itemsContainerStyle,
                                                        itemStyle,
                                                        contentStyle,
                                                        placeholder,
                                                        borderless = false,
                                                        flat = false,
                                                        fullWidth = false,
                                                        width,
                                                        valueIsIndex = false,
                                                        BeforeContentComponent,
                                                        AfterContentComponent,
                                                        ContentWrapper = ({children}) => <>{children}</>,
                                                        style,
                                                        className
                                                    }: SelectProps<C>, ref?: ForwardedRef<HTMLDivElement>) {

    const theme = useTheme();

    const {
        getContent,
        getValue,
        isSelectable
    } = useListFunctions<C>(contentProp, valueProp, selectableProp, valueIsIndex);

    const itemIndex = useMemo(() => items?.findIndex((item, index) => getValue(item, index) === value), [items, getValue, value]);
    const item = itemIndex > -1 ? items[itemIndex] : null;

    const selectRef = useRef() as MutableRefObject<HTMLDivElement>;
    const listRef = useRef() as MutableRefObject<HTMLDivElement>;

    useLayoutEffect(() => {

        if (!width) {
            selectRef.current.style.width = 'unset';
            listRef.current.style.width = 'unset';
        } else {
            selectRef.current.style.width = width;
            listRef.current.style.width = width;
        }

    }, [width, borderless])

    useLayoutEffect(() => {

        if (width) return;

        selectRef.current.style.width = 'unset';
        listRef.current.style.width = 'unset';

        if (fullWidth) {
            const listStyle = window.getComputedStyle(listRef.current);
            const selectStyle = window.getComputedStyle(selectRef.current);

            const listWidth = Number.parseFloat(listStyle.width);
            const selectWidth = Number.parseFloat(selectStyle.width);

            if (listWidth > selectWidth) {
                selectRef.current.style.width = `${listWidth}px`;
            } else {
                listRef.current.style.width = selectWidth + "px";
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
            <div ref={ref} style={style} className={className} css={[containerCss]}>
                <div
                    ref={selectRef}
                    onClick={onClick}
                    style={selectStyle}
                    css={[dynSelectCss({theme, borderless, flat, disabled})]}
                >
                    <Ripple color='rgba(0,0,0,0.2)'/>
                    <span data-placeholder={placeholder ? true : undefined}>
                        {item ? getContent(item, itemIndex) : placeholder}
                    </span>
                    <i style={{userSelect: 'none', width: "24px"}} className="material-icons">arrow_drop_down</i>
                </div>

                <div
                    style={itemsContainerStyle}
                    ref={listRef}
                    css={[dynOptionsCss({theme, borderless, flat}), open && displayedSelectOptionsCss]}
                >
                    {
                        items.map((item, index) => {

                            const curValue = getValue(item, index);

                            return (
                                <div key={curValue} style={{display: "flex", alignItems: "center", ...itemStyle}}>
                                    {BeforeContentComponent && <BeforeContentComponent open={open} item={item}/>}
                                    <ContentWrapper open={open} item={item}>
                                        <div
                                            style={contentStyle}
                                            css={dynOptionCss({theme})}
                                            onClick={onChange && isSelectable(item, index) ?
                                                () => onChange(curValue, item, index) : undefined
                                            }
                                        >

                                            {getContent(item, index)}

                                        </div>
                                    </ContentWrapper>
                                    {AfterContentComponent && <AfterContentComponent open={open} item={item}/>}
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
                        const curValue = valueIsIndex ? index : getValue(item, index)
                        return (<option key={curValue}
                                        value={curValue}
                        />)
                    })
                }
            </select>
        </>
    )
}) as SelectComponent;

Select.displayName = "Select";