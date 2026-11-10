import { useState } from "react";
import { HERO_VIDEO } from "../data";
import { AnimatedHeading } from "./AnimatedHeading";
import { FadeIn } from "./FadeIn";
import { Navbar } from "./Navbar";

export function Hero() {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section id="top" className="relative h-svh min-h-[640px] w-full overflow-hidden">
      <video
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${videoReady ? "opacity-100" : "opacity-0"}`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onPlaying={() => setVideoReady(true)}
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      <Navbar />

      <div className="relative z-10 flex h-full items-end px-5 pb-16 sm:px-8 lg:px-16 lg:pb-20">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <AnimatedHeading
              text={"Encontre um lugar\npara chamar de lar."}
              className="text-4xl font-normal leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl xl:text-7xl"
            />
            <FadeIn delay={900} duration={1200}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-gray-300 sm:text-lg">
                Imóveis especiais, escolhidos com cuidado para combinar com o seu jeito de viver.
              </p>
              <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <a
                  href="#properties"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-sm font-medium text-black"
                >
                  Explorar imóveis
                </a>
                <a
                  href="#contact"
                  className="liquid-glass inline-flex items-center justify-center rounded-lg border border-white/20 px-8 py-3 text-sm font-medium text-white"
                >
                  Fale com um consultor
                </a>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={1100} duration={1200} className="hidden lg:block">
            <aside className="liquid-glass max-w-xs rounded-2xl p-6">
              <p className="relative z-10 text-sm leading-relaxed text-white/90">
                Imóveis selecionados. Lugares extraordinários.
              </p>
            </aside>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

