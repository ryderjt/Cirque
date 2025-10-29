import MerchGrid from "@/components/MerchGrid";
import SectionHeading from "@/components/SectionHeading";
import { merch } from "@/data/merch";
import { motion } from "framer-motion";

export const metadata = {
  title: "Cirque Merch | Artifacts from the Studio",
  description: "Limited edition Cirque prints, garments, and tactile goods."
};

const introVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 1.1, ease: [0.45, 0, 0.55, 1] } }
};

export default function MerchPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(194,172,120,0.2),_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-glacial/10 via-slate/10 to-transparent" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 pt-12">
        <motion.div
          className="max-w-3xl"
          variants={introVariants}
          initial="hidden"
          animate="show"
        >
          <p className="font-mono text-xs uppercase tracking-[0.5em] text-glacial/60">Cirque Merch</p>
          <h1 className="mt-6 font-display text-5xl text-glacial">Artifacts from the studio</h1>
          <p className="mt-4 text-base text-glacial/70">
            Textured layers, slow-dyed fabrics, and tactile prints inspired by the Cirque cinematic universe. Each piece is
            produced in small batches with archival craftsmanship.
          </p>
        </motion.div>
        <SectionHeading
          eyebrow="Collection"
          title="Limited series"
          description="Hover to feel the shift—each object reveals a Tarn Gold glimmer drawn from the films."
        />
        <MerchGrid items={merch} />
      </div>
    </div>
  );
}
