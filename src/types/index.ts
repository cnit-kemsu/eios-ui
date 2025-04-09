import { ComponentPropsWithRef, CSSProperties, ElementType, ForwardedRef, JSX, ReactElement, ReactNode } from "react"

export type ColorStyle = 'light' | 'dark' | 'primary' | 'secondary';

export type PolymorphicRef<C extends ElementType> = ComponentPropsWithRef<C>["ref"];


export type ValueType = string | number;

export type GetContent<C> = ((item: C, index: number) => string | number | JSX.Element | null);

export type GetValue<C> = ((item: C, index: number) => string | number);
export type IsSelectable<C> = ((item: C, index: number) => boolean);

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

export type BaseListProps<C> = {
        /** использовать индекс элемента в качестве значения */
        valueIsIndex?: boolean;
        /** элементы, на основе которых формируется список */
        items?: C[];
        /** событие нажатия по элементу списка
         * @param value - значение элемента
         * @param item - данные элемента
         * @param index - номер элемента в массиве
         */
        onChange?: (value: string | number, item: C, index: number) => void;
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
        valueProp?: string | GetValue<C>;
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
        contentProp?: string | GetContent<C>;
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
        selectableProp?: string | IsSelectable<C>;
        /** стиль контейнера элемента */
        itemContainerStyle?: CSSProperties;
        /** css-класс контейнера элемента */
        itemContainerClassName?: string;
    }
    & StyleProps
    & NameProp
    & ValueProp
    & BorderlessProp
    & ColorStyleProp
    & DisabledProp;