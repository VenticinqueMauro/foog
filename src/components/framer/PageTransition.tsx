'use client'

import { motion } from 'framer-motion';


const pageVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
};


type Props = {
    children: React.ReactNode
}

export default function PageTransitions({ children }: Props) {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
        >
            {children}
        </motion.div>
    )
}