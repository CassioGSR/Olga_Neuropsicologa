import officePhoto from "@/assets/olga-office.webp";

export function Neuro() {
  return (
    <section className="neuro-section" id="avaliacao" data-section="avaliacao">
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
              src={officePhoto}
              alt="Olga Rodrigues no consultório com instrumentos de avaliação neuropsicológica"
              width={1200}
              height={960}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* [S07-B] Lista de 3 pontos */}
        <div className="neuro-points" data-id="avaliacao-pontos">
          <div data-id="avaliacao-ponto-01">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 -5 24 35"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brain"
                aria-hidden="true"
              >
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 -5 24 35"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-puzzle"
                aria-hidden="true"
              >
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
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 -5 24 35"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-replace-user"
                aria-hidden="true"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M21 11v-3c0 -.53 -.211 -1.039 -.586 -1.414c-.375 -.375 -.884 -.586 -1.414 -.586h-6m0 0l3 3m-3 -3l3 -3" />
                <path d="M3 13.013v3c0 .53 .211 1.039 .586 1.414c.375 .375 .884 .586 1.414 .586h6m0 0l-3 -3m3 3l-3 3" />
                <path d="M16 16.502c0 .53 .211 1.039 .586 1.414c.375 .375 .884 .586 1.414 .586c.53 0 1.039 -.211 1.414 -.586c.375 -.375 .586 -.884 .586 -1.414c0 -.53 -.211 -1.039 -.586 -1.414c-.375 -.375 -.884 -.586 -1.414 -.586c-.53 0 -1.039 .211 -1.414 .586c-.375 .375 -.586 .884 -.586 1.414" />
                <path d="M4 4.502c0 .53 .211 1.039 .586 1.414c.375 .375 .884 .586 1.414 .586c.53 0 1.039 -.211 1.414 -.586c.375 -.375 .586 -.884 .586 -1.414c0 -.53 -.211 -1.039 -.586 -1.414c-.375 -.375 -.884 -.586 -1.414 -.586c-.53 0 -1.039 .211 -1.414 .586c-.375 .375 -.586 .884 -.586 1.414" />
                <path d="M21 21.499c0 -.53 -.211 -1.039 -.586 -1.414c-.375 -.375 -.884 -.586 -1.414 -.586h-2c-.53 0 -1.039 .211 -1.414 .586c-.375 .375 -.586 .884 -.586 1.414" />
                <path d="M9 9.499c0 -.53 -.211 -1.039 -.586 -1.414c-.375 -.375 -.884 -.586 -1.414 -.586h-2c-.53 0 -1.039 .211 -1.414 .586c-.375 .375 -.586 .884 -.586 1.414" />
              </svg>
            </span>
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
  );
}