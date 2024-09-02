import React, { useState, useEffect, useRef } from 'react'
import { FcFolder } from "react-icons/fc";
import { BsFillFileEarmarkTextFill, BsFileEarmarkPlus } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineModeEdit, MdDelete } from "react-icons/md";
import { HiOutlineFolderPlus } from "react-icons/hi2";

export default function List({ data }) {
    const [isOpen, setIsOpen] = useState(false)
    const [editing, setEditing] = useState(false)
    const [deleted, setDeleted] = useState(false)
    const [name, setName] = useState(data.name)
    const [children, setChildren] = useState(data.children && data.children)


    return (
        !deleted && <li key={data.name} className='flex flex-col justify-between items-start text-gray-200 pl-4 py-1 transition'>
            <div className='group flex justify-between items-center hover:bg-gray-800 transition w-[95%]'>
                <div className='flex items-center justify-between w-full'>
                    <div className='flex items-center'>
                        <span
                            className='cursor-pointer'
                            style={{ rotate: isOpen ? '90deg' : '0deg' }}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {data.type === 'folder' && <IoIosArrowForward />}
                        </span>
                        <span className='pl-1'>
                            {data.type === 'folder' ? <FcFolder /> : <BsFillFileEarmarkTextFill className='text-blue-300' />}
                        </span>
                        <div className='relative'>
                            <p className='text-sm pl-2'>{name}</p>
                            <form
                                onSubmit={(event) => {
                                    event.preventDefault();
                                    setEditing(!editing)
                                }}
                                style={{ display: editing ? 'block' : 'none' }}
                                className='absolute top-0 left-0 w-full ml-2'>
                                <input
                                    type="text"
                                    className='w-full rounded-lg bg-gray-900 border border-gray-700 text-xs px-1 py-1'
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                />
                            </form>
                        </div>
                    </div>
                    <div className='flex items-center opacity-0 group-hover:opacity-100 transition'>
                        <span
                            className='mx-[1px] w-6 h-6 rounded-full flex justify-center items-center cursor-pointer transition hover:bg-gray-700'
                            onClick={() => setEditing(!editing)}
                        >
                            <MdOutlineModeEdit />
                        </span>
                        <span
                            className='mx-[1px] w-6 h-6 rounded-full flex justify-center items-center cursor-pointer transition hover:bg-gray-700'
                            onClick={() => setDeleted(true)}
                        >
                            <MdDelete />
                        </span>
                        {data.type === 'folder' && (
                            <React.Fragment>
                                <span
                                    className='mx-[1px] w-6 h-6 rounded-full flex justify-center items-center cursor-pointer transition hover:bg-gray-700'
                                    onClick={() => {
                                        setIsOpen(true)
                                        children.push({ type: 'file', name: prompt('Choose a name for your file...') });
                                    }}
                                >
                                    <BsFileEarmarkPlus />
                                </span>
                                <span className='mx-[1px] w-6 h-6 rounded-full flex justify-center items-center cursor-pointer transition hover:bg-gray-700'
                                    onClick={() => {
                                        !isOpen && setIsOpen(true)
                                        children.push({ type: 'folder', name: prompt('Choose a name for your folder...'), children: [] });
                                    }}
                                >
                                    <HiOutlineFolderPlus />
                                </span>
                            </React.Fragment>
                        )}
                    </div>
                </div>
            </div>
            {data.children &&
                <ul
                    className='w-full'
                    style={{
                        height: isOpen ? 'auto' : '0',
                        display: isOpen ? 'block' : 'none'
                    }}
                >
                    {
                        data.children.map((item) => { return <List data={item} /> })
                    }
                </ul>
            }
        </li>
    );
}
