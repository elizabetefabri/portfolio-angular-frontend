# Refinamento — Página de Projetos Pessoais

## 1. Visão geral

Objetivo: evoluir a página `/projects/portfolio-personal` para ser totalmente responsiva, adotar mobile-first, corrigir o carrossel de detalhes, enriquecer o card "Sobre", adicionar uma galeria com lightbox, completar os cards dos projetos (incluindo Agenda Gourmet) e cobrir a stack backend com diagrama e banco de dados.

## 2. Requisitos refinados

### 2.1 Grid de projetos (`projects-grid`)

- **Desktop (>= 80rem)**: 5 colunas fixas, cada card com largura base de ~18% + `gap` de `1.5rem`.
- **Tablet (>= 48rem e < 80rem)**: 3 colunas.
- **Mobile (< 48rem)**: 1 coluna.
- Usar `rem` para gaps, paddings, tamanhos de fonte e `max-width`/`min-width`.
- Container com `width: 100%`, `max-width` em `rem` e `padding` em `%` para permitir respiração nas laterais.
- Mobile-first: estilos base sem media query são para mobile; adicionar `min-width` para tablets/desktops.

### 2.2 Cards (`project-card`)

- Altura da imagem em `%` do aspect-ratio (3/2) em vez de `px` fixo.
- Espaçamentos em `rem` e `gap` em `rem`/`%`.
- Ação "Ver projeto" deve abrir a rota `/projects/:slug` na mesma aba (remover `target="_blank"` do link interno, manter para GitHub/Demo).
- Tamanhos de fonte fluidos via `clamp()` ou `rem`.

### 2.3 Página de detalhe (`project-detail`)

#### Carrossel

- Exibir imagem ativa a partir de um índice controlado por sinal (`currentIndex`).
- Botões `<` e `>` devem navegar entre imagens e fazer loop (anterior no primeiro vai para o último, próximo no último vai para o primeiro).
- Thumbnails devem ser clicáveis e destacar o ativo.
- Suporte a navegação por teclado (setas esquerda/direita).
- Tratamento para projetos com apenas 1 imagem: ocultar controles.

#### Card "Sobre"

- Manter descrição introdutória.
- Adicionar/incluir as seções **Problema**, **Solução** e **Decisões Técnicas** dentro do contexto do card, mantendo visual limpo e responsivo.

#### Galeria

- Seção "Galeria" abaixo do carrossel/contexto.
- Cada imagem da galeria ao clicar abre em tamanho completo (lightbox) com overlay escuro, botão de fechar e navegação se houver mais de uma imagem.

#### Aba Backend

- Para projetos de categoria `Backend`, exibir uma seção adicional "Backend" com:
  - Contexto e objetivo da API.
  - Diagrama arquitetural em formato acessível (texto/ASCII + descrição).
  - Tecnologias: linguagem, framework/padrão, banco de dados, containerização.
  - Endpoints/fluxos principais.

### 2.4 Projetos a completar/adicionar

- **Dose Certa**: já existe, verificar se dados estão completos.
- **Caderno Inteligente**: já existe, verificar se dados estão completos.
- **Rollout Service**: já existe, verificar se dados estão completos.
- **Agenda Gourmet**: novo card, criar dados plausíveis (agenda de receitas/culinária) com logo/galeria placeholders.

### 2.5 Testes unitários

Criar `.spec.ts` para:

- `project-store.service`
- `portfolio-personal`
- `portfolio-professional`
- `project-detail`
- `project-card`
- `projects-grid`
- `projects-filters`
- `projects-hero`
- `projects-cta`
- `tech-badge`

Manter cobertura mínima de criação dos componentes e comportamentos principais (filtro, navegação, carrossel).

### 2.6 Responsividade geral

- Mobile-first em todos os componentes tocados.
- Evitar breakpoints `max-width` quando possível; usar `min-width` para escalar do menor para o maior.
- Substituir valores fixos em `px` por `rem`/`%`/`clamp`.
- Garantir que a página não quebre abaixo de `320px` (20rem).

## 3. Decisões técnicas de implementação

- Ajustar `projects-grid.scss` para layout CSS Grid com `minmax()` e `repeat()` usando porcentagens e `rem`.
- Refatorar `project-detail.ts` para adicionar `currentIndex` e métodos de navegação do carrossel e lightbox.
- Criar componente/lightbox inline na página de detalhe para evitar nova dependência.
- Estender a interface `Project` para incluir um campo opcional `backendContext` com dados da aba backend.
- Criar placeholders SVG/PNG para projetos sem imagens reais (`logo-agenda-gourmet` e galeria).
- Configurar `setup-jest.ts` para resolver `jest-preset-angular`.
