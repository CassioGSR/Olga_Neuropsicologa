import { useState } from "react";
import { navLinks } from "@/data/site";
import { whatsappLink, MSG_AVALIACAO } from "@/lib/whatsapp";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const wa = whatsappLink(MSG_AVALIACAO);

  return (
    <header className="site-header" data-section="header">
      <div className="container nav-wrap">
        <a className="brand" data-id="header-brand" href="/#inicio" aria-label="Olga Rodrigues — início">
          <span className="brand-mark" data-id="header-brand-icon" aria-hidden="true">
            <img src="/img/logo-olga.png" alt="" className="brand-logo" />
          </span>
          <span>
            <strong>Olga Rodrigues</strong>
            <small>
              PSICOLOGIA E NEUROPSICOLOGIA
              <br />
              CRP 10/08409
            </small>
          </span>
        </a>

        <nav className="desktop-nav" data-id="header-nav-desktop" aria-label="Navegação principal">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <a
          className="btn btn-gold nav-cta"
          data-id="header-cta-whatsapp"
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
        >
          Agende pelo WhatsApp
        </a>

        <button
          className="menu-button"
          data-id="header-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <nav className="mobile-nav container" data-id="header-nav-mobile" aria-label="Navegação móvel">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            className="btn btn-gold"
            data-id="header-mobile-cta-whatsapp"
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Agende pelo WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}