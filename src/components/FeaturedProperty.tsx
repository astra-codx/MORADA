import { FadeIn } from "./FadeIn";

export function FeaturedProperty() {
  return (
    <section id="story" className="scroll-mt-28 bg-black px-5 py-24 sm:px-8 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <FadeIn delay={120} className="order-2 lg:order-1">
          <p className="text-xs font-medium tracking-[0.28em] text-gray-300">
            IMÓVEL EM DESTAQUE
          </p>
          <h2 className="mt-4 text-4xl font-normal tracking-[-0.04em] text-white sm:text-5xl">
            Casa Horizonte
          </h2>
          <p className="mt-3 text-gray-300">São Paulo, Brasil</p>
          <dl className="mt-8 grid grid-cols-2 gap-4 text-sm text-gray-300 sm:grid-cols-4">
            <div>
              <dt className="text-white/40">Quartos</dt>
              <dd className="mt-1 text-white">4 quartos</dd>
            </div>
            <div>
              <dt className="text-white/40">Banheiros</dt>
              <dd className="mt-1 text-white">5 banheiros</dd>
            </div>
            <div>
              <dt className="text-white/40">Área</dt>
              <dd className="mt-1 text-white">420 m²</dd>
            </div>
            <div>
              <dt className="text-white/40">Valor</dt>
              <dd className="mt-1 text-white">R$ 8.900.000</dd>
            </div>
          </dl>
          <a
            href="#contact"
            className="mt-10 inline-flex text-sm font-medium text-white transition-opacity hover:opacity-70"
          >
            Conheça o imóvel →
          </a>
        </FadeIn>

        <FadeIn delay={200} className="order-1 lg:order-2">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80"
            alt="Casa Horizonte, São Paulo"
            className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[560px]"
          />
        </FadeIn>
      </div>
    </section>
  );
}

