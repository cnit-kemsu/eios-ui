import type {Meta, StoryObj} from '@storybook/react';
import {FileInput} from '../components/FileInput';
import {FileInputProps} from "../components/FileInput/FileInputProps.ts";
import {useState} from "react";

const meta = {
    title: 'FileInput',
    component: FileInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof FileInput>;

export default meta;
type Story = StoryObj<typeof meta>;

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
                <FileInput label="Выберите файл(ы)" multiple onChange={() => setFiles(files)}/>
                <div>
                    {files && files.length > 0 && (
                        Array.from(files).map(file => <div>{file.name}</div>)
                    )}
                </div>
            </>
        )

    }
}

