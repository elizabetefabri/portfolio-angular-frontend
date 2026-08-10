# Especificação Técnica — Portfolio Angular

## Stack Tecnológica

O projeto Angular já está inicializado com as dependências abaixo. A migração deve reaproveitá-las ao máximo:

| Tecnologia | Versão / Uso |
|------------|-------------|
| Angular | 21.2.x (standalone components, signals, `inject`) |
| TypeScript | 5.9.x (strict mode) |
| SCSS | Estilos globais e por componente |
| RxJS | 7.8.x — para `HttpClient` e serviços assíncronos |
| NgRx | 21.1.x — estado global disponível, mas não obrigatório para features simples |
| PrimeNG / PrimeIcons / PrimeFlex | Bibliotecas de UI instaladas, porém serão usadas com cautela para não conflitar com o design escuro do Next |
| Jest | 30.4.x — testes unitários |
| Vitest | 4.0.8 — alternativa de testes, já configurada |

> **Nota**: o Next usava `lucide-react` para ícones. No Angular podemos usar SVG inline ou os ícones PNG em `public/images/icons/`. A instalação de `lucide-angular` deve ser avaliada futuramente se necessário.

## Design Tokens (extraídos do `globals.css` do Next)

As variáveis CSS abaixo devem ser unificadas no design system do Angular (`src/shared/styles/abstracts/_variables.scss` e `src/styles.scss`):

| Token | Valor | Uso |
|-------|-------|-----|
| `--background` | `rgb(32, 31, 37)` | Fundo geral escuro |
| `--background-footer` | `#1a1a1f` | Fundo do footer |
| `--background-icon-footer` | `rgba(170,170,170,0.062)` | Fundo de ícones sociais |
| `--background-icon-footer-hover` | `rgba(170,170,170,0.12)` | Hover de ícones sociais |
| `--background-text` | `#d9d9d9` | Texto secundário claro |
| `--color-gray-70` | `#777777` | Bordas, texto terciário |
| `--color-gray-90` | `#999999` | Descrições |
| `--text` | `#fefefe` | Texto principal |
| `--black` | `#000100` | Preto |
| `--foreground` | `#0e0e11` | Fundo de elevação |
| `--color-amarelo` | `#ffb84d` | CTAs, títulos |
| `--color-amarelo-shadow` | `#ffcc70` | Hover de CTAs |
| `--color-rosa` | `#ea4c89` | Links ativos |
| `--color-rose` | `#ff8899` | Botões outline |
| `--color-rose-hover` | `#ff7086` | Hover de botões outline |
| `--color-roxo` | `#8f48eb` | Badges de tecnologia |
| `--color-azul` | `#1da1f2` | Detalhes |
| `--color-green-10` | `#ccffeb` | Texto verde claro |
| `--color-green-50` | `#00ff88` | Verde neon (QR message) |
| `--header-height` | `5rem` | Altura do header |
| `--footer-height` | `7rem` | Altura reservada ao footer |
| `--font-oswald` | `"Oswald", sans-serif` | Fonte principal |

### Tipografia

- Fonte: **Oswald** (Google Fonts), pesos 300, 400, 600, 700.
- Títulos principais: `2.5rem` / `700` / amarelo.
- Subtítulos: `1.2rem` / `400` / cinza 90.
- Texto corpo: `1rem`–`1.2rem` / `400` / branco.

### Breakpoints

| Nome | Largura | Equivalente Next |
|------|---------|------------------|
| Mobile | < 48rem | iPhone / pequenos |
| Tablet | 48rem – 64rem | Tablets |
| Desktop | ≥ 64rem | Desktops |
| Grande | ≥ 90rem | Monitores grandes |

## Arquitetura de Componentes

### Organização de Pastas Proposta

