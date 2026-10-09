/**
 * ════════════════════════════════════════════════════════════════════════
 *  PÁGINA INICIAL — Olga Rodrigues | Psicologia e Neuropsicologia
 * ════════════════════════════════════════════════════════════════════════
 *
 *  COMO LOCALIZAR ALGO PARA ALTERAR
 *  ─────────────────────────────────
 *  1. Use Ctrl+F e procure pelo código da seção, ex.:  [S02]  ou  [S02-HERO]
 *  2. Dentro de cada seção, cada elemento editável tem um  data-id="..."
 *     (ex.: hero-title). Procure por esse texto para achá-lo.
 *  3. No navegador (F12 > Elements) o mesmo data-id aparece no HTML, então
 *     dá para inspecionar um elemento da tela e achar o trecho aqui no código.
 *  4. O CSS usa os MESMOS códigos de seção em src/styles.css  (ex.: [S02]).
 *
 *  MAPA DE SEÇÕES                         data-section        âncora (#)
 *  ─────────────────────────────────────────────────────────────────────
 *  [S00] Metadados / SEO (head)           —                   —
 *  [S01] Dados de navegação (navLinks)    —                   —
 *  [S02] Link "pular para o conteúdo"     skip-link           #conteudo
 *  [S03] Cabeçalho + menu                 header              —
 *  [S04] Hero (topo da página)            hero                #inicio
 *  [S05] Sobre mim                        sobre               #sobre
 *  [S06] Serviços e especialidades        servicos            #servicos
 *  [S07] O que é avaliação neuropsicol.   avaliacao           —
 *  [S08] Quando a avaliação pode ajudar   sinais              #quando
 *  [S09] Etapas da avaliação              etapas              #etapas
 *  [S10] Contato                          contato             #contato
 *  [S11] Rodapé                           footer              —
 *
 *  PENDÊNCIAS MARCADAS NO CÓDIGO (procure por  TODO  ou  ⚠):
 *   • Número oficial do WhatsApp ainda não foi adicionado  ([S10] contato-whatsapp)
 *   • Botões "Agende/Falar no WhatsApp" apontam para #contato (trocar pelo link wa.me)
 *   • Link "Política de Privacidade (LGPD)" aponta para #contato (criar página/âncora)
 *   • Endereço físico não informado ([S10] contato-endereco)
 * ════════════════════════════════════════════════════════════════════════
 */
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroPhoto from "@/assets/olga-hero.jpeg.asset.json";
import portraitPhoto from "@/assets/olga-portrait.jpeg.asset.json";
import officePhoto from "@/assets/olga-office.jpeg.asset.json";
import { whatsappLink, MSG_AVALIACAO } from "@/lib/whatsapp";
// ═══ [S00] METADADOS / SEO ═══ título, descrição e Open Graph (aba do navegador e Google)
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Olga Rodrigues | Psicologia e Neuropsicologia Infantojuvenil" },
      {
        name: "description",
        content:
          "Avaliação neuropsicológica infantojuvenil com testes padrão-ouro para crianças e adolescentes dos 2 anos e 6 meses aos 16 anos. CRP 10/08409.",
      },
      { property: "og:title", content: "Olga Rodrigues | Psicologia e Neuropsicologia" },
      {
        property: "og:description",
        content:
          "Avaliação neuropsicológica baseada em evidências para crianças e adolescentes, com acolhimento para toda a família.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// ═══ [S01] DADOS DE NAVEGAÇÃO ═══
// Controla o menu desktop e o menu mobile ao mesmo tempo.
// Para adicionar/remover item: edite aqui (href deve bater com o id da seção).
const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre Mim" },
  { href: "#servicos", label: "Serviços" },
  { href: "#etapas", label: "Etapas da Avaliação" },
  { href: "#contato", label: "Contato" },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ═══ [S02] SKIP-LINK (acessibilidade: pular para o conteúdo) ═══ */}
      <a className="skip-link" data-section="skip-link" data-id="skiplink" href="#conteudo">
        Pular para o conteúdo
      </a>

      {/* ═══════════════ [S03] CABEÇALHO / MENU ═══════════════ */}
      <header className="site-header" data-section="header">
        <div className="container nav-wrap">
         {/* [S03-A] Marca (logo + nome + CRP) */}
