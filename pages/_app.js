import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { Poppins } from "next/font/google";
import "./global.css";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <div className={poppins.className}>
      <AnimatePresence mode="wait">
        <motion.div key={router.pathname}>
          <Component {...pageProps} />
          <motion.div
            className="slide-in"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          ></motion.div>
          <motion.div
            className="slide-out"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          ></motion.div>
          <motion.div></motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default App;
