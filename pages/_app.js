import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { Poppins } from "next/font/google";

import { HeaderAnimation } from "../components/layout/HeaderAnimation";
import "../style-guide/global.css";
import "../style-guide/colors.css";

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
        <Component {...pageProps} />
      </AnimatePresence>
    </div>
  );
};

export default App;
