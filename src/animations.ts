type RevealOptions = {
  duration?: number;
  offset?: number;
  blur?: number;
  fromOpacity?: number;
  persist?: boolean;
};

export function animateReveal(element: HTMLElement, options: RevealOptions = {}) {
  const {
    duration = 1200,
    offset = 36,
    blur = 7,
    fromOpacity = 0,
    persist = false,
  } = options;

  element.getAnimations().forEach((animation) => animation.cancel());

  const animation = element.animate(
    [
      {
        opacity: fromOpacity,
        transform: `translate3d(0, ${offset}px, 0)`,
        filter: `blur(${blur}px)`,
      },
      {
        opacity: 1,
        transform: "translate3d(0, 0, 0)",
        filter: "blur(0)",
      },
    ],
    {
      duration,
      easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      fill: "both",
    },
  );

  animation.onfinish = () => {
    if (persist) element.classList.add("is-visible");
    animation.cancel();
  };

  return animation;
}

