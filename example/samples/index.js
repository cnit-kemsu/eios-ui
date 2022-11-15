// components
import button from './button'
import checkbox from './checkbox'
import list from './list'
import select from './select'
import message from './message'
import ripple from './ripple'
import table from './table'
import textField from './inputField'
import pane from './pane'
import tabs from './tabs'
import tooltip from './tooltip'

// hooks
import useInputField from './useInputField'
import useTabs from './useTabs'
import useList from './useList'
import useSelect from './useSelect'
import useCheckbox from './useCheckbox'
import useModal from './useModal'
import useMenuButton from './useMenuButton'

export default [
    '-- Компоненты --',
    ...button,
    ...checkbox,
    ...list,
    ...select,
    ...message,
    ...ripple,    
    ...table,
    ...textField,
    ...pane,
    ...tabs,    
    ...tooltip,
    '-- Хуки --',
    ...useInputField,
    ...useTabs,
    ...useList,
    ...useSelect,
    ...useCheckbox,
    ...useModal,
    ...useMenuButton
]