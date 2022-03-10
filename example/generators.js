import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'

import {
    Checkbox, useCheckbox,
    TextField, useTextField,
    Select, useSelect, Tooltip

} from '../src/index'

import {
    colorStyleType, stringOrNumberType,
    listItemsType, typeOfMessageType, typeOfTextFieldType,
    colorStyleVariants, positionType, typeOfTextFieldVariants,
    positionVariants, typeOfMessageVariants
} from '../src/prop-types'

const propTypes = propTypes => [...propTypes, ...propTypes.map(propType => propType.isRequired)]

const InputRow = ({ children }) => <div css={{
    margin: '8px', display: "inline-flex", alignItems: "center",
    justifyContent: 'center'
}}>{children}</div>

const Label = ({ children }) => <div style={{ marginRight: '8px' }}>{children}</div>


export default [

    {
        groupName: 'bool props',
        propTypes: propTypes([PropTypes.bool]),

        Generator(propName, initValue, info) {

            let cb = null

            this.createView = () => () => <Tooltip text={info}><Checkbox {...cb}>{propName}</Checkbox></Tooltip>

            this.getValue = () => {
                cb = useCheckbox(initValue)
                return cb.checked
            }
        }
    },

    {
        groupName: 'function props',
        propTypes: propTypes([PropTypes.func]),

        Generator(propName, initValue) {

            let cb = null

            this.createView = () => () => <Checkbox {...cb}>{propName}</Checkbox>

            this.getValue = () => {
                cb = useCheckbox(true)
                return cb.checked ? initValue : undefined
            }
        }
    },

    {
        groupName: 'string props',
        propTypes: propTypes([PropTypes.string]),

        Generator(propName, initValue) {

            let ti = null

            this.createView = () => () => <InputRow><Label style={{ marginRight: '8px' }}>{propName}:</Label><TextField placeholder='type value' {...ti} /></InputRow>

            this.getValue = () => {
                ti = useTextField(initValue)
                return ti.value
            }


        }
    },

    {
        groupName: 'number props',
        propTypes: propTypes([PropTypes.number]),

        Generator(propName, initValue) {

            let ti = null

            this.createView = () => () => <InputRow> <Label>{propName}:</Label> <TextField type="number" placeholder='type value' {...ti} /></InputRow>

            this.getValue = () => {
                ti = useTextField(initValue)
                return +ti.value
            }


        }
    },

    {
        groupName: 'string/number props',
        propTypes: propTypes([stringOrNumberType]),

        Generator(propName, initValue) {

            let ti = null

            this.createView = () => () => <InputRow><Label>{propName}:</Label><TextField placeholder='type value' {...ti} /></InputRow>

            this.getValue = () => {
                ti = useTextField(initValue)
                return ti.value === '' ? undefined : isNaN(+ti.value) ? ti.value : +ti.value
            }


        }
    },

    {
        groupName: 'object props',
        propTypes: propTypes([PropTypes.object]),

        Generator(propName, initValue) {

            let ti = null

            this.createView = () => () => <div><Label> {propName}: </Label> <br /> <textarea style={{ width: '200px', height: '100px' }} {...ti} /></div>

            this.getValue = () => {

                ti = useTextField(JSON.stringify(initValue, null, '\t'))
                let value
                try { value = JSON.parse(ti.value) } catch { }

                return value
            }

        }
    },

    {
        groupName: 'list items props',
        propTypes: propTypes([listItemsType]),

        Generator(propName, initValue) {

            let ti = null

            this.createView = () => () => <div><Label> {propName}: </Label> <br /> <textarea style={{ width: '200px', height: '100px' }} {...ti} /></div>

            this.getValue = () => {

                ti = useTextField(JSON.stringify(initValue, null, '\t'))
                let value
                try { value = JSON.parse(ti.value) } catch{ }

                return value
            }
        }
    },

    {
        groupName: 'colorStyle prop',
        propTypes: propTypes([colorStyleType]),

        Generator(propName, initValue) {

            let sel
            const items = colorStyleVariants

            this.createView = () => () => (
                <Select valueFromContent borderless items={items} {...sel} />
            )

            this.getValue = () => {
                [sel] = useSelect(initValue)
                return sel.value
            }
        }
    },

    {
        groupName: 'textField type prop',
        propTypes: propTypes([typeOfTextFieldType]),

        Generator(propName, initValue) {

            let sel
            const items = typeOfTextFieldVariants

            this.createView = () => () => (
                <Select valueFromContent borderless items={items} {...sel} />
            )

            this.getValue = () => {
                [sel] = useSelect(initValue)
                return sel.value
            }
        }
    },

    {
        groupName: 'position prop',
        propTypes: propTypes([positionType]),

        Generator(propName, initValue) {

            let sel
            const items = positionVariants

            this.createView = () => () => (
                <Select valueFromContent borderless items={items} {...sel} />
            )

            this.getValue = () => {
                [sel] = useSelect(initValue)
                return sel.value
            }
        }
    },

    {
        groupName: 'message type prop',
        propTypes: propTypes([typeOfMessageType]),

        Generator(propName, initValue) {

            let sel
            const items = typeOfMessageVariants.map(item => ({ value: item, content: item }))

            this.createView = () => () => (
                <Select borderless items={items} {...sel} />
            )

            this.getValue = () => {
                [sel] = useSelect(initValue)
                return sel.value
            }
        }
    }
]