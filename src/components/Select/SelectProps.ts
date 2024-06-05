import React, {ComponentPropsWithRef, FC, PropsWithChildren} from "react";
import {BaseListProps} from "../../types";

type BaseSelectProps<C> = Omit<BaseListProps<C>, 'colorStyle'>;

export type SelectProps<C> = {
        /** открыть выпадающий список */
        open?: boolean;
        /** выводить скрытую область позади меню, растянутую на всю страницу.
         * Используется для определения нажатия за пределами выпадающего списка.
         */
        enableOutsideArea?: boolean;
        /** событие нажатия по списку */
        onClick?: React.MouseEventHandler;
        onOutsideClick?: React.MouseEventHandler;
        /** стиль, передаваемый div`у кнопки выпадающего списка   */
        selectStyle?: React.CSSProperties;
        /** кол-во выводимых элементов */
        size?: number;
        /** стиль, передаваемый div`у контейнеру элементов списка */
        itemsContainerStyle?: React.CSSProperties;
        /** стиль, передаваемый div`у, представляющий элемент списка */
        itemStyle?: React.CSSProperties;
        /** стиль, передаваемый div`у, содержащий контент элемента списка */
        contentStyle?: React.CSSProperties;
        /** текст, который выводится если не выбран элемент */
        placeholder?: string;
        /** растягивать кнопку по ширине выпадающего списка */
        fullWidth?: boolean;
        /** ширина кнопки и списка */
        width?: string;
        /** компонент, выводимый перед каждым элементом */
        BeforeContentComponent?: FC<{ item: C }>;
        /** компонент, выводимый после каждого элемента */
        AfterContentComponent?: FC<{ item: C }>;
        /** компонент, в который будет обернут каждый элемент */
        ContentWrapper?: FC<PropsWithChildren<{ item: C }>>;
    }
    & BaseSelectProps<C>
    & { ref?: ComponentPropsWithRef<'div'>['ref'] };