<a
  className="brand"
  data-id="header-brand"
  href="#inicio"
  aria-label="Olga Rodrigues — início"
>
  <span
    className="brand-mark"
    data-id="header-brand-icon"
    aria-hidden="true"
  >
    <img
      src="img\Captura de tela 2026-10-07 020918.png"
      alt=""
      className="brand-logo"
    />
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

          {/* [S03-B] Menu desktop (itens vêm de navLinks — [S01]) */}
          <nav className="desktop-nav" data-id="header-nav-desktop" aria-label="Navegação principal">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          {/* [S03-C] Botão de destaque do topo. TODO: trocar href pelo link do WhatsApp (wa.me) */}
          <a className="btn btn-gold nav-cta" data-id="header-cta-whatsapp" href="#contato">
            Agende pelo WhatsApp
          </a>

          {/* [S03-D] Botão hambúrguer (só aparece no celular) */}
          <button
            className="menu-button"
            data-id="header-menu-toggle"
            type="button"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        {/* [S03-E] Menu mobile (abre/fecha pelo estado menuOpen) */}
        {menuOpen && (
          <nav
            className="mobile-nav container"
            data-id="header-nav-mobile"
            aria-label="Navegação móvel"
          >
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            ))}
            <a
              className="btn btn-gold"
              data-id="header-mobile-cta-whatsapp"
              href="#contato"
              onClick={() => setMenuOpen(false)}
            >
              Agende pelo WhatsApp
            </a>
          </nav>
        )}
      </header>

      <main id="conteudo">
        {/* ═══════════════ [S04] HERO (topo da página) ═══════════════ */}
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
          {/* [S04-C-OLD] VERSÃO ANTIGA da faixa de números (desativada, mantida só como referência).
              A versão ativa é a [S04-C] logo abaixo. Pode ser apagada quando não for mais necessária. */}
          {/*<div className="hero-bottom container">
            <div>
              <strong>2 anos e 6 meses</strong>
              <span>idade inicial</span>
            </div>
            <div>
              <strong>16 anos</strong>
              <span>idade final</span>
            </div>
            <div>
              <strong>CRP 10/08409</strong>
              <span>registro profissional</span>
            </div>
            <div>
              <strong>Baseada em evidências</strong>
              <span>avaliação especializada</span>
            </div>
          </div>*/}
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

        {/* ═══════════════ [S05] SOBRE MIM ═══════════════ */}
        <section className="section" id="sobre" data-section="sobre">
          <div className="container split">
            {/* [S05-A] Coluna da foto + frase de destaque */}
            <div data-id="sobre-media">
              <figure className="portrait-frame" data-id="sobre-retrato" style={{ margin: 0 }}>
                <img
                  src={portraitPhoto.url}
                  alt="Retrato profissional de Olga Rodrigues, psicóloga e neuropsicóloga clínica"
                  loading="lazy"
                />
                <figcaption>Olga Rodrigues · CRP 10/08409</figcaption>
              </figure>
              <div className="quote-card" data-id="sobre-citacao">
                “Cada criança e adolescente possui uma forma única de aprender, sentir e se
                relacionar com o mundo.”
              </div>
            </div>
            {/* [S05-B] Coluna de texto */}
            <div className="about-copy" data-id="sobre-texto">
              <p className="eyebrow" data-id="sobre-eyebrow">SOBRE MIM</p>
              <h2 data-id="sobre-title">Olá! Seja muito bem-vindo(a).</h2>
              <p data-id="sobre-paragrafo-1">
                Sou a Olga Rodrigues, Psicóloga e Neuropsicóloga Clínica CRP 10/08409, com
                pós-graduação em Terapia Cognitivo-Comportamental (TCC) e em Neuropsicologia.
              </p>
              <p data-id="sobre-paragrafo-2">
                Também possuo experiência prática como aplicadora ABA, atuando de forma integrada
                junto a equipes multidisciplinares. Atuo especialmente com o público infantojuvenil,
                atendendo dos 2 anos e 6 meses aos 16 anos.
              </p>
              <p data-id="sobre-paragrafo-3">
                Acredito que compreender o neurodesenvolvimento de maneira humanizada e rigorosa é a
                chave para desvendar potencialidades, acolher dificuldades e construir caminhos
                efetivos de intervenção para toda a família.
              </p>
              <p data-id="sobre-paragrafo-4">
                Meu compromisso é caminhar junto com as famílias, decodificando sinais, oferecendo
                clareza diagnóstica e construindo estratégias terapêuticas eficazes.
              </p>
              {/* [S05-C] Formações / credenciais */}
              <div className="credential-row" data-id="sobre-credenciais">
                <div data-id="sobre-credencial-tcc">
                  <strong>TCC</strong>
                  <span>Pós-graduação</span>
                </div>
                <div data-id="sobre-credencial-neuropsicologia">
                  <strong>Neuropsicologia</strong>
                  <span>Pós-graduação</span>
                </div>
                <div data-id="sobre-credencial-aba">
                  <strong>ABA</strong>
                  <span>Experiência prática</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════ [S06] SERVIÇOS E ESPECIALIDADES ═══════════════ */}
        <section className="section services" id="servicos" data-section="servicos">
          <div className="container">
            <div className="section-heading centered" data-id="servicos-heading">
              <p className="eyebrow" data-id="servicos-eyebrow">SERVIÇOS E ESPECIALIDADES</p>
              <h2 data-id="servicos-title">Como posso ajudar seu filho</h2>
              <p data-id="servicos-subtitle">
                Um atendimento que combina investigação clínica, conhecimento técnico e atuação
                integrada.
              </p>
            </div>
            <div className="service-grid" data-id="servicos-grid">
              {/* [S06-1] Card em destaque: Avaliação Neuropsicológica */}
              <article className="service-card featured" data-id="servicos-card-avaliacao">
                <div className="icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -13 24 50" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-clipboard-text">
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
	<path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2" />
	<path d="M9 12h6" />
	<path d="M9 16h6" />