```
src/app/
├── app.config.ts
├── app.routes.ts
├── app.ts
├── app.html
├── app.scss
├── core/
│   ├── interceptors/
│   │   └── api-error-interceptor.ts
│   └── services/
│       ├── api/
│       │   └── api-service.ts
│       ├── health/
│       │   └── health-service.ts
│       ├── Breadcrumb/
│       │   └── breadcrumb-service.ts
│       └── projects/
│           └── project-store.service.ts
├── features/
│   ├── about/
│   │   ├── about.ts
│   │   ├── about.html
│   │   └── about.scss
│   ├── qr-message/
│   │   ├── qr-message.ts
│   │   ├── qr-message.html
│   │   └── qr-message.scss
│   └── login/
│       ├── login.ts
│       ├── login.html
│       └── login.scss
├── pages/
│   ├── home/
│   │   ├── home.ts
│   │   ├── home.html
│   │   └── home.scss
│   ├── dashboard/
│   │   ├── dashboard.ts
│   │   ├── dashboard.html
│   │   └── dashboard.scss
│   └── projects/
│       ├── portfolio-personal/
│       │   └── ...
│       ├── portfolio-professional/
│       │   └── ...
│       └── project-detail/
│           └── ...
├── shared/
│   ├── components/
│   │   ├── header/
│   │   ├── footer/
│   │   ├── divider/
│   │   ├── breadcrumbs/
│   │   ├── social-media/
│   │   ├── skills-section/
│   │   └── projects/
│   │       ├── projects-hero/
│   │       ├── projects-filters/
│   │       ├── projects-grid/
│   │       ├── project-card/
│   │       ├── projects-cta/
│   │       └── tech-badge/
│   └── types/
│       ├── project.interface.ts
│       ├── api-response.interface.ts
│       └── breadcrumb.interface.ts
└── environment/
    ├── environment.ts
    └── environment.prod.ts
```

> A pasta `features` será usada para componentes/páginas autocontidos (about, login, qr-message). A pasta `pages` será usada para rotas compostas (home, dashboard, projects).

### Padrões de Implementação

1. **Componentes standalone** com `imports: [...]`, sem `NgModule`.
2. **Injeção de dependências** via `inject()` (signals ou serviços).
3. **Estado local** com `signal<T>()` e `computed()`.
4. **Comunicação pai/filho** com `@Input` / `@Output` (preferencialmente transformadores tipados para `input.required` quando Angular 21 suportar).
5. **Roteamento** via lazy-load com `loadComponent` para manter o bundle enxuto.
6. **Serviços** com `providedIn: 'root'`.
7. **Estilos** em SCSS próprio do componente, com prefixo de classe semelhante ao CSS Module (ex: `.about-section`, `.project-card`).

## Mapeamento de Roteamento

| Rota Angular | Componente | Origem Next |
|--------------|-----------|-------------|
| `/` | `HomeComponent` | `app/(public)/page.tsx` |
| `/projects/portfolio-personal` | `PortfolioPersonalComponent` | `app/projects/portfolio-personal/page.tsx` |
| `/projects/portfolio-professional` | `PortfolioProfessionalComponent` | `app/projects/portfolio-professional/page.tsx` |
| `/projects/:slug` | `ProjectDetailComponent` | `app/projects/[slug]/page.tsx` |
| `/qr-message` | `QrMessageComponent` | `app/(public)/qr-message/QRMessage.tsx` |
| `/login` | `LoginComponent` | `app/(auth)/login/Login.tsx` |
| `/dashboard` | `DashboardComponent` (existente) | `app/dashboard/page.tsx` |
| `**` | Redirecionar para `/` | — |

## Integração com Backend

- O `ApiService` e `HealthService` existentes serão preservados.
- Os projetos serão carregados a partir de arquivos TypeScript no primeiro incremento (`ProjectStoreService`), sem dependência de backend.
- Futuramente, pode-se migrar os dados para `/api/v1/projects` sem alterar a interface pública do serviço.

## SEO e Metadados

- O `index.html` deve ter `lang="pt-BR"`, `title` atualizado, meta `description` e `viewport`.
- Open Graph e Twitter Cards podem ser inseridos via `Meta` service do Angular na rota `/`, se necessário, mas o MVP pode manter apenas no `index.html`.
- Favicon: reaproveitar `public/favicon.ico` do Angular ou copiar favicons do Next.

## Testes

- Framework: Jest + `jest-preset-angular`.
- Cobertura mínima: componentes críticos (`Header`, `Footer`, `About`, `ProjectCard`, `ProjectsFilters`).
- Padrão: AAA (Arrange, Act, Assert), detecção de `signal` e `ChangeDetection`.

## Riscos e Mitigações

| Risco | Mitigação |
|-------|-----------|
| Conflito de tema claro do template atual com o dark do Next | Substituir variáveis e estilos globais; resetar cores base. |
| Dependências do template (PrimeNG) conflitarem com CSS puro | Usar PrimeNG apenas se necessário; componentes próprios com SCSS. |
| Ícones `lucide-react` não estarem no Angular | Usar SVG inline ou PNG existente no `public/images/icons/`. |
| `ProjectStore` estático ter que migrar para API futura | Isolar lógica em serviço com interface clara. |