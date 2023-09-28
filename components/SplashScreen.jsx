import { motion } from "framer-motion";
import Pietro from "../svgs/Pietro";
import Mag from "../svgs/Mag";

export default function SplashScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1.5 }}
      className="flex fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <motion.div
        initial={{ opacity: 0, pathLength: 0 }}
        transition={{
          delay: 0.6,
          duration: 1,
        }}
        animate={{ opacity: 1, pathLength: 1 }}
      >
        <Pietro />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 2.6, delay: 1.3 }}
        animate={{ opacity: 1 }}
      >
        <Mag />
      </motion.div>
    </motion.div>
  );
}
