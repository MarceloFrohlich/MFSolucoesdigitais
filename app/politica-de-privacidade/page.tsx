import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Política de Privacidade — Marcelo Frohlich Soluções Digitais",
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f5f1e6] px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-sm font-semibold text-[#4d7c0f] hover:underline">
          ← Voltar para o site
        </Link>

        <h1 className="text-3xl font-extrabold text-[#16140f] mt-4 mb-2">Política de Privacidade</h1>
        <p className="text-sm text-[#57534a] mb-10">Última atualização: setembro de 2026.</p>

        <div className="flex flex-col gap-8 text-[#16140f] text-sm leading-7">
          <section>
            <h2 className="text-lg font-bold mb-2">1. Quem somos</h2>
            <p>
              Este site (<strong>{siteConfig.domain.replace("https://", "")}</strong>) é operado por{" "}
              {siteConfig.brandName}, prestador de serviços de desenvolvimento de software. Para qualquer
              dúvida sobre esta política ou sobre seus dados, entre em contato pelo e-mail{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-[#4d7c0f] font-semibold hover:underline">
                {siteConfig.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-2">2. Quais dados coletamos</h2>
            <ul className="list-disc pl-5 flex flex-col gap-1.5">
              <li>
                <strong>Dados que você nos envia diretamente:</strong> nome, e-mail, telefone/WhatsApp,
                serviço de interesse e a mensagem que você escreve, quando preenche o formulário de contato.
              </li>
              <li>
                <strong>Dados de navegação (analytics próprio):</strong> páginas visitadas, referência de
                origem (referrer), parâmetros de campanha (utm_source), tipo de navegador e um identificador
                de sessão anônimo gerado no seu navegador (sem uso de cookies de rastreamento de terceiros
                para esse fim). Usamos isso apenas para entender quantas pessoas visitam o site, de onde
                vêm e em que horários — nunca para identificar você pessoalmente.
              </li>
              <li>
                <strong>Cookies e pixels de publicidade:</strong> podemos utilizar ferramentas de terceiros
                como o Google Ads e o Meta Pixel (Facebook/Instagram) para medir a eficácia de campanhas
                publicitárias e evitar exibir os mesmos anúncios repetidamente. Essas ferramentas podem
                definir cookies próprios no seu navegador, sujeitos às políticas de privacidade do Google e
                da Meta.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-2">3. Para que usamos seus dados</h2>
            <ul className="list-disc pl-5 flex flex-col gap-1.5">
              <li>Responder à sua solicitação de contato ou orçamento.</li>
              <li>Entender e melhorar o desempenho do site (páginas mais acessadas, horários de pico).</li>
              <li>Medir o retorno de campanhas de anúncios pagos, quando ativas.</li>
            </ul>
            <p className="mt-2">Não vendemos nem compartilhamos seus dados com terceiros para fins de marketing de terceiros.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-2">4. Onde seus dados ficam armazenados</h2>
            <p>
              As mensagens de contato são enviadas por e-mail através do serviço{" "}
              <a href="https://resend.com" target="_blank" rel="noopener noreferrer" className="text-[#4d7c0f] font-semibold hover:underline">
                Resend
              </a>
              . Os dados de navegação (analytics) ficam armazenados em um banco de dados PostgreSQL
              hospedado pela{" "}
              <a href="https://neon.tech" target="_blank" rel="noopener noreferrer" className="text-[#4d7c0f] font-semibold hover:underline">
                Neon
              </a>
              , e o site roda na infraestrutura da{" "}
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#4d7c0f] font-semibold hover:underline">
                Vercel
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-2">5. Seus direitos (LGPD)</h2>
            <p>
              Nos termos da Lei Geral de Proteção de Dados (Lei 13.709/2018), você pode solicitar a
              qualquer momento a confirmação, correção, anonimização ou exclusão dos seus dados pessoais,
              bastando enviar um e-mail para{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-[#4d7c0f] font-semibold hover:underline">
                {siteConfig.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-2">6. Alterações desta política</h2>
            <p>
              Esta política pode ser atualizada periodicamente para refletir mudanças no site ou em
              ferramentas utilizadas (por exemplo, ao ativar novas campanhas de anúncios). A data da última
              atualização está sempre indicada no topo desta página.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
