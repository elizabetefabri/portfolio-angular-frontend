# Inventário Técnico — Migração Portfolio (Next → Angular)

## 1. Fonte da Verdade

- **Projeto Next.js**: `/home/elizabetefabri/repos/projetos-pessoais/portfolio/portfolio-next`
- **Projeto Angular destino**: `/home/elizabetefabri/repos/projetos-pessoais/portfolio/portfolio-angular-frontend`

## 2. Estrutura do Projeto Next

### 2.1 Configuração / Build

| Arquivo | Descrição |
|---------|-----------|
| `package.json` | Next 16.0.1, React 19.2.0, TypeScript 5, Tailwind 4, CSS Modules, Jest 30 |
| `next.config.ts` | Configuração do Next |
| `postcss.config.mjs` | Tailwind PostCSS |
| `tsconfig.json` | Paths com `@/*` |
| `jest.config.js` / `jest.setup.ts` | Testes unitários |

### 2.2 Páginas / Rotas (App Router)

| Rota Next | Arquivo | Descrição |
|-----------|---------|-----------|
| `/` | `src/app/(public)/page.tsx` | Homepage com componente `AboutMe` |
| (sobre) | `src/app/(public)/about/AboutMe.tsx` | Componente de apresentação pessoal usado na home |
| `/projects/portfolio-personal` | `src/app/projects/portfolio-personal/page.tsx` | Lista de projetos pessoais com filtros |
| `/projects/portfolio-professional` | `src/app/projects/portfolio-professional/page.tsx` | Lista de projetos profissionais com filtros |
| `/projects/[slug]` | `src/app/projects/[slug]/page.tsx` | Detalhe de um projeto |
| `/qr-message` | `src/app/(public)/qr-message/QRMessage.tsx` | Decodificador de mensagem via query `?c=` |
| `/login` | `src/app/(auth)/login/Login.tsx` | Formulário de login estático (sem backend) |
| `/dashboard` | `src/app/dashboard/page.tsx` | Página placeholder (`<h1>EU SOU O DASHBOARD</h1>`) |

### 2.3 Layouts

| Arquivo | Escopo |
|---------|--------|
| `src/app/layout.tsx` | Layout root com `html/body`, SEO, GTM, JSON-LD, `Header`, `Footer` |
| `src/app/(public)/layout.tsx` | Layout de grupo público — envolve em `<main class="main__principal">` |
| `src/app/(auth)/layout.tsx` | Layout de autenticação com fundo gradiente e `<main class="main__auth">` |
| `src/app/projects/layout.tsx` | Envolvido em `<main class="main__principal">` |
| `src/app/dashboard/layout.tsx` | Envolvido em `<main class="main__dashboard">` |

### 2.4 Componentes Reutilizáveis

| Componente | Arquivos |
|------------|----------|
| `Header` | `src/components/Header/Header.tsx` + `.module.css` |
| `Footer` | `src/components/Footer/Footer.tsx` + `.module.css` |
| `Divider` | `src/components/Divider/Divider.tsx` + `.module.css` |
| `SocialMedia` | `src/components/SocialMedia/SocialMedia.tsx` + `.module.css` |
| `SkillsSection` | `src/components/SkillsSection/SkillsSection.tsx` + `.module.css` |
| `ProjectsHero` | `src/components/projects/ProjectsHero.tsx` + `.module.css` |
| `ProjectsFilters` | `src/components/projects/ProjectsFilters.tsx` + `.module.css` |
| `ProjectsGrid` | `src/components/projects/ProjectsGrid.tsx` + `.module.css` |
| `ProjectCard` | `src/components/projects/ProjectCard.tsx` + `.module.css` |
| `ProjectsCTA` | `src/components/projects/ProjectsCTA.tsx` + `.module.css` |
| `TechBadge` | `src/components/projects/TechBadge.tsx` + `.module.css` |

### 2.5 Dados / Tipos

