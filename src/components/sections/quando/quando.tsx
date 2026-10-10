export function Quando() {
  return (
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
  );
}