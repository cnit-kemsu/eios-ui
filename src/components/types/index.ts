import {SerializedStyles} from "@emotion/react";
import React, {ComponentProps, CSSProperties, ForwardedRef, ReactElement, ReactNode} from "react";
import {InputFieldProps} from "../InputField/InputFieldProps";

export type ColorStyle = 'light' | 'dark' | 'primary' | 'secondary';

export type Css = SerializedStyles | (SerializedStyles | null | undefined)[];

export type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>["ref"];

export type Point = { x: number, y: number };

export type ValueType = string | number;
export type ItemType = string | number | { [key: string]: any };

export type GetContent = ((item: any, index: number) => string | number | JSX.Element | null);

export type GetValue = ((item: any, index: number) => string | number);
export type IsSelectable = ((item: any, index: number) => boolean);

export type FCR<P, R> = ((props: P, ref?: ForwardedRef<R>) => (ReactElement | null))
    & { displayName?: string }

export type DisabledProp = {
    /** элемент будет недоступен для взаимодействия */
    disabled?: boolean;
}

export type FlatProp = {
    /** элемент будет плоским (без эффекта тени) */
    flat?: boolean;
}

export type StickOnHoverProp = {
    /** появится эффект "прилипания" при наведении на кнопку */
    stickOnHover?: boolean;
}

export type ColorStyleProp = {
    /** цветовой стиль */
    colorStyle?: ColorStyle;
}

export type TransparentProp = {
    /** фон кнопки будет прозрачным */
    transparent?: boolean;
}

export type FillableProp = {
    /** кнопка будет заливаться цветом (в соответствии с `colorStyle`) при наведении на неё */
    fillable?: boolean;
}

export type BorderlessProp = {
    /** границы не будут выводиться */
    borderless?: boolean;
}

export type LabelProp = {
    /** подпись */
    label?: string;
}

export type NameProp = {
    /** имя элемента формы */
    name?: string,
}

export type ValueProp = {
    /** значение элемента формы */
    value?: string | number
}

export type StyleProps = {
    /** стиль, передаваемый корневому элементу */
    style?: CSSProperties;
    /** css-классы, передаваемые корневому элементу */
    className?: string;
}

export type ChildrenProp = {
    children?: ReactNode;
}

export type BaseListProps = {
        /** использовать индекс элемента в качестве значения */
        valueIsIndex?: boolean;
        /** элементы, на основе которых формируется список */
        items?: any[];
        /** событие нажатия по элементу списка
         * @param value - значение элемента
         * @param item - данные элемента
         * @param index - номер элемента в массиве
         */
        onChange?: (value: string | number, item: any, index: number) => void;
        /** имя свойства в элементе массива `items`, значение которого используется в `value`.
         * Также может быть функцией со следующими входными параметрами:<br/>
         * <table style="border-collapse: collapse;">
         *     <tbody>
         *         <tr>
         *             <td style="width: 3%; padding: 5px;">item</td>
         *             <td style="padding: 5px;">элемент массива <code>items</code></td>
         *         </tr>
         *         <tr>
         *             <td style="width: 3%; padding: 5px;">index</td>
         *             <td style="padding: 5px;">номер элемента в массиве <code>items</code></td>
         *         </tr>
         *     </tbody>
         *  </table>
          */
        valueProp?: string | GetValue;
        /** имя свойства в элементе массива `items`, значение которого представляет собой выводимый текст или React-элемент.
         * Также может быть функцией со следующими входными параметрами:<br/>
         * <table style="border-collapse: collapse;">
         *     <tbody>
         *         <tr>
         *             <td style="width: 3%; padding: 5px;">item</td>
         *             <td style="padding: 5px;">элемент массива <code>items</code></td>
         *         </tr>
         *         <tr>
         *             <td style="width: 3%; padding: 5px;">index</td>
         *             <td style="padding: 5px;">номер элемента в массиве <code>items</code></td>
         *         </tr>
         *     </tbody>
         *  </table>
         */
        contentProp?: string | GetContent;
        /** имя свойства в элементе массива `items`, значение которого определяет возможность выбора элемента.
         * Также может быть функцией со следующими входными параметрами:<br/>
         * <table style="border-collapse: collapse;">
         *     <tbody>
         *         <tr>
         *             <td style="width: 3%; padding: 5px;">item</td>
         *             <td style="padding: 5px;">элемент массива <code>items</code></td>
         *         </tr>
         *         <tr>
         *             <td style="width: 3%; padding: 5px;">index</td>
         *             <td style="padding: 5px;">номер элемента в массиве <code>items</code></td>
         *         </tr>
         *     </tbody>
         *  </table>
         */
        selectableProp?: string | IsSelectable;
        /** стиль контейнера элемента */
        itemContainerStyle?: CSSProperties;
        /** css-класс контейнера элемента */
        itemContainerClassName?: string;
        /** не выводить линии разделители между элементами */
        disableSeparators?: boolean;
    }
    & StyleProps
    & NameProp
    & ValueProp
    & BorderlessProp
    & FlatProp
    & ColorStyleProp
    & DisabledProp;