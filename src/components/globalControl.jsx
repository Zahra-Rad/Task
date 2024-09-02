import React from 'react'
import { BsFileEarmarkPlus } from "react-icons/bs";
import { HiOutlineFolderPlus } from "react-icons/hi2";
import useData from "./../data";



export default function GlobalControl() {
    const { data, updateData } = useData((state) => ({
        data: state.data,
        updateData: state.updateData
    }));

    const addFile = () => {
        const newData = [...data]
        newData.push({ type: 'file', name: prompt('Choose a name for your file...') })
        updateData(newData)
    }

    const addFolder = () => {
        const newData = [...data]
        newData.push({ type: 'folder', name: prompt('Choose a name for your folder...'), children: [] })
        updateData(newData)
    }

    return (
        <div className='flex justify-between items-center mb-3 py-2 px-4 border-b border-b-gray-700 text-gray-200'>
            <span className='text-sm font-light'>(Add Globally)</span>
            <ul className='flex items-center'>
                <li className='mx-1 cursor-pointer flex items-center rounded-full p-1 w-6 h-6 transition hover:bg-gray-700'>
                    <span
                        onClick={addFile}>
                        <BsFileEarmarkPlus />
                    </span>
                </li>
                <li className='mx-1 cursor-pointer text-lg flex items-center rounded-full p-1 w-6 h-6 transition hover:bg-gray-700'>
                    <span
                        onClick={addFolder}>
                        <HiOutlineFolderPlus />
                    </span>
                </li>
            </ul>
        </div >
    )
}
