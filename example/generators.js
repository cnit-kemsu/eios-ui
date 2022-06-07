import React from 'react'
import PropTypes from 'prop-types'

import {
    Checkbox, useCheckbox,
    InputField, useInputField,
    Select, useSelect, Tooltip

} from '../src/index'

import {
    colorStyleType, stringOrNumberType,
    listItemsType, typeOfMessageType, typeOfInputFieldType,
    colorStyleVariants, positionType, typeOfInputFieldVariants,
    positionVariants, typeOfMessageVariants, colorStyleTypeNL, colorStyleVariantsNL
} from '../src/prop-types'

const propTypes = propTypes => [...propTypes, ...propTypes.map(propType => propType.isRequired)]


export default [

    {
        groupName: 'bool',
        propTypes: propTypes([PropTypes.bool]),

        Generator(propName, initValue, info) {

            let cb = null

            this.createView = () => () => <Checkbox {...cb}></Checkbox>

            this.getValue = () => {
                [cb] = useCheckbox(initValue)
                return cb.checked
            }
        }
    },

    {
        groupName: 'function',
        propTypes: propTypes([PropTypes.func]),

        Generator(propName, initValue, info) {

            /*let cb = null

            this.createView = () => () => <Checkbox {...cb}></Checkbox>

            this.getValue = () => {
                [cb] = useCheckbox(true)
                return cb.checked ? initValue : undefined
            }*/

            let tf = null

            this.createView = () => () => {
                return <></>
            }

            this.getValue = () => {
                return initValue
            }
        }
    },

    {
        groupName: 'string',
        propTypes: propTypes([PropTypes.string]),

        Generator(propName, initValue, info) {

            let ti = null

            this.createView = () => () => <InputField flat placeholder='введите значение' {...ti} />

            this.getValue = () => {
                [ti] = useInputField(initValue)
                return ti.value
            }


        }
    },

    {
        groupName: 'number',
        propTypes: propTypes([PropTypes.number]),

        Generator(propName, initValue, info) {

            let ti = null

            if(typeof initValue === 'undefined' || initValue == null) initValue = ""

            this.createView = () => () =>   <InputField flat type="number" placeholder='введите значение' {...ti} />

            this.getValue = () => {
                [ti] = useInputField(initValue)
                return +ti.value
            }


        }
    },

    {
        groupName: 'string/number',
        propTypes: propTypes([stringOrNumberType]),

        Generator(propName, initValue, info) {

            let ti = null

            this.createView = () => () => <InputField flat placeholder='введите значение' {...ti} />

            this.getValue = () => {
                [ti] = useInputField(initValue)
                return ti.value === '' ? undefined : isNaN(+ti.value) ? ti.value : +ti.value
            }
        }
    },

    {
        groupName: 'object',
        propTypes: propTypes([PropTypes.object]),

        Generator(propName, initValue, info) {

            let ti = null

            this.createView = () => () => <div> <br /> <textarea style={{ width: '200px', height: '100px' }} {...ti} /></div>

            this.getValue = () => {

                [ti] = useInputField(JSON.stringify(initValue, null, '\t'))
                let value
                try { value = JSON.parse(ti.value) } catch { }

                return value
            }

        }
    },

    {
        groupName: 'listItemsType',
        propTypes: propTypes([listItemsType]),

        Generator(propName, initValue, info) {

            let ti = null

            this.createView = () => () => <div style={{ display: "inline-block" }}><br /><textarea style={{ width: '200px', height: '100px' }} {...ti} /></div>

            this.getValue = () => {

                [ti] = useInputField(JSON.stringify(initValue, null, '\t'))
                let value
                try { value = JSON.parse(ti.value) } catch { }

                return value
            }
        }
    },

    {
        groupName: 'colorStyleType',
        propTypes: propTypes([colorStyleType]),

        Generator(propName, initValue, info) {

            let sel
            const items = colorStyleVariants

            this.createView = () => () => (
                <Select flat items={items} {...sel} />
            )

            this.getValue = () => {
                [sel] = useSelect(initValue)
                return sel.value
            }
        }
    },

    {
        groupName: 'colorStyleTypeNL',
        propTypes: propTypes([colorStyleTypeNL]),

        Generator(propName, initValue, info) {

            let sel
            const items = colorStyleVariantsNL

            this.createView = () => () => (
                <Select flat items={items} {...sel} />
            )

            this.getValue = () => {
                [sel] = useSelect(initValue)
                return sel.value
            }
        }
    },

    {
        groupName: 'typeOfInputFieldType',
        propTypes: propTypes([typeOfInputFieldType]),

        Generator(propName, initValue, info) {

            let sel
            const items = typeOfInputFieldVariants

            this.createView = () => () => (
                <Select flat items={items} {...sel} />
            )

            this.getValue = () => {
                [sel] = useSelect(initValue)
                return sel.value
            }
        }
    },

    {
        groupName: 'positionType',
        propTypes: propTypes([positionType]),

        Generator(propName, initValue, info) {

            let sel
            const items = positionVariants

            this.createView = () => () => (
                <Select flat items={items} {...sel} />
            )

            this.getValue = () => {
                [sel] = useSelect(initValue)
                return sel.value
            }
        }
    },

    {
        groupName: 'typeOfMessageType',
        propTypes: propTypes([typeOfMessageType]),

        Generator(propName, initValue, info) {

            let sel
            const items = typeOfMessageVariants.map(item => ({ value: item, content: item }))

            this.createView = () => () => (
                <Select flat items={items} {...sel} />
            )

            this.getValue = () => {
                [sel] = useSelect(initValue)
                return sel.value
            }
        }
    }
]