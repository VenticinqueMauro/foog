import { motion } from "framer-motion";
import { Menu } from '@headlessui/react';
import Link from 'next/link';
import { categoryItems } from '../galeria/categorias/categoryItem';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useState, useEffect } from 'react';
import { useStore } from '@/app/store/store';

export default function Dropdown({ liClass, handleClick }: { liClass: string, handleClick: () => void }) {
    const [isDpOpen, setIsDpOpen] = useState(false);
    const { setIsSidebarOpen } = useStore();

    const handleDropDown = () => {
        setIsSidebarOpen();
        setIsDpOpen((prev) => !prev);
        console.log(isDpOpen);
    };

    const closeDropdown = () => {
        setIsDpOpen(false);
    };

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest('.dropdown-menu')) {
                closeDropdown();
            }
        };

        if (isDpOpen) {
            document.addEventListener('click', handleOutsideClick);
        } else {
            document.removeEventListener('click', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [isDpOpen]);

    const handleMenuLinkClick = () => {
        closeDropdown();
        handleClick();
    };

    return (
        <li className={`${liClass} relative`}>
            <Menu>
                <Menu.Button
                    className='flex items-center justify-between w-full gap-2 md:justify-normal'
                    onClick={() => setIsDpOpen((prev) => !prev)}
                >
                    Galería
                    <MdKeyboardArrowDown className={`${isDpOpen && 'transform rotate-180'} transition-transform duration-300`} />
                </Menu.Button>
                {isDpOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className='dropdown-menu absolute left-0 flex inline-flex flex-col gap-1 p-2 md:rounded top-10 mt-3 ml-3 border-l md:m-0 border-[#ACAA9E] md:border-none md:bg-[#161f20]/90 inline-block'
                    >
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    href={`/galeria`}
                                    className={`${active && 'bg-[#161716] rounded '} hidden md:block capitalize p-2`}
                                    onClick={() => { handleMenuLinkClick(); }}
                                >
                                    Principal
                                </Link>
                            )}
                        </Menu.Item>
                        {categoryItems.map((item, index) => (
                            <Menu.Item key={item.name}>
                                {({ active }) => (
                                    <motion.div
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        className={`${active && 'bg-[#161716] rounded '} capitalize p-2 flex items-center gap-1`}
                                    >
                                        <Link
                                            href={`/galeria/${item.href}`}
                                            className={`${active && 'bg-[#161716] rounded '} capitalize p-2 flex items-center gap-1`}
                                            onClick={() => { handleMenuLinkClick(); }}
                                        >
                                            <span>{item.icon ?? null}</span>
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                )}
                            </Menu.Item>
                        ))}
                    </motion.div>
                )}
            </Menu>
        </li>
    )
}
