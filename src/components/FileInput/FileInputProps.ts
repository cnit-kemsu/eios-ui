import { ComponentPropsWithRef } from "react"
import {
    BorderlessProp,
    ColorStyleProp,
    DisabledProp,
    FillableProp,
    LabelProp,
    StyleProps,
    TransparentProp
} from "../../types"

export type FileInputProps =
    LabelProp
    & ColorStyleProp
    & TransparentProp
    & FillableProp
    & BorderlessProp
    & DisabledProp
    & StyleProps
    & {
    /** включить возможность выбора множества файлов */
    multiple?: boolean;
    /** событие, которое срабатывает после выбора файлов */
    onChange?: (files: FileList | null) => void;
    /** какие типы файлов будут приниматься */
    accept?: string;
    ref?: ComponentPropsWithRef<'div'>['ref']
}