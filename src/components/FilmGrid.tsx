"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Film } from "@/data/films";

const FilmGrid = ({ films }: { films: Film[] }) => {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {films.map((film, index) => (
        <motion.article
          key={film.title}
          className="group overflow-hidden rounded-3xl border border-glacial/10 bg-basalt/60 backdrop-blur"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: index * 0.08, ease: [0.45, 0, 0.55, 1] }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="relative h-64 overflow-hidden">
            <Image
              src={film.thumbnail}
              alt={film.title}
              fill
              className="object-cover transition duration-[2000ms] group-hover:scale-105"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-basalt via-basalt/40 to-transparent" />
            <div className="absolute bottom-5 left-5 flex items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.5em] text-glacial/70">
              <span>{film.year}</span>
              <span className="h-px w-10 bg-glacial/30" />
              <span>Film</span>
            </div>
          </div>
          <div className="flex flex-col gap-3 px-6 py-6">
            <h3 className="font-display text-2xl text-glacial">{film.title}</h3>
            <p className="text-sm text-glacial/70">{film.description}</p>
            <div className="mt-2">
              <Link
                href={film.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.4em] text-tarn/80 transition hover:text-tarn"
              >
                Watch Film
                <span className="h-px w-8 bg-gradient-to-r from-tarn/20 to-tarn" />
              </Link>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
};

export default FilmGrid;
