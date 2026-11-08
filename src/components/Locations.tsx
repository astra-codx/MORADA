import { locations } from "../data";
import { FadeIn } from "./FadeIn";

export function Locations() {
  return (
    <section id="locations" className="scroll-mt-28 bg-black px-5 py-24 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <h2 className="text-3xl font-normal tracking-[-0.04em] text-white sm:text-5xl">
            Lugares extraordinários
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {locations.map((location, index) => (
            <FadeIn key={location.name} delay={120 + index * 120}>
              <article className="group relative h-[420px] overflow-hidden">
                <img
                  src={location.image}
                  alt={location.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-2xl font-normal tracking-tight text-white">
                    {location.name}
                  </h3>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

