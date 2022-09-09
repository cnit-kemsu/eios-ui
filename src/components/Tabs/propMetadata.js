import PropTypes from 'prop-types'

import { colorStyleType, stringOrNumberType } from '../../prop-types'


const tabElementType = {
    type: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
    def: 'div'
}

export const tabsPropMetadata = {
    onTabClick: { type: PropTypes.func },
    tabElementType,
    colorStyle: {
        type: colorStyleType,
        def: 'secondary'
    },
    stretchTabs: { type: PropTypes.bool },
    tab: { type: stringOrNumberType },
    fillSelectedTab: { type: PropTypes.bool }

}

export const tabPropMetadata = {
    tabElementType,
    colorStyle: {
        type: colorStyleType,
        def: 'secondary'
    },
    id: { type: stringOrNumberType },
    selected: { type: PropTypes.bool },
    fillSelectedTab: { type: PropTypes.bool }
}