</svg>
                </div>
                <p className="card-kicker"></p>
                <h3>Avaliação Neuropsicológica Infantojuvenil</h3>
                <p>
                  Investigação clínica aprofundada e individualizada do funcionamento cognitivo,
                  atencional, emocional e comportamental para pacientes de 2 anos e 6 meses a 16
                  anos.
                </p>
                <ul className="check-list" data-id="servicos-card-avaliacao-lista">
                  <li>Atenção, memória e linguagem</li>
                  <li>Raciocínio e funções executivas</li>
                  <li>Diagnóstico diferencial</li>
                  <li>Direcionamento de intervenções</li>
                </ul>
              </article>
              {/* [S06-2] Card: Intervenção ABA */}
              <article className="service-card" data-id="servicos-card-aba">
                <div className="icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -13 24 50" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-sitemap">
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<path d="M3 17a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2l0 -2" />
	<path d="M15 17a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2l0 -2" />
	<path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2l0 -2" />
	<path d="M6 15v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1" />
	<path d="M12 9l0 3" />
</svg>
                </div>
                <p className="card-kicker"></p>
                <h3>Intervenção ABA e Atuação Multidisciplinar</h3>
                <p>
                  Experiência prática na aplicação de programas baseados na Análise do Comportamento
                  Aplicada (ABA) e articulação com fonoaudiólogos, terapeutas ocupacionais, médicos e
                  escolas.
                </p>
              </article>
              {/* [S06-3] Card pequeno: Orientação para famílias e escolas */}
              <article className="service-card mini" data-id="servicos-card-orientacao">
                <div className="mini-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -13 24 50" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-heart-handshake">
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
	<path d="M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25" />
	<path d="M12.5 15.5l2 2" />
	<path d="M15 13l2 2" />
