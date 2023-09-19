import { motion } from "framer-motion";

export default function MainPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1.8, delay: 0.6 }}
      className="flex justify-center items-center h-screen text-red-600"
    >
      MainPage
    </motion.div>
  );
}
