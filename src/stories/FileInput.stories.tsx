import React, {useState} from "react";
import {FileInput} from '../components/FileInput';
import {FileInputProps} from "../components/FileInput/FileInputProps";
import {Meta, StoryObj} from "@storybook/react";

export default {
    title: "Компоненты/FileInput",
    component: FileInput,
} as Meta<typeof FileInput>

type Story = StoryObj<typeof FileInput>;

export const Default: Story = {
    name: "FileInput",
    render: (props: FileInputProps) => <FileInput {...props}/>,
    args: {
        label: "Выберите файл(ы)",
        onChange: (files) => files && alert(Array.from(files).map(file => file.name).join(", "))
    }
}

export const Example: Story = {
    name: "Пример использования",
    render: () => {

        const [files, setFiles] = useState<FileList | null>();
        return (
            <>
                <FileInput label="Выберите файл(ы)" multiple onChange={e => setFiles(files)}/>
                <div>
                    {files && files.length > 0 && (
                        Array.from(files).map(file => <div>{file.name}</div>)
                    )}
                </div>
            </>
        )

    },
    args: {
        label: "Выберите файл"
    }
}