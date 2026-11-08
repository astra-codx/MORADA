import { FadeIn } from "./FadeIn";

export function FinalCta() {
  return (
    <section id="contact" className="scroll-mt-28 bg-black px-5 py-28 sm:px-8 lg:px-16">
      <FadeIn className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-normal tracking-[-0.04em] text-white sm:text-5xl">
          Pronto para encontrar seu próximo endereço?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-gray-300">
          Conte o que você procura. Nossa equipe ajuda a encontrar o imóvel ideal para você.
        </p>
        <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <a
            href="mailto:contato@morada.estate"
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-sm font-medium text-black"
          >
            Fale com a Morada
          </a>
          <a
            href="#properties"
            className="liquid-glass inline-flex items-center justify-center rounded-lg border border-white/20 px-8 py-3 text-sm font-medium text-white"
          >
            Explorar imóveis
          </a>
        </div>
      </FadeIn>
    </section>
  );
}

