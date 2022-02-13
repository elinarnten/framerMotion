import { motion } from "framer-motion";
import Button from "./Button";

function App() {
  return (
    <div className="container">
      <motion.Button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="click-button"
        onClick={() => null}
      >
        Click Me!
      </motion.Button>
    </div>
  );
}

export default App;
