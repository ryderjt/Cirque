"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

const variants = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.45, 0, 0.55, 1] }
  },
  exit: {
    opacity: 0,
    y: -24,
    transition: { duration: 0.6, ease: [0.45, 0, 0.55, 1] }
  }
};

const PageTransition = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} initial="initial" animate="animate" exit="exit" variants={variants}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
