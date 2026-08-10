# Decisões de Produto (PO) — Portfolio Angular

## Contexto

O objetivo é migrar o portfólio de Next.js para Angular sem perder a identidade visual e funcional já validada no Next. O Next é a **fonte da verdade** para todas as decisões.

## Decisões Tomadas

### DP-01: Tema escuro como padrão

**Decisão**: O Angular adotará o tema escuro do Next (`--background: rgb(32, 31, 37)`) como fundo global, descartando o tema claro atual do template inicial.

**Motivação**: Fidelidade visual ao template Next aprovado.

**Impacto**: Substituição de variáveis CSS, cores e tipografia em todo o projeto.

---

### DP-02: Componentes standalone e signals

**Decisão**: Todos os novos componentes serão `standalone` e usarão `signal`/`computed` para estado local.

**Motivação**: Angular Style Guide, melhor tree-shaking e alinhamento com Angular 21.

**Impacto**: Nenhum `NgModule` será criado para as novas features.

---

### DP-03: Preservar serviços e funcionalidades existentes do Angular

**Decisão**: `ApiService`, `HealthService`, `BreadcrumbService` e interceptor de erros serão mantidos.

**Motivação**: Regra "nunca regredir" do plano de implementação. O dashboard existente continua funcional.

**Impacto**: O dashboard será mantido, mas reestilizado. O `BreadcrumbService` poderá ser usado em páginas futuras se necessário.

---

### DP-04: Dados de projetos estáticos em TypeScript

**Decisão**: Projetos serão armazenados em arquivos TypeScript (`*.data.ts`) e acessados via `ProjectStoreService`, sem backend.

**Motivação**: Espelhar o comportamento do Next (`src/lib/projects/*.ts`).

**Impacto**: Facilidade de manutenção e migração. Futuramente pode-se trocar o `ProjectStore` por requisição HTTP sem alterar componentes.

---

### DP-05: A página de login é estática

**Decisão**: A rota `/login` conterá apenas um formulário visual com validação local. Não haverá autenticação real nesta fase.

**Motivação**: O Next não implementa autenticação; o login é um formulário demonstrativo.

**Impacto**: Nenhuma integração com endpoint de login. Mensagem de sucesso é simulada.

---

### DP-06: Home e About são a mesma página

**Decisão**: Não haverá rota `/about` separada. O conteúdo "Sobre mim" será renderizado na rota raiz `/`.

**Motivação**: O Next não possui `about/page.tsx`; `AboutMe` é um componente importado em `page.tsx`.

**Impacto**: Roteamento simplificado.

---

### DP-07: Header e Footer em todas as rotas (exceto login)

**Decisão**: O `AppComponent` será o layout raiz com Header e Footer. A página de login terá seu próprio layout visual sem header/footer.

**Motivação**: Espelhar `src/app/layout.tsx` do Next. A rota de autenticação `(auth)` no Next possui layout próprio.

**Impacto**: Refatoração do `AppComponent` e da página `Dashboard` para não duplicar cabeçalhos.

---

### DP-08: Manter `SocialMedia` e `SkillsSection` como componentes reutilizáveis

**Decisão**: Criar `SocialMediaComponent` e `SkillsSectionComponent`, mesmo estando comentados no Next.

**Motivação**: Preparar ativação futura sem refatoração e manter o inventário completo.

**Impacto**: Componentes existirão na base de código, mas não serão renderizados na home nesta fase.

---

### DP-09: Breakpoints e responsividade idênticos ao Next

**Decisão**: Usar os mesmos breakpoints principais do Next: 48rem (mobile) e 64rem (desktop).

**Motivação**: Fidelidade visual e comportamental.

**Impacto**: Media queries em SCSS serão escritas com `rem` e os mesmos thresholds.

---

### DP-10: SEO mínimo via `index.html` e `Meta` service

**Decisão**: O `index.html` terá metadados básicos (title, description, OG, favicon, lang). Metadados dinâmicos por rota podem ser adicionados futuramente com o `Meta` service do Angular.

**Motivação**: O Next usa `metadata` e `metadataBase` no layout. O Angular não tem metadados automáticos por rota, então o mínimo viável é feito no `index.html`.

**Impacto**: SEO cobre a home. Páginas de projeto podem receber títulos dinâmicos em incremento futuro.

## Dúvidas Pendentes

- O efeito de carrossel da página de detalhe deve ter interatividade real (cliques nas thumbnails/navegação) ou será apenas visual como no Next?
  - **Resposta**: No Next o carrossel é estático (imagem fixa + thumbnails visuais). O Angular manterá o mesmo comportamento visual.

- Devemos instalar `lucide-angular` para ter os mesmos ícones?
  - **Resposta**: Não nesta fase. Usaremos SVG inline, arquivos PNG existentes em `public/images/icons/` ou simples texto/emoji, conforme necessidade.

## Registro de Mudanças

| Data | Autor | Decisão |
|------|-------|---------|
| 2026-08-08 | IA (Devin) | Criação deste documento e das decisões iniciais. |