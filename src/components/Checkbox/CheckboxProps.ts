import PropTypes from 'prop-types'

import { colorStyleTypeNL } from '../../prop-types'
import {ComponentPropsWithoutRef, HTMLAttributes, ReactNode} from "react";
import {ColorStyle, Css} from "../types";

export type CheckboxProps = {
    children?: ReactNode,
    name?: string,
    colorStyle?: ColorStyle,
    disabled?: boolean,
    checked?: boolean,
    onClick?: () => void,
    css?: Css,
    value?: string | number
} & Omit<ComponentPropsWithoutRef<'div'>, 'onClick'>