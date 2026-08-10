# Especificação Funcional — Portfolio Angular

## Objetivo

Migrar e adaptar o portfólio existente em Next.js (`portfolio-next`) para uma aplicação Angular moderna (`portfolio-angular-frontend`), mantendo fidelidade visual, estrutural e funcional ao template original.

## Fonte da Verdade

Toda decisão funcional, visual e de UX deve ser baseada no projeto Next localizado em:

```
/home/elizabetefabri/repos/projetos-pessoais/portfolio/portfolio-next
```

## Regras Fundamentais

1. **Nunca regredir**: não remover funcionalidades já implementadas, não reverter decisões aprovadas, não apagar documentação existente, não sobrescrever artefatos SDD sem análise, não refatorar grandes áreas sem necessidade técnica.
2. **Evolução incremental**: implementar pequenas partes, validar e avançar.
3. **Documentar tudo**: atualizar a pasta `docs/SDD` a cada implementação relevante.
4. **Proibido comandos Git**: a IA só modifica arquivos locais (`git commit/push/merge/rebase/checkout` são proibidos).
5. **Manter rastreabilidade**: cada componente/página Angular deve ser rastreável ao equivalente Next.

## Escopo

### Dentro do escopo

- Páginas públicas: Home, Projetos Pessoais, Projetos Profissionais, Detalhe do Projeto, QR Message, Login.
- Página de dashboard já existente no Angular (preservar integração com backend `HealthService`).
- Componentes globais: Header, Footer, Divider.
- Componentes de projeto: ProjectsHero, ProjectsFilters, ProjectsGrid, ProjectCard, ProjectsCTA, TechBadge.
- Componentes auxiliares: SocialMedia, SkillsSection.
- Tipos e dados de projetos (`Project`, categorias, stores).
- Estilos globais com design tokens do Next.
- SEO básico: título, descrição, metatags e estrutura acessível.
- Responsividade e acessibilidade (foco visível, `aria-label`, semântica HTML).

### Fora do escopo desta migração

- Backend real de autenticação (login permanece formulário estático).
- Integração com CMS para projetos (dados permanecem em arquivos TypeScript).
- Analytics além do GTM já existente no Next (será portado via scripts no `index.html`).
- Novas funcionalidades não presentes no Next.

## Requisitos Funcionais

| ID | Descrição | Origem Next |
|----|-----------|-------------|
| RF-01 | O layout raiz deve exibir Header fixo, conteúdo principal e Footer fixo em todas as rotas públicas. | `src/app/layout.tsx` |
| RF-02 | A home (`/`) deve apresentar a seção "Sobre mim" com foto, título, descrição e botão "Saiba mais". | `src/app/(public)/page.tsx` + `AboutMe.tsx` |
| RF-03 | O Header deve apresentar logo, nome da marca, menu hamburguer mobile, links "Início" e "Contato", e dropdown "Projetos" com opções "Portfólio Pessoal" e "Portfólio Profissional". | `src/components/Header/Header.tsx` |
| RF-04 | O Footer deve exibir copyright, frase de efeito e link para o site. | `src/components/Footer/Footer.tsx` |
| RF-05 | A página `/projects/portfolio-personal` deve listar projetos pessoais com filtro por categoria. | `src/app/projects/portfolio-personal/page.tsx` |
| RF-06 | A página `/projects/portfolio-professional` deve listar projetos profissionais com filtro por categoria. | `src/app/projects/portfolio-professional/page.tsx` |
| RF-07 | A página `/projects/:slug` deve exibir detalhes do projeto: título, categoria, descrição, stack, problema, solução, decisões técnicas, galeria e links para repo/demo. | `src/app/projects/[slug]/page.tsx` |
| RF-08 | O filtro de projetos deve conter as categorias: Todos, Frontend, Backend, Cloud, Estudos. | `src/lib/projects/categories.ts` |
| RF-09 | A página `/qr-message` deve decodificar a mensagem base64 da query string `?c=` e exibi-la com efeito de digitação. | `src/app/(public)/qr-message/QRMessage.tsx` |
| RF-10 | A página `/login` deve apresentar formulário com e-mail, senha (com toggle de visibilidade), validação básica e botão de voltar. | `src/app/(auth)/login/Login.tsx` |
| RF-11 | O dashboard existente do Angular (`/dashboard`) deve continuar funcionando e conectando ao backend via `HealthService`. | `src/app/pages/dashboard/dashboard.ts` |

## Requisitos Não-Funcionais

| ID | Descrição |
|----|-----------|
| RNF-01 | Código com tipagem estrita, evitando `any`. |
| RNF-02 | Componentes standalone, reativos com `signal` e `input`/`output` quando aplicável. |
| RNF-03 | Estilos em SCSS, preferencialmente com escopo de componente. |
| RNF-04 | Design responsivo (mobile-first) com breakpoints próximos aos do Next (48rem, 64rem). |
| RNF-05 | Acessibilidade: labels ARIA, navegação por teclado, contraste. |
| RNF-06 | SEO: `lang="pt-BR"`, metas description/og, favicon. |
| RNF-07 | Testes unitários com Jest para componentes críticos (header, home, project-card). |

## Decisões de Produto

- O conteúdo da rota `/about` não será criado separadamente; será parte da home, conforme o Next.
- O dashboard Angular existente será preservado para não perder a integração com backend, mas reestilizado com o mesmo tema escuro.
- O componente `SocialMedia` será implementado, mas sua exibição na home seguirá o Next (comentado no original, mas disponível para futura ativação).
- `SkillsSection` também será implementado como componente reutilizável, mas ainda não será exibido na home (está comentado no Next).