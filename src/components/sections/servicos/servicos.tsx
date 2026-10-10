export function Servicos() {
  return (
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 -13 24 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-clipboard-text"
              >
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 -13 24 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-sitemap"
              >
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 -13 24 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-heart-handshake"
              >
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
  );
}