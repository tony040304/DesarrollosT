import React from 'react'
import { motion, AnimatePresence } from "framer-motion";

const AnimacionBlur = ({ open, setOpen, click }) => {
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/60 flex items-center justify-center"
                    onClick={() => setOpen(!open)}
                >
                    <motion.button
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-white text-black font-semibold rounded-xl shadow-lg"
                        onClick={click}
                    >
                        Ver más
                    </motion.button>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default AnimacionBlur