import { useEffect, useState } from "react";

type AnimatedHeadingProps = {
  text: string;
  className?: string;
};

export function AnimatedHeading({ text, className = "" }: AnimatedHeadingProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const lines = text.split("\n");
  let charIndex = 0;

  return (
    <h1 className={className}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="block">
          {Array.from(line).map((char, charKey) => {
            const index = charIndex;
            charIndex += 1;
            return (
              <span
                key={`${lineIndex}-${charKey}`}
                className="inline-block"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(-18px)",
                  transition: "opacity 500ms ease, transform 500ms ease",
                  transitionDelay: `${index * 30}ms`,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}

