# Refinamento — Backlog de Migração Next → Angular

> Este documento é a lista de incrementos planejados para a migração. Cada item possui origem Next, critério de aceitação e dependências. Os itens devem ser concluídos em ordem, sem pular etapas que bloqueiam as seguintes.

## Legenda

- `[ ]` — pendente
- `[~]` — em andamento
- `[x]` — concluído

---

## Incremento 0 — Preparação e Documentação

- [x] Mapear estrutura completa do Next e do Angular.
- [x] Preencher `docs/SDD/inventario.md` com o inventário técnico.
- [x] Preencher `docs/SDD/spec.md` com requisitos funcionais e não-funcionais.
- [x] Preencher `docs/SDD/epecificacao-tecnica.md` com stack, design tokens e arquitetura.
- [x] Preencher `docs/SDD/po.md` com decisões de produto.
- [x] Preencher `docs/SDD/refinamento-cruds-schedulers-schema.md` com modelo de dados e schema de rotas.
- [x] Validar build do Angular após cada incremento.

## Incremento 1 — Fundações (Design System e Layout Raiz)

**Origem Next**: `src/app/globals.css`, `src/app/layout.tsx`

- [x] Atualizar `src/shared/styles/abstracts/_variables.scss` com tokens do Next (fundo escuro, paleta de cores, header/footer height).
- [x] Refatorar `src/shared/styles/base/_reset.scss` para reset completo (box-sizing, margens, tags base).
- [x] Refatorar `src/shared/styles/base/_typography.scss` para tipografia escura Oswald + cores claras, sem conflitos com PrimeNG.
- [x] Atualizar `src/styles.scss` para aplicar o tema escuro globalmente e remover overrides do tema claro anterior.
- [x] Atualizar `src/index.html` (`lang="pt-BR"`, título, meta description, favicons, GTM opcional).
- [x] Implementar layout raiz em `src/app/app.ts` e `src/app/app.html` (Header + `<main class="main__principal">` + Footer + `RouterOutlet`).
- [x] Ajustar `src/app/app.scss` para layout com `min-height: 100dvh`, fundo escuro e padding-top respeitando header.

**Critérios de Aceitação**:
- A aplicação compila sem erros.
- O fundo é escuro (`#201f25`), texto claro (`#fefefe`) e fonte Oswald.
- Header e Footer renderizam em todas as rotas futuras.

---

## Incremento 2 — Header e Footer

**Origem Next**: `src/components/Header/Header.tsx`, `src/components/Footer/Footer.tsx`, `src/components/Divider/Divider.tsx`

- [x] Recriar `src/app/shared/components/header/header.ts` + `.html` + `.scss` com logo, menu hamburguer, dropdown de projetos e estados ativos.
- [x] Recriar `src/app/shared/components/footer/footer.ts` + `.html` + `.scss` com copyright, frase e link.
- [x] Criar `src/app/shared/components/divider/divider.ts` + `.scss` (gradiente amarelo/rosa/roxo/azul).
- [x] Garantir responsividade mobile (< 48rem) e comportamento de dropdown.

**Critérios de Aceitação**:
- Header fixo no topo, backdrop blur e borda gradiente.
- Menu mobile abre/fecha com toggle.
- Dropdown de projetos mostra opções e navega corretamente.
- Footer exibe texto exato do Next e divisores.

---

## Incremento 3 — Página Inicial (Home / About Me)

**Origem Next**: `src/app/(public)/page.tsx`, `src/app/(public)/about/AboutMe.tsx`

- [x] Criar componente `src/app/features/about/about.ts` + `.html` + `.scss` (sobre mim com foto, descrição, botão).
- [x] Criar página `src/app/pages/home/home.ts` + `.html` + `.scss` que renderiza `<app-about>`.
- [x] Configurar rota `/` para carregar `HomeComponent`.
- [x] Importar/copiar foto de perfil para `public/images/favicon-feliz.png` ou usar URL GitHub.

**Critérios de Aceitação**:
- A rota `/` exibe a seção About Me.
- Layout responsivo (foto e texto empilham no mobile).
- Botão "Saiba mais" abre link do Canva em nova aba.

---

## Incremento 4 — Tipos e Store de Projetos

**Origem Next**: `src/types/project.ts`, `src/lib/projects/*`

- [x] Criar `src/app/shared/types/project.interface.ts` (interface `Project` e `ProjectCategory`).
- [x] Criar `src/app/shared/data/projects/categories.ts`.
- [x] Criar `src/app/shared/data/projects/portfolio-personal.data.ts`.
- [x] Criar `src/app/shared/data/projects/portfolio-professional.data.ts`.
- [x] Criar `src/app/core/services/projects/project-store.service.ts` (`getByPortfolio`, `getAll`, `findBySlug`).

**Critérios de Aceitação**:
- Tipos idênticos ao Next.
- Serviço retorna projetos por portfólio, todos e por slug.
- Dados migrados sem perda.

---

## Incremento 5 — Componentes de Projetos

**Origem Next**: `src/components/projects/*`

