import {createContext, useContext} from 'react'
import tc from 'tinycolor2'

const darkenValue = 10
const lightenValue = 8

/**
 * Тема по умолчанию
 */
export const defaultTheme = {
    borderColor: 'rgb(220, 227, 236)',//'#abb7c7',
    transitionDuration: '0.1s',
    disabledOpacity: '0.5',
    disableRipple: false,
    boxShadow: 'box-shadow: 0 1px 6px rgba(0,0,0,0.4)',
    colorStyles: {
        dark: {
            origin: '#575d6d',
            dark: tc('#575d6d').darken(darkenValue).toString() as string,
            light: tc('#575d6d').lighten(lightenValue).toString() as string,
            hover: tc('#575d6d').lighten(lightenValue).toString() as string,
            textHover: 'white',
            text: 'white',
            ripple: tc('#575d6d').darken(darkenValue * 3).setAlpha(0.3).toString() as string,
            shadow: tc('#575d6d').setAlpha(0.4).toString() as string
        },

        light: {
            origin: '#d2dce6',
            dark: tc('#d2dce6').darken(darkenValue).toString() as string,
            light: tc('#d2dce6').lighten(lightenValue).toString() as string,
            hover: tc('#d2dce6').lighten(lightenValue).toString() as string,
            textHover: tc('#575d6d').lighten(lightenValue).toString() as string,
            text: '#575d6d',
            ripple: tc('#d2dce6').darken(darkenValue * 3).setAlpha(0.3).toString() as string,
            shadow: tc('#d2dce6').setAlpha(0.4).toString() as string
        },

        primary: {
            origin: '#2858a9',
            dark: tc('#2858a9').darken(darkenValue).toString() as string,
            light: tc('#2858a9').lighten(lightenValue).toString() as string,
            hover: tc('#2858a9').lighten(lightenValue).toString() as string,
            textHover: tc('white').darken(lightenValue).toString() as string,
            text: 'white',
            ripple: tc('#2858a9').lighten(lightenValue * 3).setAlpha(0.3).toString() as string,
            shadow: tc('#2858a9').setAlpha(0.4).toString() as string
        },
        secondary: {
            origin: '#dc1654',
            dark: tc('#dc1654').darken(darkenValue).toString() as string,
            light: tc('#dc1654').lighten(lightenValue).toString() as string,
            hover: tc('#dc1654').lighten(lightenValue).toString() as string,
            textHover: tc('white').darken(lightenValue).toString() as string,
            text: 'white',
            ripple: tc('#dc1654').lighten(lightenValue * 3).setAlpha(0.3).toString() as string,
            shadow: tc('#dc1654').setAlpha(0.4).toString() as string
        }
    },
    button: {
        css: {
            borderRadius: '20px',
            padding: '8px 16px',
            position: 'relative',
            overflow: 'hidden'
        },
        height: '1rem',
        shadow: '0 1px 6px',
        shadowOnHover: '0 2px 8px'
    },
    checkbox: {
        css: {
            padding: '0px'
        },
        uncheckedColor: '#abb7c7'
    },
    list: {
        selectedItemBgColorStart: tc('#f2f7fd').darken(darkenValue).toString() as string,
        selectedItemBgColor: '#f2f7fd'
    },
    message: {
        bg: {
            info: tc('#d2dce6').setAlpha(0.5).toString() as string,
            warning: tc('#ffe581').setAlpha(0.5).toString() as string,
            error: tc('#dc1654').lighten(lightenValue * 3).setAlpha(0.5).toString() as string,
            success: tc('#a0e86a').setAlpha(0.5).toString() as string
        },
        color: {
            info: '#575d6d',
            warning: '#61562f',
            error: tc('#dc1654').darken(darkenValue * 2).toString() as string,
            success: '#44652b'
        }
    },
    modal: {

    },
    tabs: {
        height: '1rem',
        borderWidth: '4px',
        tabPadding: '8px',
        tabContentPadding: '8px',
    },
    select: {
        selectedOptionBg: '#e8f0fb',
        borderColor: '#abb7c7',
        height: "1em",
        itemHeight: "1em"
    },
    table: {
        borderColor: "#abb7c7", //'#b8bec5',
        headerColBg: '#d2dce6',
        bodyColBg: 'white',
        footerColBg: 'white',
        hoverColor: '#ececf5'
    },
    inputField: {
        height: "1rem"
    },
    pane: {
        titleBg: '#d2dce6',
        borderColor: "#abb7c7", //'#e6e6e6'
    },
    tooltip: {
        bg: '#575d6d',
        color: 'white'
    },
    menu: {
        height: '1rem',
        padding: '8px',
        zIndex: 1000000
    }

}

export type Theme = typeof defaultTheme;

/**
 * Контекст для задания темы
 */
const ThemeContext = createContext(defaultTheme)

export const ThemeProvider = ThemeContext.Provider

/**
 * Хук для получения объекта, представляющего текущую тему
 */
export function useTheme() {
    return useContext(ThemeContext)
}



