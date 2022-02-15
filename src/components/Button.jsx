import { motion } from "framer-motion";
import Main from "./Main";

function Button() {
  return (
    <motion.button
      drag
      dragConstraints={{
        top: -50,
        left: -50,
        right: 50,
        bottom: 50,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="click-button"
      onClick={() => Main()}
    >
      Click Me!
    </motion.button>
  );
}

export default Button;
