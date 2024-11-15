import React, {useCallback, useState} from "react";
import {useDropzone} from 'react-dropzone'
import {X} from "lucide-react";
import {getAllValidFilesOrError, getFile} from "../functions/file.js";

export const FileDrop = ({onFastaData}) => {
    const [error, setError] = useState("");
    const searchByUploadedFiles = useCallback(
        // must be fasta or text cannot mix
        async (files) => {
            const fileInfos = [];
            for(const file of files) {
                const f = await getFile(file);
                fileInfos.push(f);
            }
            getAllValidFilesOrError(fileInfos).fold(
                error => {
                    console.error("some error bro: " + JSON.stringify(error));
                },
                fileInfo => console.log("all valid: " + JSON.stringify(fileInfo))
            )

        },
        [onFastaData]
    );

    const [fileList, setFileList] = useState([]);

    const handleIncrementalDrop = (acceptedFiles) => {
        setFileList((prevFiles) => {
            const newFiles = acceptedFiles.filter(
                (newFile) => !prevFiles.some((prevFile) => prevFile.name === newFile.name)
            );
            return [...prevFiles, ...newFiles];
        });
    };

    const {getRootProps, getInputProps} = useDropzone({
        onDrop: handleIncrementalDrop,
        multiple: true, // multiple files upload
    });


    return (
        <>
            <label htmlFor="large-input" className="block mb-2 mt-6 text-lg font-medium text-gray-900 dark:text-white">
                Search By FASTA Files
            </label>
            <div className="flex justify-between gap-x-4">
                <div
                    {...getRootProps({
                        className: 'text-lg border-2 border-dashed p-4 text-center cursor-pointer flex-1',
                    })}>
                    <input {...getInputProps()} />
                    <p>Drag and drop FASTA files here or click to upload.</p>
                </div>

                <button
                    type="button"
                    className={`${fileList.length < 4 ? 'bg-gray-300 text-gray-800' : 'bg-blue-600 text-white hover:bg-blue-900'} 
                        "py-3 px-6 text-base rounded-lg cursor-pointer border-none shadow-md transition-colors duration-200"`}
                    disabled={fileList.length < 4}
                    onClick={() => searchByUploadedFiles(fileList)}>
                    Show
                </button>
            </div>

            <div className="mt-4">
                {fileList.map((file, index) => (
                    <div key={index} className="text-lg flex justify-between">
                        <span>
                          {file.name} - {file.size} bytes
                        </span>
                        <X size={20}
                           style={{cursor: 'pointer', color: '#a0aec0'}}
                           onClick={() => setFileList((prev) => prev.filter((_, i) => i !== index))}/>
                    </div>
                ))}
            </div>
        </>
    )
};