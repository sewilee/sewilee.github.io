import { motion } from "framer-motion";
import styles from "./header-animation.module.css";

type HeaderAnimationProps = {
  pathname: string;
} & React.PropsWithChildren;

export const HeaderAnimation = ({
  children,
  pathname,
}: HeaderAnimationProps) => {
  return (
    <motion.div key={pathname}>
      <motion.div
        className={styles.slideOut}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 4, ease: [0.22, 1, 0.36, 1] }}
      />
      {children}
    </motion.div>
  );
};
