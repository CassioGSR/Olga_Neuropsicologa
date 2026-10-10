import { whatsappLink, MSG_AVALIACAO } from "@/lib/whatsapp";

export function Contato() {
  return (
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
            <span aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="24"
                viewBox="0 -20 24 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-gmail"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M16 20h3a1 1 0 0 0 1 -1v-14a1 1 0 0 0 -1 -1h-3v16" />
                <path d="M5 20h3v-16h-3a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1" />
                <path d="M16 4l-4 4l-4 -4" />
                <path d="M4 6.5l8 7.5l8 -7.5" />
              </svg>
            </span>
            <div>
              <small>E-mail</small>
              <strong>psi.olgavrodrigues@gmail.com</strong>
            </div>
          </a>

          {/* [S10-B2] WhatsApp */}
          <a
            data-id="contato-whatsapp"
            href={whatsappLink(MSG_AVALIACAO)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="24"
                viewBox="0 -20 24 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
              >
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
            <span aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="24"
                viewBox="0 -20 24 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-map-pinned"
              >
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
  );
}