| Arquivo | Conteúdo |
|---------|----------|
| `src/types/project.ts` | `ProjectCategory`, `Project` |
| `src/lib/projects/categories.ts` | Categorias e filtro padrão |
| `src/lib/projects/portfolioPersonal.ts` | Array de projetos pessoais |
| `src/lib/projects/portfolioProfessional.ts` | Array de projetos profissionais |
| `src/lib/projects/projectStore.ts` | `getProjectsByPortfolio`, `getAllProjects`, `findProjectBySlug` |
| `src/lib/projects/projectTemplate.ts` | Template para novos projetos |

### 2.6 Estilos Globais

| Arquivo | Uso |
|---------|-----|
| `src/app/globals.css` | Variáveis CSS, reset, regras globais (ativo) |
| `src/app/(public)/globals.css` | Descontinuado (comentado como não usado) |
| Vários `*.module.css` | Escopos por componente/página |

### 2.7 Assets Públicos

| Caminho | Conteúdo |
|---------|----------|
| `public/images/favicon-feliz.png` | Logo do header |
| `public/images/icons/menu.png` | Ícone do menu mobile |
| `public/images/icons/github.png`, `linkedin.png`, `email.png`, `download.png` | Ícones de contato |
| `public/images/projects/*` | Imagens dos projetos |
| `public/favicon.ico`, `public/favicon-*.png`, etc. | Favicons |
| `public/cover-site.png` | Open Graph |
| `public/docs/*` | Documentação do projeto Next |

### 2.8 SEO / Metadados

| Fonte | Itens |
|-------|-------|
| `src/app/layout.tsx` | `metadata` (title, description, OG, Twitter, icons, robots), GTM `G-EJJ9Q83L2Q`, JSON-LD Schema Person |

## 3. Estrutura do Projeto Angular (Atual)

### 3.1 Configuração / Build

| Arquivo | Descrição |
|---------|-----------|
| `package.json` | Angular 21, TypeScript 5.9, SCSS, PrimeNG, NgRx, Jest, Vitest |
| `angular.json` | Build com assets em `public/` |
| `tsconfig*.json` | Configurações TypeScript |
| `jest.config.ts` / `tsconfig.jest.json` | Testes Jest |

### 3.2 Aplicação

| Arquivo | Descrição |
|---------|-----------|
| `src/main.ts` | Bootstrap com `appConfig` |
| `src/app/app.config.ts` | Provedores: roteador, HTTP com interceptor, NgRx, devtools |
| `src/app/app.routes.ts` | Rotas: `'' → /dashboard`, `/dashboard` |
| `src/app/app.ts` | Componente raiz com `RouterOutlet` |
| `src/app/app.html` | `<router-outlet />` |
| `src/app/app.scss` | Layout base com sidebar/collapse (template anterior) |

### 3.3 Páginas / Componentes Existentes

| Arquivo | Descrição |
|---------|-----------|
| `src/app/pages/dashboard/dashboard.ts` | Componente dashboard com `HealthService` e sinal de status |
| `src/app/pages/dashboard/dashboard.html` | Layout com `app-header`, `app-breadcrumbs`, `app-footer` e `router-outlet` |
| `src/app/shared/components/header/header.ts` | Header placeholder (título via `BreadcrumbService`) |
| `src/app/shared/components/footer/footer.ts` | Footer placeholder |
| `src/app/shared/components/breadcrumbs/breadcrumbs.ts` | Breadcrumb dinâmico (reutilizável) |

### 3.4 Core / Serviços

| Arquivo | Descrição |
|---------|-----------|
| `src/app/core/services/api/api-service.ts` | Wrapper genérico HTTP (`get/post/put/delete`) |
| `src/app/core/services/health/health-service.ts` | `GET /health` do backend |
| `src/app/core/services/Breadcrumb/breadcrumb-service.ts` | Sinais para breadcrumb, pageTitle e hidden |
| `src/app/core/interceptors/api-error-interceptor.ts` | Interceptor de erros funcional |

### 3.5 Tipos / Interfaces

| Arquivo | Descrição |
|---------|-----------|
| `src/app/shared/types/api-response.interface.ts` | Envelope da API |
| `src/app/shared/types/breadcrumb.interface.ts` | `BreadcrumbItem` |

