'use client'

import { Menu } from '@headlessui/react'
import Link from 'next/link'
import { categoryItems } from '../galeria/categorias/categoryItem'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { useState } from 'react'

export default function Dropdown({ liClass, handleClick }: { liClass: string, handleClick: () => void }) {

    const [isOpen, setIsOpen] = useState(false)

    const handleDropDown = () => {
        setIsOpen(!isOpen)
    }

    return (
        <li className={`${liClass} relative`}>
            <Menu>
                <Menu.Button
                    className='flex items-center justify-between w-full gap-2 md:justify-normal'
                    onClick={handleDropDown}
                >
                    Galery
                    <MdKeyboardArrowDown className={`${isOpen && 'transform rotate-180'} transition-transform duration-300`} />
                </Menu.Button>
                <Menu.Items className='absolute left-0 flex inline-flex flex-col gap-1 p-2 md:rounded top-10 mt-3 ml-3 border-l md:m-0 border-[#ACAA9E] md:border-none md:bg-[#25292B]/90 w-full'>
                    {
                        categoryItems.map(item => (
                            <Menu.Item key={item.name}>
                                {({ active }) => (
                                    <Link
                                        href={`/galeria/${item.href}`}
                                        className={`${active && 'bg-[#161716] rounded '} capitalize p-2`}
                                        onClick={handleClick}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </Menu.Item>
                        ))
                    }
                    <Menu.Item >
                        {({ active }) => (
                            <Link
                                href={`/galeria`}
                                className={`${active && 'bg-[#161716] rounded '} capitalize p-2`}
                                onClick={handleClick}
                            >
                                Todos
                            </Link>
                        )}
                    </Menu.Item>
                </Menu.Items>
            </Menu>
        </li>
    )
}