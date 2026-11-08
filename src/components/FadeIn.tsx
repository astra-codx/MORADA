import { useEffect, useRef, useState, type ReactNode } from "react";
import { animateReveal } from "../animations";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
};

export function FadeIn({
  children,
  delay = 0,
  duration = 1200,
  className = "",
}: FadeInProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const durationRef = useRef(duration);
  durationRef.current = duration;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let timer: ReturnType<typeof setTimeout> | undefined;
    let scheduled = false;
    let observer: IntersectionObserver | undefined;

    const reveal = () => {
      if (scheduled) return;
      scheduled = true;
      timer = setTimeout(() => {
        setVisible(true);
        animateReveal(element, { duration: durationRef.current, persist: true });
      }, delay);
      observer?.disconnect();
    };

    const checkPosition = () => {
      const bounds = element.getBoundingClientRect();
      if (bounds.top < window.innerHeight * 0.88 && bounds.bottom > 0) reveal();
    };

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) reveal();
        },
        { threshold: 0.06, rootMargin: "0px 0px -10% 0px" },
      );
      observer.observe(element);
    }

    window.addEventListener("scroll", checkPosition, { passive: true });
    window.addEventListener("resize", checkPosition);
    checkPosition();

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", checkPosition);
      window.removeEventListener("resize", checkPosition);
      if (timer) clearTimeout(timer);
    };
  }, [delay]);

  return (
    <div
      ref={elementRef}
      className={`fade-in-item${visible ? " is-visible" : ""} ${className}`}
      style={{ animationDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
}

