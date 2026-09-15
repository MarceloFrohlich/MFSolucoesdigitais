# Soluções Digitais — Site de Vendas de Serviços

Site institucional para divulgar serviços de desenvolvimento de soluções digitais
(sistemas personalizados, sites, aplicativos, plataformas web e integrações de
sistemas/APIs) para empresas e profissionais. Projeto separado do `portfolio-site`.

Stack: Next.js 16 (App Router, Turbopack), React 19, TailwindCSS 4, Framer Motion.
Conteúdo em PT/EN/ES via contexto de idioma client-side (sem rotas por idioma).

## Rodando localmente

```bash
npm install
npm run dev
```

## Configurar o envio de e-mail do formulário (Resend)

O formulário de contato envia direto pelo servidor via [Resend](https://resend.com)
(plano free: 3.000 e-mails/mês, sem cartão de crédito). Sem a chave configurada,
o formulário mostra um aviso pedindo para usar WhatsApp/e-mail direto — nada quebra,
só não envia.

1. Crie uma conta grátis em https://resend.com e gere uma API key em
   https://resend.com/api-keys.
2. Copie `.env.example` para `.env.local` e cole a chave em `RESEND_API_KEY`.
3. Pronto — o remetente usado é o `onboarding@resend.dev` (sandbox do Resend,
   não precisa verificar domínio) e o destinatário é `siteConfig.email`. Isso
   funciona porque o Resend, sem domínio verificado, permite enviar para o
   e-mail da própria conta — que é justamente para onde o formulário manda.
4. Se no futuro quiser enviar de um endereço tipo `contato@seudominio.com.br`,
   basta verificar o domínio no Resend e trocar o `from` em
   `app/api/contact/route.ts`.

## Antes de publicar — pendências de conteúdo

Todo o texto é um **rascunho** para revisão. Pontos que precisam de atenção real
antes de colocar o site no ar:

1. **WhatsApp** — `lib/site-config.ts` → `whatsappNumber` já está preenchido
   (`5551997259004`). Confirme se é o número certo antes de publicar.
2. **E-mail** — está usando `m.frohlich5@gmail.com` (o mesmo do portfolio
   atual). Troque se quiser um e-mail dedicado ao negócio.
3. **Domínio** — `lib/site-config.ts` → `domain` é um placeholder.
4. **Formulário de contato** — envia direto pelo servidor via Resend
   (`app/api/contact/route.ts`), sem abrir o e-mail do visitante. Precisa de
   uma `RESEND_API_KEY` gratuita — veja a seção "Configurar o envio de
   e-mail" acima.
5. **Preços** — decidimos não ter uma seção de planos/preços, já que
   orçamento de projeto sob medida depende do escopo (o FAQ já explica
   isso). Se um dia quiser reintroduzir faixas de preço, dá pra criar uma
   seção nova nos moldes das demais.
6. **Projetos/"cases"** (`locales/*.ts` → `portfolio.items`) — hoje mostra
   projetos pessoais reais como demonstração de capacidade técnica (não são
   apresentados como trabalhos para clientes). Se fechar projetos reais com
   clientes, vale substituir por cases de verdade (com autorização do
   cliente para citar o nome).
7. **Depoimentos** — propositalmente **não incluí** uma seção de depoimentos
   fictícios, para não parecer prova social falsa. Quando tiver depoimentos
   reais de clientes, é fácil adicionar uma seção nova.
8. **Favicon / metadata / og:image** — ainda não configurados.

## Estrutura

- `app/` — layout, página única e estilos globais.
- `components/` — uma seção por componente (Hero, Services, FAQ, etc).
- `locales/` — traduções PT/EN/ES (`pt.ts` define o tipo `Translations`).
- `contexts/LanguageContext.tsx` — troca de idioma client-side com persistência em `localStorage`.
- `lib/site-config.ts` — dados de contato centralizados.
- `lib/icon-map.tsx` — mapeia strings de ícone (usadas nas traduções) para componentes lucide-react.
