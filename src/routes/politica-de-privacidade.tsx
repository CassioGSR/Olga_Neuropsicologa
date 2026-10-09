// src/routes/politica-de-privacidade.tsx
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Olga Rodrigues" },
      { name: "description", content: "Como seus dados pessoais são tratados, conforme a LGPD." },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: PoliticaPrivacidade,
});

function PoliticaPrivacidade() {
  return (
    <main className="legal-page">
      <div className="container legal-content">
        <Link to="/" className="legal-back">← Voltar ao site</Link>

        <h1>Política de Privacidade</h1>
        <p className="legal-updated">Última atualização: 08 de outubro de 2026</p>

        <section>
          <h2>1. Quem somos (Controladora)</h2>
          <p>
            Esta política é de responsabilidade de <strong>Olga Rodrigues</strong>,
            psicóloga, CRP 10/08409, CPF/CNPJ [XXX], com atendimento em Fortaleza/Ce e cidades próximas.
            Contato para assuntos de privacidade: <a href="mailto:psi.olgavrodrigues@gmail.com">psi.olgavrodrigues@gmail.com</a>.
          </p>
        </section>

        <section>
          <h2>2. Quais dados coletamos</h2>
          <ul>
            <li><strong>Pelo site:</strong> nome, e-mail e telefone, quando você envia uma mensagem ou pede um agendamento.</li>
            <li><strong>Dados técnicos:</strong> endereço IP, tipo de navegador e páginas acessadas (se houver ferramenta de análise).</li>
            <li><strong>No atendimento:</strong> dados necessários ao serviço psicológico, que podem incluir dados sensíveis de saúde. Eles são tratados separadamente, conforme o Código de Ética e as resoluções do CFP.</li>
          </ul>
        </section>

        <section>
          <h2>3. Para que usamos seus dados</h2>
          <ul>
            <li>Responder mensagens e agendar consultas.</li>
            <li>Prestar o serviço de psicologia e manter os registros exigidos por lei.</li>
            <li>Cumprir obrigações legais e regulatórias.</li>
            <li>Melhorar o funcionamento do site (dados técnicos).</li>
          </ul>
        </section>

        <section>
          <h2>4. Base legal (LGPD)</h2>
          <p>
            O tratamento ocorre com base no seu consentimento, na execução de contrato
            ou de procedimentos preliminares, no cumprimento de obrigação legal ou
            regulatória, e, para dados de saúde, na tutela da saúde, em procedimento
            realizado por profissional de saúde (art. 7º e art. 11 da Lei 13.709/2018).
          </p>
        </section>

        <section>
          <h2>5. Compartilhamento</h2>
          <p>
            Seus dados <strong>não são vendidos</strong>. Podem ser compartilhados apenas
            com prestadores essenciais (hospedagem do site, e-mail, agenda), que seguem
            padrões de segurança, ou por obrigação legal ou ordem judicial. O conteúdo
            dos atendimentos é protegido por sigilo profissional.
          </p>
        </section>

        <section>
          <h2>6. Por quanto tempo guardamos</h2>
          <p>
            Dados de contato do site são mantidos pelo tempo necessário para o
            atendimento da solicitação. Documentos do atendimento psicológico são
            guardados pelo prazo mínimo definido pelo Conselho Federal de Psicologia
            (atualmente 5 anos), podendo ser mantidos por mais tempo se houver
            obrigação legal.
          </p>
        </section>

        <section>
          <h2>7. Seus direitos</h2>
          <p>
            Você pode solicitar: confirmação de tratamento, acesso, correção,
            anonimização ou eliminação, portabilidade, informações sobre
            compartilhamento e revogação do consentimento. Basta escrever para{" "}
            <a href="mailto:psi.olgavrodrigues@gmail.com">psi.olgavrodrigues@gmail.com</a>.
            Alguns registros profissionais não podem ser excluídos por exigência legal.
          </p>
        </section>

        <section>
          <h2>8. Segurança</h2>
          <p>
            Adotamos medidas técnicas e administrativas para proteger seus dados, como
            conexão segura (HTTPS), controle de acesso e armazenamento em ambientes
            protegidos.
          </p>
        </section>

        <section>
          <h2>9. Cookies e ferramentas de análise</h2>
          <p>
            [Descreva se o site usa cookies ou ferramentas como Google Analytics, Meta
            Pixel etc. Se não usar nenhum, escreva: "Este site não utiliza cookies de
            rastreamento ou publicidade."]
          </p>
        </section>

        <section>
          <h2>10. Alterações e contato</h2>
          <p>
            Esta política pode ser atualizada. A data da última revisão fica no topo da
            página. Dúvidas ou reclamações também podem ser levadas à ANPD
            (<a href="https://www.gov.br/anpd" target="_blank" rel="noopener">gov.br/anpd</a>).
          </p>
        </section>
      </div>
    </main>
  );
}