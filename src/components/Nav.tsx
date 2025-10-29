"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Nav = () => {
  const links = [
    { href: "#about", label: "About" },
    { href: "#films", label: "Films" },
    { href: "#merch", label: "Merch" },
    { href: "#connect", label: "Connect" }
  ];

  return (
    <motion.header
      className="pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-center px-6 py-8"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] } }}
    >
      <nav className="pointer-events-auto flex w-full max-w-5xl items-center justify-between rounded-full border border-glacial/20 bg-basalt/60 px-6 py-3 backdrop-blur-lg">
        <Link href="/" className="font-display text-xl tracking-widest text-glacial uppercase">
          Cirque
        </Link>
        <div className="hidden gap-6 md:flex">
          {links.map((item) => (
            <a key={item.href} href={item.href} className="text-sm uppercase tracking-[0.3em] text-glacial/70 hover:text-tarn">
              {item.label}
            </a>
          ))}
        </div>
        <Link
          href="/merch"
          className="hidden rounded-full border border-glacial/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-glacial/70 transition hover:border-tarn/60 hover:text-tarn md:inline-flex"
        >
          Merch Shop
        </Link>
      </nav>
    </motion.header>
  );
};

export default Nav;
