export function Etapas() {
  return (
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

        {/* [S09-A] Linha do tempo */}
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
                Aplicação de instrumentos neuropsicológicos padronizados e observação clínica
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
  );
}