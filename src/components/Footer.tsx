function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 10.5V16.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="8" cy="7.5" r="1" fill="currentColor" />
      <path
        d="M11.5 16.5V13.2C11.5 11.8 12.4 11 13.7 11C15 11 15.5 11.9 15.5 13.2V16.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/20 bg-black px-5 py-10 sm:px-8 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <a href="#top" className="text-sm font-semibold tracking-[0.22em]">
          Morada
        </a>
        <nav className="flex flex-wrap gap-6 text-sm text-gray-300">
          <a href="#properties" className="hover:text-white">
            Imóveis
          </a>
          <a href="#locations" className="hover:text-white">
            Localizações
          </a>
          <a href="#about" className="hover:text-white">
            Sobre nós
          </a>
          <a href="#contact" className="hover:text-white">
            Contato
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            className="text-gray-300 hover:text-white"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://linkedin.com"
            aria-label="LinkedIn"
            className="text-gray-300 hover:text-white"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-7xl text-xs text-white/40">
        © {new Date().getFullYear()} Morada. Todos os direitos reservados.
      </p>
    </footer>
  );
}

