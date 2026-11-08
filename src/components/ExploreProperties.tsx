import { properties } from "../data";
import { FadeIn } from "./FadeIn";

export function ExploreProperties() {
  return (
    <section id="properties" className="scroll-mt-28 bg-black px-5 py-24 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <h2 className="text-3xl font-normal tracking-[-0.04em] text-white sm:text-5xl">
            Conheça nossos imóveis
          </h2>
          <p className="mt-4 max-w-xl text-gray-300">
            Uma seleção cuidadosa de residências que se destacam pela arquitetura, localização e estilo de vida.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {properties.map((property, index) => (
            <FadeIn key={property.id} delay={120 + index * 120}>
              <article>
                <div className="overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="h-72 w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <h3 className="mt-5 text-xl font-medium text-white">{property.name}</h3>
                <p className="mt-1 text-sm text-gray-300">{property.location}</p>
                <p className="mt-3 text-sm text-white/80">
                  {property.beds} quartos / {property.baths} banheiros / {property.area}
                </p>
                <p className="mt-2 text-sm text-white">{property.price}</p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={400}>
          <a
            href="#contact"
            className="mt-12 inline-flex text-sm font-medium text-white transition-opacity hover:opacity-70"
          >
            Ver todos os imóveis →
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

