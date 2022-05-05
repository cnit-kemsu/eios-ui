import { createContext, useContext } from 'react'
import tc from 'tinycolor2'

const darkenValue = 10
const lightenValue = 8


export const defaultTheme = {
    borderColor: '#abb7c7',
    transitionDuration: '0.1s',
    disabledOpacity: '0.5',
    disableRipple: false,
    boxShadow: 'box-shadow: 0 1px 6px rgba(0,0,0,0.4)',
    colorStyles: {
        dark: {
            origin: '#575d6d',
            dark: tc('#575d6d').darken(darkenValue).toString(),
            light: tc('#575d6d').lighten(lightenValue).toString(),
            hover: tc('#575d6d').lighten(lightenValue).toString(),
            textHover: 'white',
            text: 'white',
            ripple: tc('#575d6d').darken(darkenValue * 3).setAlpha(0.3).toString(),
            shadow: tc('#575d6d').setAlpha(0.4).toString()
        },

        light: {
            origin: '#d2dce6',
            dark: tc('#d2dce6').darken(darkenValue).toString(),
            light: tc('#d2dce6').lighten(lightenValue).toString(),
            hover: tc('#d2dce6').lighten(lightenValue).toString(),
            textHover: tc('#575d6d').lighten(lightenValue).toString(),
            text: '#575d6d',
            ripple: tc('#d2dce6').darken(darkenValue * 3).setAlpha(0.3).toString(),
            shadow: tc('#d2dce6').setAlpha(0.4).toString()
        },

        primary: {
            origin: '#2858a9',
            dark: tc('#2858a9').darken(darkenValue).toString(),
            light: tc('#2858a9').lighten(lightenValue).toString(),
            hover: tc('#2858a9').lighten(lightenValue).toString(),
            textHover: tc('white').darken(lightenValue).toString(),
            text: 'white',
            ripple: tc('#2858a9').lighten(lightenValue * 3).setAlpha(0.3).toString(),
            shadow: tc('#2858a9').setAlpha(0.4).toString()
        },
        secondary: {
            origin: '#dc1654',
            dark: tc('#dc1654').darken(darkenValue).toString(),
            light: tc('#dc1654').lighten(lightenValue).toString(),
            hover: tc('#dc1654').lighten(lightenValue).toString(),
            textHover: tc('white').darken(lightenValue).toString(),
            text: 'white',
            ripple: tc('#dc1654').lighten(lightenValue * 3).setAlpha(0.3).toString(),
            shadow: tc('#dc1654').setAlpha(0.4).toString()
        }
    },
    button: {
        css: {
            borderRadius: '20px',
            padding: '8px 16px',
            position: 'relative',
            overflow: 'hidden'
        },
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
        selectedItemBgColorStart: tc('#f2f7fd').darken(darkenValue).toString(),
        selectedItemBgColor: '#f2f7fd'
    },
    message: {
        style: {
            padding: '12px',
            margin: '12px 0px',
            borderRadius: '6px'
        },
        bg: {
            info: tc('#d2dce6').setAlpha(0.5).toString(),
            warning: tc('#ffe581').setAlpha(0.5).toString(),
            error: tc('#dc1654').lighten(lightenValue * 3).setAlpha(0.5).toString(),
            success: tc('#a0e86a').setAlpha(0.5).toString()
        },
        color: {
            info: '#575d6d',
            warning: '#61562f',
            error: tc('#dc1654').darken(darkenValue * 2).toString(),
            success: '#44652b'
        }
    },
    modal: {
        padding: '12px'
    },
    tabs: {
        borderWidth: '4px',
        tabPadding: '8px',
        tabContentPadding: '8px',
    },
    select: {
        selectedOptionBg: '#e8f0fb',
        borderColor: '#abb7c7',
        height: "32px"
    },
    table: {
        borderColor: "#abb7c7", //'#b8bec5',
        headerColBg: '#d2dce6',
        bodyColBg: 'white',
        footerColBg: 'white',
        hoverColor: '#ececf5'
    },
    textField: {
        height: "32px"
    },
    pane: {
        titleBg: '#d2dce6',
        padding: '12px',
        borderColor: "#abb7c7", //'#e6e6e6'
    },
    tooltip: {
        bg: '#575d6d',
        color: 'white'
    },
    menu: {
        padding: '6px'
    }
    
}

/** Контекст для задания темы */
const ThemeContext = createContext(defaultTheme)

export const ThemeProvider = ThemeContext.Provider

export function useTheme() {
    return useContext(ThemeContext)
}



