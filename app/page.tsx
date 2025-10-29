import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import FilmGrid from "@/components/FilmGrid";
import MerchPreview from "@/components/MerchPreview";
import { films } from "@/data/films";
import { merch } from "@/data/merch";
import { motion } from "framer-motion";
import Link from "next/link";

const containerMotion = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.45, 0, 0.55, 1] }
  }
};

const connectLinks = [
  {
    label: "YouTube",
    href: "https://youtube.com",
    display: "youtube.com/@cirque"
  },
  {
    label: "Instagram",
    href: "https://instagram.com/cirque.7",
    display: "@cirque.7"
  },
  {
    label: "Website",
    href: "https://cirque.works",
    display: "cirque.works"
  }
];

export default function Home() {
  return (
    <div className="space-y-32">
      <Hero />

      <section id="about" className="mx-auto flex max-w-5xl flex-col gap-10 px-6">
        <SectionHeading
          eyebrow="About"
          title="Cirque creates cinematic video essays exploring history, philosophy, art, and forgotten ideas."
          description="We craft atmospheric films, tactile narratives, and poetic reflections designed for those who seek meaning in the margins."
        />
        <motion.div
          className="grid gap-6 sm:grid-cols-2"
          initial="hidden"
          whileInView="show"
          variants={containerMotion}
          viewport={{ once: true, amount: 0.5 }}
        >
          <p className="text-base leading-relaxed text-glacial/70">
            Our process favors slow observation, analogue textures, and the choreography of light. Each essay blends archival
            fragments with original cinematography to invite viewers into a liminal, reflective state.
          </p>
          <p className="text-base leading-relaxed text-glacial/70">
            Through collaborations with historians, philosophers, and artists, Cirque cultivates cinematic worlds that feel both
            modern and timeless—harmonizing grain, sound, and narrative into immersive experiences.
          </p>
        </motion.div>
      </section>

      <section id="films" className="mx-auto flex max-w-5xl flex-col gap-10 px-6">
        <SectionHeading eyebrow="Films" title="Cinematic essays" description="A selection of recent releases from the Cirque archive." />
        <FilmGrid films={films} />
      </section>

      <section id="merch" className="mx-auto flex max-w-5xl flex-col gap-10 px-6">
        <SectionHeading
          eyebrow="Merch"
          title="Artifacts from the studio"
          description="Limited edition prints, garments, and tactile keepsakes to bring the Cirque world home."
        />
        <MerchPreview items={merch.slice(0, 3)} />
      </section>

      <section id="connect" className="mx-auto flex max-w-4xl flex-col gap-10 px-6 pb-24">
        <SectionHeading eyebrow="Connect" title="Stay in orbit" description="Follow Cirque across channels and continue the conversation." />
        <div className="grid gap-8 sm:grid-cols-3">
          {connectLinks.map((item, index) => (
            <motion.div
              key={item.label}
              className="rounded-3xl border border-glacial/10 bg-basalt/50 p-6 backdrop-blur"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.45, 0, 0.55, 1] }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <p className="font-mono text-xs uppercase tracking-[0.4em] text-glacial/50">{item.label}</p>
              <Link href={item.href} target="_blank" rel="noreferrer" className="mt-6 block font-display text-2xl text-glacial">
                {item.display}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
