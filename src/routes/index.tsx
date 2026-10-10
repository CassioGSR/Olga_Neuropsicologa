import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layouts/header";
import { Footer } from "@/components/layouts/footer";
import { Hero } from "@/components/sections/home/hero";
import { Sobre } from "@/components/sections/sobre/sobre";
import { Servicos } from "@/components/sections/servicos/servicos";
import { Neuro } from "@/components/sections/neuro/neuro";
import { Quando } from "@/components/sections/quando/quando";
import { Etapas } from "@/components/sections/etapas/etapas";
import { Contato } from "@/components/sections/contato/contato";

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

function Index() {
  return (
    <>
      {/* ═══ [S02] SKIP-LINK (acessibilidade: pular para o conteúdo) ═══ */}
      <a className="skip-link" data-section="skip-link" data-id="skiplink" href="#conteudo">
        Pular para o conteúdo
      </a>

      <Header />

      <main id="conteudo">
        <Hero />
        <Sobre />
        <Servicos />
        <Neuro />
        <Quando />
        <Etapas />
        <Contato />
      </main>

      <Footer />
    </>
  );
}