</svg>
                </div>
                <h3>Orientação para famílias e escolas</h3>
                <p>
                  Dados e orientações para apoiar o desenvolvimento e alinhar o trabalho da rede de
                  cuidado.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ═══════════════ [S07] O QUE É AVALIAÇÃO NEUROPSICOLÓGICA ═══════════════ */}
        <section className="neuro-section" data-section="avaliacao">
          <div className="container neuro-grid">
            {/* [S07-A] Introdução + foto do consultório */}
            <div className="neuro-intro" data-id="avaliacao-intro">
              <p className="eyebrow light" data-id="avaliacao-eyebrow">ENTENDA A AVALIAÇÃO</p>
              <h2 data-id="avaliacao-title">O que é avaliação neuropsicológica?</h2>
              <p data-id="avaliacao-texto">
                A avaliação neuropsicológica é uma investigação clínica aprofundada que analisa a
                relação entre o funcionamento do cérebro, a cognição e o comportamento.
              </p>
              <div className="neuro-photo" data-id="avaliacao-foto">
                <img
                  src={officePhoto.url}
                  alt="Olga Rodrigues no consultório com instrumentos de avaliação neuropsicológica"
                  loading="lazy"
                />
              </div>
            </div>
            {/* [S07-B] Lista de 3 pontos numerados */}
            <div className="neuro-points" data-id="avaliacao-pontos">
              <div data-id="avaliacao-ponto-01">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -5 24 35" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brain">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8" />
                    <path d="M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8" />
                    <path d="M17.5 16a3.5 3.5 0 0 0 0 -7h-.5" />
                    <path d="M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0" />
                    <path d="M6.5 16a3.5 3.5 0 0 1 0 -7h.5" />
                    <path d="M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10" />
                    </svg>
                </span>
                <div>
                  <strong>Mapear o perfil cognitivo</strong>
                  <p>Investigar atenção, memória, linguagem, raciocínio e funções executivas.</p>
                </div>
              </div>
              <div data-id="avaliacao-ponto-02">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -5 24 35" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-puzzle">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                  </svg>
                </span>
                <div>
                  <strong>Auxiliar no diagnóstico diferencial</strong>
                  <p>
                    Investigar transtornos do neurodesenvolvimento por meio de instrumentos e testes
                    padronizados.
                  </p>
                </div>
              </div>
              <div data-id="avaliacao-ponto-03">
                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -5 24 35" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-replace-user">
	                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
	                <path d="M21 11v-3c0 -.53 -.211 -1.039 -.586 -1.414c-.375 -.375 -.884 -.586 -1.414 -.586h-6m0 0l3 3m-3 -3l3 -3" />
	                <path d="M3 13.013v3c0 .53 .211 1.039 .586 1.414c.375 .375 .884 .586 1.414 .586h6m0 0l-3 -3m3 3l-3 3" />
	                <path d="M16 16.502c0 .53 .211 1.039 .586 1.414c.375 .375 .884 .586 1.414 .586c.53 0 1.039 -.211 1.414 -.586c.375 -.375 .586 -.884 .586 -1.414c0 -.53 -.211 -1.039 -.586 -1.414c-.375 -.375 -.884 -.586 -1.414 -.586c-.53 0 -1.039 .211 -1.414 .586c-.375 .375 -.586 .884 -.586 1.414" />
	                <path d="M4 4.502c0 .53 .211 1.039 .586 1.414c.375 .375 .884 .586 1.414 .586c.53 0 1.039 -.211 1.414 -.586c.375 -.375 .586 -.884 .586 -1.414c0 -.53 -.211 -1.039 -.586 -1.414c-.375 -.375 -.884 -.586 -1.414 -.586c-.53 0 -1.039 .211 -1.414 .586c-.375 .375 -.586 .884 -.586 1.414" />
	                <path d="M21 21.499c0 -.53 -.211 -1.039 -.586 -1.414c-.375 -.375 -.884 -.586 -1.414 -.586h-2c-.53 0 -1.039 .211 -1.414 .586c-.375 .375 -.586 .884 -.586 1.414" />
	                <path d="M9 9.499c0 -.53 -.211 -1.039 -.586 -1.414c-.375 -.375 -.884 -.586 -1.414 -.586h-2c-.53 0 -1.039 .211 -1.414 .586c-.375 .375 -.586 .884 -.586 1.414" />
                </svg></span>
                <div>
                  <strong>Direcionar intervenções</strong>
                  <p>
                    Fornecer dados para orientar terapias, famílias, escolas e equipes
                    multidisciplinares.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════ [S08] QUANDO A AVALIAÇÃO PODE AJUDAR (sinais) ═══════════════ */}
        <section className="section warnings" id="quando" data-section="sinais">
          <div className="container">
            <div className="section-heading" data-id="sinais-heading">
              <p className="eyebrow" data-id="sinais-eyebrow">QUANDO UMA AVALIAÇÃO PODE AJUDAR?</p>
              <h2 data-id="sinais-title">Alguns sinais merecem um olhar mais cuidadoso.</h2>
              <p data-id="sinais-subtitle">
                A avaliação é indicada quando há dúvidas sobre o funcionamento cognitivo,
                comportamental ou emocional que impactam a rotina.
              </p>
            </div>
            {/* [S08-A] Grade de 4 cartões */}
            <div className="warning-grid" data-id="sinais-grid">
              <article data-id="sinais-card-01">
                <span className="num">01</span>
                <h3>Dificuldades escolares persistentes</h3>
                <p>
                  Queda no rendimento ou dificuldades acentuadas em alfabetização, leitura, escrita
                  ou raciocínio matemático.
                </p>
              </article>
              <article data-id="sinais-card-02">
                <span className="num">02</span>
                <h3>Suspeita de transtornos do neurodesenvolvimento</h3>
                <p>
                  Desatenção, hiperatividade, atraso na fala, dificuldades de interação social,
                  rigidez ou comportamentos repetitivos.
                </p>
              </article>
              <article data-id="sinais-card-03">
                <span className="num">03</span>
                <h3>Alterações executivas e comportamentais</h3>
                <p>
                  Prejuízos em organização, planejamento, memória de trabalho, autocontrole ou
                  regulação emocional.
                </p>
              </article>
              <article data-id="sinais-card-04">
                <span className="num">04</span>
                <h3>Encaminhamento clínico ou escolar</h3>
                <p>
                  Quando médicos, escolas ou outros profissionais solicitam um mapeamento cognitivo
                  detalhado.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ═══════════════ [S09] ETAPAS DA AVALIAÇÃO ═══════════════ */}
        <section className="section steps" id="etapas" data-section="etapas">
          <div className="container">
            <div className="section-heading centered" data-id="etapas-heading">
              <p className="eyebrow" data-id="etapas-eyebrow">
                ETAPAS DA AVALIAÇÃO NEUROPSICOLÓGICA
              </p>
              <h2 data-id="etapas-title">Um processo cuidadoso em 4 etapas</h2>
              <p data-id="etapas-subtitle">
                Transparência sobre cada momento ajuda a família a entender o processo e participar
                dele.
              </p>
            </div>
            {/* [S09-A] Linha do tempo (lista ordenada de 4 etapas) */}
            <ol className="timeline" data-id="etapas-timeline">
              <li data-id="etapas-passo-01-anamnese">
                <span className="step-number">01</span>
                <div>
                  <h3>Anamnese</h3>
                  <small>Entrevista inicial</small>
                  <p>
                    Reunião com os pais ou responsáveis para compreender a história de
                    desenvolvimento, queixas e contexto familiar e escolar.
                  </p>
                </div>
              </li>
              <li data-id="etapas-passo-02-sessoes">
                <span className="step-number">02</span>
                <div>
                  <h3>Sessões de Avaliação</h3>
                  <small>Testagem</small>
                  <p>
                    Aplicação de testes neuropsicológicos padrão-ouro e observação clínica
                    estruturada em ambiente acolhedor.
                  </p>
                </div>
              </li>
              <li data-id="etapas-passo-03-analise">
                <span className="step-number">03</span>
                <div>
                  <h3>Análise e Integração</h3>
                  <small>Dados e resultados</small>
                  <p>
                    Correção dos testes, análise qualitativa e quantitativa e elaboração de relatório
                    técnico minucioso.
                  </p>
                </div>
              </li>
              <li data-id="etapas-passo-04-devolutiva">
                <span className="step-number">04</span>
                <div>
                  <h3>Sessão Devolutiva</h3>
                  <small>Laudo e orientações</small>
                  <p>
                    Explicação dos resultados, entrega do laudo e orientações práticas para a família
                    e a escola.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* ═══════════════ [S10] CONTATO ═══════════════ */}
        <section className="contact" id="contato" data-section="contato">
          <div className="container contact-grid">
            {/* [S10-A] Chamada de texto */}
            <div data-id="contato-chamada">
              <p className="eyebrow light" data-id="contato-eyebrow">CONTATO</p>
              <h2 data-id="contato-title">Vamos conversar?</h2>
              <p data-id="contato-texto">
                Tem dúvidas sobre o processo de avaliação ou deseja agendar uma triagem para o seu
                filho? Entre em contato pelos canais abaixo.
              </p>
            </div>
            {/* [S10-B] Canais de contato */}
            <div className="contact-items" data-id="contato-canais">
              {/* [S10-B1] E-mail */}
              <a data-id="contato-email" href="mailto:psi.olgavrodrigues@gmail.com">
                <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 -20 24 50" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-gmail">
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<path d="M16 20h3a1 1 0 0 0 1 -1v-14a1 1 0 0 0 -1 -1h-3v16" />
	<path d="M5 20h3v-16h-3a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1" />
	<path d="M16 4l-4 4l-4 -4" />
	<path d="M4 6.5l8 7.5l8 -7.5" />
