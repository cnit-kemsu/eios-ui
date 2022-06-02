import React from 'react'
import PropTypes from 'prop-types'

import { listItemsType, stringOrNumberType } from '../prop-types'
import { isPrimitive } from '../utils'

export default {
    placeholder: { type: PropTypes.string, def: "" },
    size: { type: PropTypes.number },
    borderless: { type: PropTypes.bool, def: false },
    flat: { type: PropTypes.bool },
    open: { type: PropTypes.bool },
    name: { type: PropTypes.string },
    value: { type: stringOrNumberType },
    disabled: { type: PropTypes.bool },
    fullWidth: { type: PropTypes.bool, info: "ширина элемента выравнивается по ширине выпадающего списка" },
    items: { type: listItemsType, def: [], info: "элементы списка" },
    onChange: { type: PropTypes.func, info: `Функция вида "(value, item, event) => ...". Вызывается при нажатии на элемент списка` },
    onClick: { type: PropTypes.func, info: `Функция вида "(event) => ...". Вызывается при нажатии на выпадающий список` },
    valueIsIndex: {
        type: PropTypes.bool,
        def: false,
        info: "использовать индекс элемента в качестве value",
    },
    valueProp: {
        type: PropTypes.string, def: "value", info: "имя свойства, которое содержит value элемента"
    },
    contentProp: {
        type: PropTypes.string, def: "content", info: "имя свойства, которое содержит отображаемый контент элемента"
    },
    selectableProp: {
        type: PropTypes.string, def: "selectable", info: "имя свойства, которое определяет, можно ли выбрать элемент"
    },
    getValue: {
        type: PropTypes.func,
        def: (item, valueProp, itemIndex) => isPrimitive(item) ? item : item[valueProp],
        info: `Функция вида "(item, valueProp, itemIndex) => ...", которая должна вернуть value на основе переданного в неё элемента из items.`
    },
    getContent: {
        type: PropTypes.func,
        def: (item, contentProp, itemIndex) => isPrimitive(item) ? item : item[contentProp],
        info: `Функция вида "(item, contentProp, itemIndex) => ...", которая должна вернуть отображаемый контент, на основе переданного элемента из items.`
    },
    getSelectable: {
        type: PropTypes.func,
        def: (item, selectableProp, itemIndex) => item[selectableProp] || typeof item[selectableProp] === 'undefined',
        info: `Функция вида "(item, selectableProp, itemIndex) => ...", которая должна вернуть true, если элемент из items можно выбрать.`
    },
}