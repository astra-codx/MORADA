import { useEffect } from "react";
import { animateReveal } from "./animations";
import { About } from "./components/About";
import { ExploreProperties } from "./components/ExploreProperties";
import { FeaturedProperty } from "./components/FeaturedProperty";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Locations } from "./components/Locations";

export default function App() {
  useEffect(() => {
    const animateAnchorNavigation = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey) return;
      if (!(event.target instanceof Element)) return;

      const link = event.target.closest<HTMLAnchorElement>('a[href^="#"]');
      const targetId = link?.getAttribute("href")?.slice(1);
      const target = targetId ? document.getElementById(decodeURIComponent(targetId)) : null;
      if (!target) return;

      let started = false;
      const startTransitionWhenVisible = () => {
        const bounds = target.getBoundingClientRect();
        if (started || bounds.top >= window.innerHeight * 0.82 || bounds.bottom <= 0) return;

        started = true;
        window.removeEventListener("scroll", startTransitionWhenVisible);
        animateReveal(target, { duration: 1100, offset: 30, blur: 8, fromOpacity: 0.35 });
      };

      window.addEventListener("scroll", startTransitionWhenVisible, { passive: true });
      requestAnimationFrame(startTransitionWhenVisible);
    };

    document.addEventListener("click", animateAnchorNavigation);
    return () => document.removeEventListener("click", animateAnchorNavigation);
  }, []);

  return (
    <main className="bg-black text-white">
      <Hero />
      <FeaturedProperty />
      <ExploreProperties />
      <Locations />
      <About />
      <FinalCta />
      <Footer />
    </main>
  );
}

