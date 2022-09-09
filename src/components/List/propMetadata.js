import React from 'react'
import PropTypes from 'prop-types'

import {
    colorStyleType,
    stringOrNumberType,
    listItemsType
} from '../../prop-types'
import { isPrimitive } from '../../utils'

export default {    
    name: {
        type: PropTypes.string,
        info: 'form element name'
    },
    colorStyle: {
        type: colorStyleType,
        def: 'primary'
    },
    valueIsIndex: {
        type: PropTypes.bool,
        def: false,
        info: "использовать индекс элемента в качестве value"
    },
    value: { type: stringOrNumberType },
    disabled: { type: PropTypes.bool },
    borderless: { type: PropTypes.bool, def: false },
    flat: { type: PropTypes.bool },
    items: { type: listItemsType, def: [], info: "элементы списка" },
    onChange: { type: PropTypes.func, info: `Функция вида "(value, item, event) => ...". Вызывается при нажатии на элемент списка` },
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