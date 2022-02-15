//import "./index.css";
import { motion } from "framer-motion";
function Button(props) {
  return (
    <motion.Button
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
      onClick={() => null}
    >
      Click Me!
    </motion.Button>
  );
}
export default Button;
