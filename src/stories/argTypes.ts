export const argTypes = {
    elementType: {
        control: {type: null},
        description: "оборачиваемый элемент"
    },

    css: {
        control: {type: null},
        description: "стиль созданный с помощью утилиты `css` из `@emotion/react`"
    },

    colorStyle: {
        description: "цветовой стиль"
    },

    disabled: {
        description: "элемент будет отключен для взаимодействия"
    }
};