- [x] Criar `src/app/shared/components/projects/tech-badge`.
- [x] Criar `src/app/shared/components/projects/project-card`.
- [x] Criar `src/app/shared/components/projects/projects-hero`.
- [x] Criar `src/app/shared/components/projects/projects-filters`.
- [x] Criar `src/app/shared/components/projects/projects-grid`.
- [x] Criar `src/app/shared/components/projects/projects-cta`.

**Critérios de Aceitação**:
- Cada componente compilável e visualmente equivalente ao Next.
- Filtros emitem categoria selecionada.
- Grid responsivo (1 → 2 → 4 colunas).
- Card possui hover com translateY, sombra e scale na imagem.

---

## Incremento 6 — Páginas de Projetos

**Origem Next**: `src/app/projects/portfolio-*/page.tsx`, `src/app/projects/[slug]/page.tsx`

- [x] Criar página `src/app/pages/projects/portfolio-personal/portfolio-personal.ts`.
- [x] Criar página `src/app/pages/projects/portfolio-professional/portfolio-professional.ts`.
- [x] Criar página `src/app/pages/projects/project-detail/project-detail.ts`.
- [x] Configurar rotas `/projects/portfolio-personal`, `/projects/portfolio-professional`, `/projects/:slug`.

**Critérios de Aceitação**:
- Filtros funcionam em ambas as páginas.
- Navegação de slug funciona (`/projects/:slug`).
- Página de detalhe mostra galeria, problema, solução, decisões técnicas e links.

---

## Incremento 7 — Login e QR Message

**Origem Next**: `src/app/(auth)/login/Login.tsx`, `src/app/(public)/qr-message/QRMessage.tsx`

- [x] Criar página `src/app/pages/login/login.ts` + `.html` + `.scss` com formulário reativo e toggle de senha.
- [x] Criar página `src/app/pages/qr-message/qr-message.ts` + `.html` + `.scss` com decodificação base64 e animação de digitação.
- [x] Configurar rotas `/login` e `/qr-message`.

**Critérios de Aceitação**:
- Login valida campos vazios e mostra mensagem.
- QR message decodifica `?c=` e exibe mensagem.

---

## Incremento 8 — Dashboard Preservado e Estilizado

**Origem Next**: `src/app/dashboard/page.tsx` (placeholder)

- [x] Simplificar `src/app/pages/dashboard/dashboard.ts` removendo header/footer internos (já providos no layout raiz).
- [x] Manter `HealthService` e indicador de backend.
- [x] Reestilizar `dashboard.scss` com tema escuro.

**Critérios de Aceitação**:
- `/dashboard` continua verificando backend.
- Não há header/footer duplicados.
- Visual compatível com o tema escuro.

---

## Incremento 9 — Assets e Metadados

- [x] Copiar favicons do Next para `public/` do Angular.
- [x] Copiar imagens do Next (`public/images/**/*`) para `public/images/` do Angular.
- [x] Atualizar `index.html` com metadados de SEO e GTM.
- [x] Ajustar caminhos de imagem nos componentes.

**Critérios de Aceitação**:
- Logo, favicon e imagens dos projetos carregam.
- Meta tags presentes.

---

## Incremento 10 — Testes e Validação

- [x] Ajustar `header.spec.ts` para prover `Router` (componente usa `RouterLink`/`RouterLinkActive`).
- [x] Corrigir import do ambiente em `health-service.spec.ts`.
- [ ] Escrever testes Jest para `AboutComponent`.
- [ ] Escrever testes Jest para `ProjectCardComponent`.
- [ ] Escrever testes Jest para `ProjectsFiltersComponent`.
- [ ] Escrever testes Jest para `ProjectDetailComponent`.
- [x] Executar `npm run test` e corrigir falhas.
- [x] Executar `npm run build` e corrigir erros de build.
- [x] Aumentar budgets de `anyComponentStyle` em `angular.json` para evitar warnings.

**Critérios de Aceitação**:
- Testes passam (mínimo `passWithNoTests` mas preferencialmente cobrindo componentes críticos).
- Build de produção gera artefutos sem erro.
- Roteamento e carregamento de imagens funcionam no preview.

---

## Incremento 11 — Componentes Auxiliares

**Origem Next**: `src/components/SocialMedia/SocialMedia.tsx`, `src/components/SkillsSection/SkillsSection.tsx`

- [x] Criar `src/app/shared/components/social-media/social-media` com tipos e inputs.
- [x] Criar `src/app/shared/components/skills-section/skills-section` com tipos e inputs.
- [ ] Ativar `SocialMedia` e/ou `SkillsSection` nas páginas (depende de decisão de produto futura).

---

## Checklist Final

- [x] Todas as páginas Next existem em Angular.
- [x] Todos os componentes migrados.
- [x] Todos os estilos equivalentes.
- [x] Documentação SDD atualizada.
- [x] Nenhum comando Git executado.
- [x] Nenhuma funcionalidade removida.

## Pendências / Próximos Passos

- Adicionar imagens reais dos projetos (`iudev-docs.png` e `comandaflow-2.png` estão pendentes no Next).
- Decidir se a rota `/contact` será implementada ou se o link do Header continuará redirecionando para home.
- Ativar `SocialMedia` e `SkillsSection` em páginas futuras, conforme decisão de produto.
- Implementar metadados dinâmicos por rota via `Meta` service do Angular.
- Escrever testes unitários para os componentes de projetos e `About`.