</svg></span>
                <div>
                  <small>E-mail</small>
                  <strong>psi.olgavrodrigues@gmail.com</strong>
                </div>
              </a>
              {/* [S10-B2] WhatsApp — ⚠️ TODO: substituir o texto pelo número oficial
                  e transformar este <div> em <a href="https://wa.me/55DDDNUMERO"> */}
              <a href={whatsappLink(MSG_AVALIACAO)}
                  target="_blank"
                  rel="noopener noreferrer">
                <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 -20 24 50" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                  <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                </svg>
                </span>
                <div>
                  <small>WhatsApp</small>
                  <strong>94 98430-4844</strong>
                </div>
              </a>
              {/* [S10-B3] Endereço / modalidade — ⚠️ TODO: incluir endereço físico, se houver */}
              <div data-id="contato-endereco">
                <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg"width="12" height="24" viewBox="0 -20 24 50"  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-map-pinned">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M14.828 10.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829" />
                    <path d="M12 8v.01" />
                    <path d="M6 12h-.142a2 2 0 0 0 -1.923 1.45l-.858 3a2 2 0 0 0 1.924 2.55h13.999a2 2 0 0 0 1.923 -2.55l-.857 -3a2 2 0 0 0 -1.923 -1.45h-.143" />
                </svg>
                </span>
                <div>
                  <small>Endereço</small>
                  <strong>Atendimento presencial</strong>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

     {/* ═══════════════ [S11] RODAPÉ ═══════════════ */}
