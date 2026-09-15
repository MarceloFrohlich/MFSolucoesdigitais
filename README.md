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

## Painel admin e analytics (Postgres)

Existe um painel privado em `/admin/dashboard` com: total de visitas (geral e
últimos 30 dias), visitantes únicos, leads recebidos pelo formulário, cliques
em WhatsApp/e-mail, distribuição de acessos por horário do dia e as origens
(referrers) mais comuns.

- **Banco**: Postgres via integração Neon na Vercel (`vercel integration add neon`).
  A `DATABASE_URL` é injetada automaticamente nas envs do projeto.
- **Schema**: uma única tabela `events` (tipo do evento, sessão anônima, path,
  referrer, utm_source, user-agent, metadata em JSON). Rodar
  `node --env-file=.env.local scripts/init-db.mjs` cria as tabelas/índices
  (idempotente, seguro rodar de novo).
- **Rastreamento**: `components/Analytics.tsx` dispara um evento `pageview` ao
  carregar a página; `lib/track.ts` é usado nos cliques de WhatsApp/e-mail; o
  `/api/contact` grava um evento `lead` a cada envio de formulário bem-sucedido.
  Tudo com um ID de sessão anônimo (`localStorage`), sem cookies de terceiros.
- **Login**: senha única em `ADMIN_PASSWORD` (env var). Sessão via cookie
  httpOnly assinado (HMAC com `ADMIN_SESSION_SECRET`), validado em `proxy.ts`
  antes de qualquer rota `/admin/dashboard/*`.
- **Localmente**: preencha `ADMIN_PASSWORD` e `ADMIN_SESSION_SECRET` no
  `.env.local` (veja `.env.example`).

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
- `lib/db.ts` / `lib/auth.ts` / `lib/track.ts` — cliente Postgres, sessão do admin e helper de rastreamento client-side.
- `app/admin/` — login (`/admin/login`) e painel (`/admin/dashboard`).
- `app/api/track/` e `app/api/admin/` — rota de eventos e rotas de login/logout do admin.
- `proxy.ts` — protege `/admin/dashboard` (equivalente ao antigo `middleware.ts` no Next 16).
- `scripts/init-db.mjs` — cria o schema do Postgres (rodar uma vez).
