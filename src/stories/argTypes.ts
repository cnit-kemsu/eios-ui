export const argTypes = {
    elementType: {
        control: {type: null},
        description: "оборачиваемый элемент"
    },
    css: {
        control: {type: null},
        description: "стиль созданный с помощью утилиты `css` из `@emotion/react`"
    },
    colorStyle: {description: "цветовой стиль"},
    disabled: {description: "элемент будет отключен для взаимодействия"},
    label: {description: "подпись"},
    stickOnHover: {description: "появится эффект \"прилипания\" при наведении на кнопку"},
    fillable: {description: "кнопка будет заливаться цветом (в соответствии с выбранным стилем) при наведении на неё"},
    flat: {description: "кнопка будет плоской (без тени)"},
    borderless: {description: "границы не будут выводиться"},
    transparent: {description: "фон кнопки будет прозрачным"},
    style: {description: "стиль, который применится к корневому элементу", control: {type: null}},
    className: {description: "имя css-класса, который применится к корневому элементу", control: {type: null}}
};