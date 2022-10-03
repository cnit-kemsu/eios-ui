import React, {useState} from "react";
import {FileInput} from '../components/FileInput';
import {FileInputProps} from "../components/FileInput/FileInputProps";
import {ComponentMeta} from "@storybook/react";
import {argTypes} from "./argTypes";

export const Default = (props: FileInputProps) => <FileInput {...props}/>
Default.storyName = "FileInput";
Default.args = {
    label: "Выберите файл(ы)",
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => e.target.files && alert(Array.from(e.target.files).map(file => file.name).join(", "))
}

export const Example = () => {

    const [files, setFiles] = useState<FileList | null>();

    return (
        <>
            <FileInput label="Выберите файл(ы)" multiple onChange={e => setFiles(e.target.files)}/>
            <div>
                {files && files.length > 0 && (
                    Array.from(files).map(file => <div>{file.name}</div>)
                )}
            </div>
        </>
    )
}

Example.args = {
    label: "Выберите файл"
};

Example.storyName = "Пример использования";

export default {
    title: "Компоненты/FileInput",
    component: FileInput,
    argTypes: {
        label: argTypes.label,
        disabled: argTypes.disabled,
        colorStyle: argTypes.colorStyle,
        css: argTypes.css,
        stickOnHover: {description: "появится эффект \"прилипания\" при наведении на кнопку"},
        fillable: {description: "кнопка будет заливаться цветом (в соответствии с выбранным стилем) при наведении на неё"},
        flat: {description: "кнопка будет плоской (без тени)"},
        borderless: {description: "границы не будут выводиться"},
        transparent: {description: "фон кнопки будет прозрачным"},
        inputRef: {description: "ref, который будет передан `input`"},
        multiple: {description: "свойство `input`"},
        onChange: {description: "свойство `input`", control: {type: null}}
    },
    parameters: {
        docs: {
            description: {
                component: `Обёртка вокруг \`input[type='file']\`. `
            }
        }
    }
} as ComponentMeta<typeof FileInput>

