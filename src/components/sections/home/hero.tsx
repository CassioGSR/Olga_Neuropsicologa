import heroPhoto from "@/assets/olga-hero.jpeg.asset.json";

export function Hero() {
  return (
    <section className="hero" id="inicio" data-section="hero">
      <div className="container hero-grid">
        {/* [S04-A] Coluna de texto */}
        <div data-id="hero-text">
          <p className="eyebrow" data-id="hero-eyebrow">
            PSICOLOGIA E NEUROPSICOLOGIA INFANTOJUVENIL
          </p>
          <h1 data-id="hero-title">
            Desenvolvimento,
            <br />
            comportamento e
            <br />
            saúde mental para
            <br />
            <em>crianças e adolescentes.</em>
          </h1>
          <p className="lead" data-id="hero-lead">
            Avaliação Neuropsicológica com testes padrão-ouro para crianças e adolescentes dos 2
            anos e 6 meses aos 16 anos, baseada em evidências para apoiar cada etapa do
            crescimento do seu filho.
          </p>
          <div className="hero-actions" data-id="hero-actions">
            {/* TODO: trocar href pelo link do WhatsApp (wa.me) */}
            <a className="btn btn-navy" data-id="hero-cta-primary" href="#contato">
              Falar no WhatsApp <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" data-id="hero-cta-secondary" href="#servicos">
              Conheça o trabalho <span aria-hidden="true">→</span>
            </a>
          </div>
          <p className="micro-note" data-id="hero-micro-note">
            <span aria-hidden="true">*</span> Atendimento presencial
          </p>
        </div>

        {/* [S04-B] Coluna da imagem (foto + formas decorativas + cartão flutuante) */}
        <div className="hero-art" data-id="hero-art">
          <div className="blob blob-a" data-id="hero-blob-a" aria-hidden="true" />
          <div className="blob blob-b" data-id="hero-blob-b" aria-hidden="true" />
          <div className="hero-photo" data-id="hero-photo">
            <img
              src={heroPhoto.url}
              alt="Olga Rodrigues, psicóloga e neuropsicóloga, em traje social azul claro"
              loading="eager"
            />
          </div>
          <div className="art-card" data-id="hero-art-card">
            <small>OLHAR INDIVIDUALIZADO</small>
            <strong>Ciência + acolhimento</strong>
            <span>para compreender potencialidades e dificuldades.</span>
          </div>
        </div>
      </div>

      {/* [S04-C] Faixa de informações-chave (4 cartões com ícone).
          Para adicionar/editar um cartão, copie um bloco [S04-C-n] inteiro.
          Obs.: o CSS espera 4 itens (grid de 4 colunas) — ver [S04] em styles.css */}
      <div className="hero-bottom" data-id="hero-stats">
        {/* [S04-C-1] Idade inicial */}
        <div className="hero-stat" data-id="hero-stat-idade-inicial">
          <div className="hero-stat-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="3.2" />
              <path d="M8.8 7.2c.3-2.2 1.6-3.4 3.2-3.4s2.9 1.2 3.2 3.4" />
              <path d="M6 21c.5-4.1 2.5-6.3 6-6.3s5.5 2.2 6 6.3" />
            </svg>
          </div>
          <div className="hero-stat-content">
            <strong>2 anos e 6 meses</strong>
            <span>idade inicial</span>
          </div>
        </div>

        {/* [S04-C-2] Idade final */}
        <div className="hero-stat" data-id="hero-stat-idade-final">
          <div className="hero-stat-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c0-4.2 3.6-7 8-7s8 2.8 8 7" />
            </svg>
          </div>
          <div className="hero-stat-content">
            <strong>16 anos</strong>
            <span>idade final</span>
          </div>
        </div>

        {/* [S04-C-3] Registro profissional (CRP) */}
        <div className="hero-stat" data-id="hero-stat-crp">
          <div className="hero-stat-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M5 3h10l4 4v14H5z" />
              <path d="M15 3v5h5M8 12h8M8 16h6" />
            </svg>
          </div>
          <div className="hero-stat-content">
            <strong>CRP 10/08409</strong>
            <span>registro profissional</span>
          </div>
        </div>

        {/* [S04-C-4] Baseada em evidências */}
        <div className="hero-stat" data-id="hero-stat-evidencias">
          <div className="hero-stat-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M12 3l8 3v6c0 5-3.4 8-8 10-4.6-2-8-5-8-10V6z" />
              <path d="m8.5 12 2.2 2.2 4.8-5" />
            </svg>
          </div>
          <div className="hero-stat-content">
            <strong>Baseada em evidências</strong>
            <span>avaliação especializada</span>
          </div>
        </div>
      </div>
    </section>
  );
}