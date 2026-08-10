# Modelo de Dados e Schema de Rotas — Portfolio Angular

## 1. Modelo de Dados: `Project`

O domínio principal da aplicação é o portfólio de projetos. O tipo é idêntico ao Next.

### 1.1 `ProjectCategory`

```ts
export type ProjectCategory = 'Frontend' | 'Backend' | 'Cloud' | 'Estudos';
```

### 1.2 `Project`

```ts
export interface Project {
  slug: string;
  title: string;
  description: string;
  category: ProjectCategory;
  techs: string[];
  image: {
    src: string;
    alt: string;
  };
  repoUrl: string;
  demoUrl?: string;
  problem: string;
  solution: string;
  technicalDecisions: string[];
  gallery?: Array<{ src: string; alt: string }>;
}
```

### 1.3 Categorias e Filtro Padrão

```ts
export const PROJECT_CATEGORIES: ProjectCategory[] = [
  'Frontend',
  'Backend',
  'Cloud',
  'Estudos',
];

export type CategoryFilter = 'Todos' | ProjectCategory;
export const DEFAULT_FILTER: CategoryFilter = 'Todos';
```

### 1.4 Portfolio Key

```ts
export type PortfolioKey = 'portfolio-personal' | 'portfolio-professional';
```

## 2. Project Store

Serviço singleton (`ProjectStore`) para acesso aos dados estáticos.

```ts
@Injectable({ providedIn: 'root' })
export class ProjectStore {
  getProjectsByPortfolio(portfolio: PortfolioKey): Project[];
  getAllProjects(): Project[];
  findProjectBySlug(slug: string): Project | undefined;
  getPortfolioOf(slug: string): PortfolioKey;
}
```

### Origem dos Dados

- `src/app/shared/data/projects/portfolio-personal.data.ts`
- `src/app/shared/data/projects/portfolio-professional.data.ts`

Futuramente, pode-se substituir por chamada HTTP sem alterar a interface pública do serviço.

## 3. Schema de Rotas

| Rota | Componente | Parâmetros | Lazy | Layout | Observação |
|------|-----------|-----------|------|--------|------------|
| `/` | `HomeComponent` | — | Sim | Root | Renderiza `AboutComponent` |
| `/projects/portfolio-personal` | `PortfolioPersonalComponent` | — | Sim | Root | Usa `ProjectStore` |
| `/projects/portfolio-professional` | `PortfolioProfessionalComponent` | — | Sim | Root | Usa `ProjectStore` |
| `/projects/:slug` | `ProjectDetailComponent` | `slug` | Sim | Root | Resolve projeto por slug |
| `/qr-message` | `QrMessageComponent` | query `c` | Sim | Root | Decodifica base64 |
| `/login` | `LoginComponent` | — | Sim | Auth | Fundo gradiente, sem header/footer |
| `/dashboard` | `DashboardComponent` | — | Sim | Root | Preserva `HealthService` |
| `**` | redirectTo `/` | — | — | — | 404 cai na home |

### Schema de Componentes

```
App
├── Header
├── RouterOutlet
│   ├── Home
│   │   └── About
│   ├── PortfolioPersonal
│   │   ├── ProjectsHero
│   │   ├── ProjectsFilters
│   │   ├── ProjectsGrid
│   │   │   └── ProjectCard[]
│   │   │       └── TechBadge[]
│   │   └── ProjectsCTA
│   ├── PortfolioProfessional
│   │   └── (mesma estrutura)
│   ├── ProjectDetail
│   │   ├── Carousel / Galeria
│   │   ├── Sobre
│   │   ├── Stack (TechBadge[])
│   │   ├── Ações (GitHub / Demo)
│   │   ├── Problema
│   │   ├── Solução
│   │   ├── Decisões Técnicas
│   │   └── Galeria Completa
│   ├── QrMessage
│   ├── Login
│   └── Dashboard
└── Footer
```

## 4. Decisões Técnicas sobre Dados

- **Por que JSON estático em vez de backend?** O Next não consome backend para projetos. Dados estão em arquivos TypeScript. Portanto, o Angular seguirá o mesmo padrão, encapsulado em um serviço.
- **Por que `interface` e não `type`?** Angular Style Guide recomenda `interface` para modelos de dados, mas o Next usava `type`. Será mantido `interface` no Angular para permitir injeção de interface e consistência com style guide.
- **Por que `PortfolioKey`?** Permite identificar a origem do projeto e calcular o link "Voltar" na página de detalhe.

## 5. Scheduler / Jobs

Não há jobs, schedulers ou processos em background neste front-end. O único timer/efeito é:

- Animação de digitação em `QrMessage` (efeito CSS, não scheduler).

## 6. CRUDs

O front-end não realiza operações CRUD em backend nesta fase. As operações são:

- **R**ead: listar projetos, buscar por slug, filtrar por categoria.
- Login é formulário estático (sem autenticação real).

Futuramente, pode haver:

- CRUD de projetos via dashboard administrativo, consumindo `/api/v1/projects`.

## 7. Componentes Reutilizáveis e Comunicação

| Componente | Input | Output |
|------------|-------|--------|
| `ProjectsHero` | `title`, `subtitle` | — |
| `ProjectsFilters` | `value` | `valueChange` |
| `ProjectsGrid` | `projects: Project[]` | — |
| `ProjectCard` | `project: Project` | — |
| `TechBadge` | `tech: string` | — |
| `ProjectsCTA` | — | — |
| `Header` | `showLogo: boolean = true` | — |
| `Footer` | — | — |
| `Divider` | — | — |
| `SocialMedia` | `contatoTitle`, `links` | — |
| `SkillsSection` | `skills` | — |

## 8. Estado Local vs. Global

- **Estado local (signals)**: menu aberto no Header, filtro de categoria nas páginas de projetos, toggle de senha no login.
- **Estado global (serviços)**: `ProjectStore`, `BreadcrumbService`.
- **NgRx**: disponível, mas não usado nesta fase. Pode ser adotado se o dashboard/admin crescer.