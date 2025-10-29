"use client";

import { motion } from "framer-motion";

const SectionHeading = ({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) => {
  return (
    <div className="mb-10 max-w-2xl">
      <motion.p
        className="font-mono text-xs uppercase tracking-[0.4em] text-glacial/50"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.45, 0, 0.55, 1] }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        className="mt-3 font-display text-4xl sm:text-5xl"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.1, ease: [0.45, 0, 0.55, 1] }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          className="mt-4 text-base text-glacial/70"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.45, 0, 0.55, 1] }}
          viewport={{ once: true, amount: 0.6 }}
        >
          {description}
        </motion.p>
      ) : null}
    </div>
  );
};

export default SectionHeading;
