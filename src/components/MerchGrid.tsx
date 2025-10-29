"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { MerchItem } from "@/data/merch";

const MerchGrid = ({ items }: { items: MerchItem[] }) => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => (
        <motion.article
          key={item.id}
          className="group overflow-hidden rounded-3xl border border-glacial/10 bg-basalt/50 backdrop-blur"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: index * 0.06, ease: [0.45, 0, 0.55, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative h-72 overflow-hidden">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover transition duration-[2500ms] group-hover:scale-110 group-hover:saturate-125"
              sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-basalt via-basalt/40 to-transparent transition duration-700 group-hover:from-tarn/30 group-hover:via-basalt/30" />
          </div>
          <div className="flex flex-col gap-3 px-6 py-6">
            <h3 className="font-display text-2xl text-glacial">{item.name}</h3>
            <p className="text-sm text-glacial/60">{item.description}</p>
            <div className="flex items-center justify-between pt-2">
              <span className="font-mono text-xs uppercase tracking-[0.4em] text-glacial/50">{item.price}</span>
              <Link
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-glacial/20 px-4 py-2 text-xs uppercase tracking-[0.35em] text-glacial/70 transition hover:border-tarn/60 hover:text-tarn"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
};

export default MerchGrid;
