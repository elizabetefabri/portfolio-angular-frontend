Portfolio Angular Frontend - Master Implementation Plan
Objetivo

Este projeto tem como objetivo realizar a migração e adaptação completa do portfolio existente em:


---

/home/elizabetefabri/repos/projetos-pessoais/portfolio/portfolio-next

para o projeto Angular localizado em:


---

/home/elizabetefabri/repos/projetos-pessoais/portfolio/portfolio-angular-frontend

A implementação deve seguir arquitetura Angular moderna, mantendo fidelidade visual, estrutural e funcional ao template Next.js original.

Regras Obrigatórias
Nunca Regredir

A IA deve operar em modo incremental.

Proibido
Remover funcionalidades já implementadas.
Reverter decisões aprovadas anteriormente.
Apagar documentação existente.
Sobrescrever artefatos SDD sem análise prévia.
Refatorar grandes áreas sem necessidade técnica comprovada.
Obrigatório
Evolução contínua.
Registrar decisões arquiteturais.
Atualizar documentação SDD a cada implementação relevante.
Preservar compatibilidade com funcionalidades já validadas.

## Git - Restrições
Absolutamente Proibido

Não executar:

```
git commit
git push
git pull
git merge
git rebase
git reset
git revert
git checkout
git switch
```

A IA não possui autorização para alterar histórico Git.

Seu papel é apenas modificar arquivos locais.

Fonte da Verdade

O projeto Next é a referência principal.

---

/home/elizabetefabri/repos/projetos-pessoais/portfolio/portfolio-next

Toda decisão funcional ou visual deve ser baseada nele.

Documentação SDD

Existe uma pasta dedicada para planejamento e rastreabilidade:

---

/home/elizabetefabri/repos/projetos-pessoais/portfolio/portfolio-angular-frontend/docs/SDD

Todos os arquivos existentes nesta pasta devem ser utilizados.

Mesmo que estejam vazios.

## Responsabilidade da IA

A IA deverá:

Analisar o template Next.
Criar documentação necessária.
Preencher documentos vazios.
Atualizar documentos existentes.
Registrar decisões.
Registrar progresso.
Registrar pendências.

Todo o planejamento deve ser mantido dentro da pasta SDD.

## Processo de Trabalho Obrigatório

Antes de qualquer implementação:

## Etapa 1

Mapear estrutura do projeto Next.

Identificar:

páginas
layouts
componentes
hooks
providers
estilos
assets
integrações
APIs
bibliotecas

## Etapa 2

## Produzir documentação SDD. No dir abaixo:

```
/home/elizabetefabri/repos/projetos-pessoais/portfolio/portfolio-angular-frontend/docs/SDD
```

## Tratamento de Dúvidas

Quando houver qualquer incerteza relacionada a:

```
comportamento
layout
UX
navegação
estilo
integrações
SEO
regras de negócio
```

**A IA deve interromper a implementação e perguntar.**

Jamais assumir comportamento não observado.

---

## Critérios de Qualidade

Todo código produzido deve:

seguir SOLID
seguir Clean Code
seguir Angular Style Guide
possuir tipagem estrita
evitar any
evitar duplicação
ser responsivo
ser acessível
possuir tratamento de erro

## Critérios de Conclusão

A migração somente será considerada concluída quando:

Todas as páginas Next existirem em Angular.
Todos os componentes forem migrados.
Todos os estilos forem equivalentes.
Todas as integrações funcionarem.
Toda documentação SDD estiver preenchida.
Todos os itens do backlog estiverem concluídos.

Ler completamente o projeto Next.
Ler completamente a pasta SDD.
Produzir inventário técnico.
Produzir plano de migração.
Atualizar documentação.
Implementar de forma incremental.
Nunca regredir.
Nunca executar comandos Git.
Nunca remover documentação.
Em caso de dúvida, perguntar antes de implementar.
Manter rastreabilidade total entre Next e Angular.
Considerar os documentos da pasta SDD como fonte oficial do planejamento e evolução do projeto.
