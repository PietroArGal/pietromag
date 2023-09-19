import { motion } from "framer-motion";
import Pietro from "../svgs/Pietro";
import Mag from "../svgs/Mag";

export default function SplashScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1.8 }}
      className="flex justify-center items-center h-screen"
    >
      <motion.div
        initial={{ opacity: 0, pathLength: 0 }}
        transition={{
          delay: 0.6,
          duration: 1.2,
        }}
        animate={{ opacity: 1, pathLength: 1 }}
      >
        <Pietro />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 3, delay: 1.5 }}
        animate={{ opacity: 1 }}
      >
        <Mag />
      </motion.div>
    </motion.div>
  );
}
