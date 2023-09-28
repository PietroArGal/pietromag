"use client"

import { motion } from "framer-motion";

export default function PortfolioPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.8, delay: 0.5 }}
        >
            Portfolio
        </motion.div>
    )
}
