"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useMemo, type MouseEvent } from "react";

const Hero = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const spring = useMemo(
    () => ({ stiffness: 100, damping: 20, mass: 0.7 }),
    []
  );

  const translateX = useSpring(useTransform(x, [-120, 120], [-14, 14]), spring);
  const translateY = useSpring(useTransform(y, [-120, 120], [-10, 10]), spring);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = event;
    const rect = currentTarget.getBoundingClientRect();
    const offsetX = clientX - rect.left - rect.width / 2;
    const offsetY = clientY - rect.top - rect.height / 2;
    x.set(offsetX);
    y.set(offsetY);
  };

  return (
    <section
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
      id="top"
    >
      <motion.div
        className="absolute inset-0"
        style={{ x: translateX, y: translateY }}
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, transition: { duration: 2.4, ease: [0.16, 1, 0.3, 1] } }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-basalt/30 via-basalt/60 to-basalt" />
        <video
          className="h-full w-full object-cover"
          src="https://cdn.coverr.co/videos/coverr-aerial-shot-of-cliffs-and-ocean-8471/1080p.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1400&q=80"
        />
      </motion.div>

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 text-center">
        <motion.div
          className="font-mono text-xs uppercase tracking-[0.5em] text-glacial/60"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.6, duration: 1.2, ease: [0.25, 0.1, 0.25, 1] } }}
        >
          Cirque Collective
        </motion.div>
        <motion.h1
          className="font-display text-5xl leading-tight text-glacial sm:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.9, duration: 1.4, ease: [0.25, 0.1, 0.25, 1] } }}
        >
          Cinematic essays on history, philosophy, and art.
        </motion.h1>
        <motion.p
          className="text-lg text-glacial/70 sm:text-xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 1.2, duration: 1.2, ease: [0.45, 0, 0.55, 1] } }}
        >
          Enter a world of analog warmth, slow cinema, and reflective storytelling.
        </motion.p>
        <motion.div
          className="mt-10 flex items-center gap-3"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 1.5, duration: 1, ease: [0.45, 0, 0.55, 1] } }}
        >
          <a
            href="#about"
            className="rounded-full border border-glacial/30 px-8 py-3 text-sm uppercase tracking-[0.35em] text-glacial/80 transition hover:border-tarn/50 hover:text-tarn"
          >
            Discover
          </a>
          <motion.a
            href="/merch"
            className="rounded-full border border-transparent bg-tarn/20 px-8 py-3 text-sm uppercase tracking-[0.35em] text-tarn transition hover:bg-tarn/30"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Merch
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-glacial/60 sm:flex"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 2, duration: 1.2, ease: [0.45, 0, 0.55, 1] } }}
      >
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.6em]">Scroll</span>
        <span className="h-12 w-px bg-gradient-to-b from-transparent via-glacial/50 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
