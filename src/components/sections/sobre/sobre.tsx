import portraitPhoto from "@/assets/olga-portrait.jpeg.asset.json";

export function Sobre() {
  return (
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
  );
}