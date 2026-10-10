export function Footer() {
  return (
    <footer className="site-footer" data-section="footer">
      <div className="container footer-main">
        <div className="footer-brand" data-id="footer-brand">
          <strong>Olga Rodrigues</strong>
          <span className="footer-role">Psicologia e Neuropsicologia</span>
          <span className="footer-crp">CRP 10/08409</span>
          <p className="footer-etica" data-id="footer-etica">
            Atendimento presencial em conformidade com o Código de Ética Profissional do Psicólogo.
          </p>
        </div>

        <nav className="footer-col" aria-label="Navegação do rodapé" data-id="footer-nav">
          <h3>Navegação</h3>
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#servicos">Atendimento</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>

        <div className="footer-col" data-id="footer-contato">
          <h3>Contato</h3>
          <ul>
            <li><a href="https://wa.me/5594984304844">WhatsApp</a></li>
            <li>Fortaleza, CE</li>
          </ul>
        </div>

        <div className="footer-col" data-id="footer-links">
          <h3>Informações</h3>
          <ul>
            <li><a href="/politica-de-privacidade">Política de Privacidade (LGPD)</a></li>
          </ul>
        </div>
      </div>

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
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}