### 3.6 Estilos

| Arquivo | Descrição |
|---------|-----------|
| `src/styles.scss` | Importa `_variables.scss`, `_reset.scss`, `_typography.scss` e PrimeIcons |
| `src/shared/styles/abstracts/_variables.scss` | Variáveis de layout, cores, tipografia |
| `src/shared/styles/base/_reset.scss` | Reset parcial |
| `src/shared/styles/base/_typography.scss` | Tipografia com fonte Oswald importada do Google Fonts |

### 3.7 Assets Públicos

| Caminho | Conteúdo |
|---------|----------|
| `public/favicon.ico` | Favicon padrão |
| `public/favicon.png` | Ícone alternativo |

## 4. Mapeamento de Componentes / Páginas (Next → Angular)

| Origem Next | Destino Angular |
|-------------|-----------------|
| `src/app/layout.tsx` | `src/app/app.ts` + `src/app/app.html` (layout raiz) |
| `src/app/(public)/page.tsx` | `src/app/pages/home/home.ts` (componente standalone) |
| `src/app/(public)/about/AboutMe.tsx` | `src/app/features/about/about.ts` ou `home` (embed) |
| `src/components/Header/Header.tsx` | `src/app/shared/components/header/header.ts` |
| `src/components/Footer/Footer.tsx` | `src/app/shared/components/footer/footer.ts` |
| `src/components/Divider/Divider.tsx` | `src/app/shared/components/divider/divider.ts` |
| `src/components/SocialMedia/SocialMedia.tsx` | `src/app/shared/components/social-media/social-media.ts` |
| `src/components/SkillsSection/SkillsSection.tsx` | `src/app/shared/components/skills-section/skills-section.ts` |
| `src/app/projects/portfolio-personal/page.tsx` | `src/app/pages/projects/portfolio-personal/portfolio-personal.ts` |
| `src/app/projects/portfolio-professional/page.tsx` | `src/app/pages/projects/portfolio-professional/portfolio-professional.ts` |
| `src/app/projects/[slug]/page.tsx` | `src/app/pages/projects/project-detail/project-detail.ts` |
| `src/components/projects/*` | `src/app/shared/components/projects/*` |
| `src/lib/projects/*` | `src/app/shared/data/projects/*` ou `src/app/core/services/projects/*` |
| `src/types/project.ts` | `src/app/shared/types/project.interface.ts` |
| `src/app/(auth)/login/Login.tsx` | `src/app/pages/login/login.ts` |
| `src/app/(public)/qr-message/QRMessage.tsx` | `src/app/pages/qr-message/qr-message.ts` |

## 5. Dependências de Ícones

- Next utiliza `lucide-react` para ícones (`ChevronDown`, `LogIn`, `ArrowLeft`, `Eye`, `EyeOff`, `Github`, `ExternalLink`, `ChevronLeft`, `ChevronRight`).
- Angular pode usar a biblioteca `lucide-angular` (não instalada atualmente) ou os ícones SVG do `public/images/icons/*` já existentes.
- **Decisão**: migrar mantendo a mesma identidade visual. Ícones muito pequenos serão reaproveitados via arquivos `.png` ou SVG inline. A seta do dropdown pode usar CSS (`rotate`) ou a fonte `lucide-angular` se for instalada.

## 6. Notas e Dúvidas

- O Next não possui `about/page.tsx`; o conteúdo `AboutMe` é renderizado diretamente na home. O Angular seguirá o mesmo padrão: a rota `/` exibirá `AboutMe`.
- A página `/dashboard` do Next é placeholder; no Angular ela já possui integração com backend (`HealthService`). **Será preservada** e apenas realinhada visualmente ao tema.
- A página `/login` do Next é estética (sem autenticação real). No Angular ela será migrada como formulário reativo, mas sem submissão real até que haja definição.
- O `SocialMedia` e `SkillsSection` estão comentados no Next; serão criados como componentes para uso futuro, mas não ativados na home se a fonte os mantiver comentada.