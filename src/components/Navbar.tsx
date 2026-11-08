import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#story", label: "Em destaque" },
  { href: "#properties", label: "Imóveis" },
  { href: "#locations", label: "Localizações" },
  { href: "#about", label: "Sobre nós" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-30 px-4 pt-5 sm:px-6 lg:px-8">
      <nav className="liquid-glass mx-auto flex max-w-6xl items-center justify-between rounded-xl px-4 py-2">
        <a href="#top" className="relative z-10 text-sm font-semibold tracking-[0.22em]">
          Morada
        </a>

        <div className="relative z-10 hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="relative z-10 hidden rounded-lg bg-white px-4 py-2 text-sm font-medium text-black md:inline-flex"
        >
          Converse conosco
        </a>

        <button
          type="button"
          className="relative z-10 inline-flex h-9 w-9 items-center justify-center rounded-lg text-white md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="liquid-glass mx-auto mt-2 max-w-6xl rounded-xl px-4 py-4 md:hidden">
          <div className="relative z-10 flex flex-col gap-3 text-sm">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-1 text-white/85"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-white px-4 py-3 font-medium text-black"
              onClick={() => setOpen(false)}
            >
              Converse conosco
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

