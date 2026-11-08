import { FadeIn } from "./FadeIn";

export function About() {
  return (
    <section id="about" className="scroll-mt-28 bg-black px-5 py-24 sm:px-8 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <FadeIn>
          <p className="text-xs font-medium tracking-[0.28em] text-gray-300">SOBRE A MORADA</p>
          <h2 className="mt-4 max-w-md text-4xl font-normal tracking-[-0.04em] text-white sm:text-5xl">
            Um novo olhar sobre o mercado imobiliário.
          </h2>
          <p className="mt-6 max-w-lg text-gray-300">
            A Morada é uma imobiliária para quem valoriza arquitetura, luz e localização.
            Selecionamos cada residência com atenção e apresentamos cada detalhe com cuidado.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex text-sm font-medium text-white transition-opacity hover:opacity-70"
          >
            Saiba mais →
          </a>
        </FadeIn>

        <FadeIn delay={180}>
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80"
            alt="Interior de uma residência contemporânea"
            className="h-[380px] w-full object-cover lg:h-[520px]"
          />
        </FadeIn>
      </div>
    </section>
  );
}