<footer className="site-footer" data-section="footer">
  <div className="container footer-main">
    {/* [S11-A] Marca */}
    <div className="footer-brand" data-id="footer-brand">
      <strong>Olga Rodrigues</strong>
      <span className="footer-role">Psicologia e Neuropsicologia</span>
      <span className="footer-crp">CRP 10/08409</span>
      <p className="footer-etica" data-id="footer-etica">
        Atendimento presencial em conformidade com o Código de Ética
        Profissional do Psicólogo.
      </p>
    </div>

    {/* [S11-B] Navegação */}
    <nav className="footer-col" aria-label="Navegação do rodapé" data-id="footer-nav">
      <h3>Navegação</h3>
      <ul>
        <li><a href="#inicio">Início</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#atendimento">Atendimento</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav>

    {/* [S11-C] Contato */}
    <div className="footer-col" data-id="footer-contato">
      <h3>Contato</h3>
      <ul>
        <li><a href="https://wa.me/5594984304844">WhatsApp</a></li>
        <li>Fortaleza, CE</li>
      </ul>
      
    </div>

    {/* [S11-D] Legal */}
    <div className="footer-col" data-id="footer-links">
      <h3>Informações</h3>
      <ul>
        <li><a href="/politica-de-privacidade">Política de Privacidade (LGPD)</a></li>
      </ul>
    </div>
  </div>

  {/* [S11-E] Faixa final */}
  <div className="footer-bottom-wrap">
    <div className="container footer-bottom" data-id="footer-bottom">
      <span data-id="footer-copyright">
        © {new Date().getFullYear()} Olga Rodrigues. Todos os direitos reservados.
      </span>
      <a
        className="footer-credit"
        data-id="footer-credit"
        href="https://silverhand.com.br"
        target="_blank"
        rel="noopener"
      >
        Desenvolvido por <strong>Silverhand</strong>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M7 17L17 7M9 7h8v8" />
        </svg>
      </a>
    </div>
  </div>
</footer>
    </>
  );
}
