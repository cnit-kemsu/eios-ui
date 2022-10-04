import {List} from "../components/List";
import {ComponentMeta} from "@storybook/react";
import {createStoryTemplate} from "./createStoryTemplate";
import {argTypes} from "./argTypes";

export default {
    title: "Компоненты/List",
    component: List,
    argTypes: {
        disabled: argTypes.disabled,
        colorStyle: argTypes.colorStyle,
        css: argTypes.css,
        flat: argTypes.flat,
        borderless: argTypes.borderless,
        valueIsIndex: {description: "в качестве `value` используется номер элемента в `items`"},
        contentProp: {description: "имя свойства, которое содержит отображаемый контент элемента"},
        valueProp: {description: "имя свойства, которое содержит value элемента"},
        selectableProp: {description: "имя свойства, которое определяет, можно ли выбрать элемент"},
        items: {description: "элементы списка"},
        getContent: {description: "функция, которая выполняется для каждого элемента `items` и должна вернуть отображаемый контент элемента. Функция по умолчанию использует `contentProp`"},
        getValue: {description: "функция, которая выполняется для каждого элемента `items` и должна вернуть `value` элемента. Функция по умолчанию использует `valueProp`"},
        getSelectable: {description: "функция, которая выполняется для каждого элемента `items` и должна вернуть true для выбираемых элементов. Функция по умолчанию использует `selectableProp`"}
    }
} as ComponentMeta<typeof List>

const Template = createStoryTemplate(List);

export const Default = Template.createStory({
    items: ["Элемент 1", "Элемент 2", "Элемент 3"],
    value: 0,
    valueIsIndex: true
}, "List");

Default.argTypes = {
    onChange: {action: 'clicked', description: "событие клика по кнопке"}
}