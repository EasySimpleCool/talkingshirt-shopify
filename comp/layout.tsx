import React from 'react'
import { motion } from "framer-motion"


const Layout = ({ children }) => {
    return (
        <div>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.1 }}
            >this is at the top</motion.div>

            {children}
            this is at the bottom
        </div>
    )
}

export default Layout