import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-glacial/10 bg-basalt/60 py-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 text-sm text-glacial/60 md:flex-row md:items-center md:justify-between">
        <p className="font-mono tracking-[0.3em] uppercase">© {new Date().getFullYear()} Cirque Collective</p>
        <div className="flex items-center gap-5">
          <Link href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-tarn">
            YouTube
          </Link>
          <Link href="https://instagram.com/cirque.7" target="_blank" rel="noreferrer" className="hover:text-tarn">
            Instagram
          </Link>
          <Link href="https://cirque.works" target="_blank" rel="noreferrer" className="hover:text-tarn">
            cirque.works
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
