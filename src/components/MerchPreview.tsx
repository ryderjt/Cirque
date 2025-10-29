"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { MerchItem } from "@/data/merch";

const MerchPreview = ({ items }: { items: MerchItem[] }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-3">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className="group overflow-hidden rounded-3xl border border-glacial/10 bg-basalt/50 backdrop-blur"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: index * 0.08, ease: [0.45, 0, 0.55, 1] }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="relative h-44 overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition duration-[2000ms] group-hover:scale-105 group-hover:brightness-110"
                sizes="(min-width: 640px) 33vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-basalt via-basalt/40 to-transparent" />
            </div>
            <div className="flex flex-col gap-1 px-4 py-4">
              <p className="font-display text-lg text-glacial">{item.name}</p>
              <p className="text-sm text-glacial/60">{item.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div>
        <Link
          href="/merch"
          className="inline-flex items-center gap-3 rounded-full border border-glacial/20 px-6 py-3 text-xs uppercase tracking-[0.4em] text-glacial/70 transition hover:border-tarn/60 hover:text-tarn"
        >
          View all merch
          <span className="h-px w-10 bg-gradient-to-r from-glacial/20 to-tarn" />
        </Link>
      </div>
    </div>
  );
};

export default MerchPreview;
