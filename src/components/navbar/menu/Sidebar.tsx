'use client';

import { useStore } from '@/app/store/store';
import ContainerMenu from './ContainerMenu';
import { motion, AnimatePresence } from 'framer-motion';

const ulClassMobile = "flex flex-col items-start gap-2 px-6 py-6 h-screen "
const liClassMobile = "p-2 rounded  hover:border w-full capitalize text-center"


export default function Sidebar() {

    const { isSidebarOpen, setIsSidebarOpen } = useStore()


    return (
        <div className='z-50 overflow-hidden lg:hidden'>
            <AnimatePresence>
                {isSidebarOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.1 }}
                        className="fixed top-0 z-10 w-full min-h-screen overflow-hidden cristal bg-black/20"
                        onClick={setIsSidebarOpen}
                    ></motion.div>
                )}
            </AnimatePresence>


            <motion.section
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: isSidebarOpen ? 240 : 0, opacity: isSidebarOpen ? 1 : 0 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: isSidebarOpen ? 0.1 : 0.3 }}
                className={`fixed top-0 left-0 z-20 min-h-screen py-3 shadow-lg shadow-black bg-zinc-950`}
            >
                <ContainerMenu ulClass={ulClassMobile} liClass={liClassMobile} />
            </motion.section>
        </div>
    )
}
