# Refine Mockup Details Spec

## Why
A implementação atual da refatoração visual não alcançou 100% de fidelidade ao mockup. Faltam detalhes orgânicos, arredondamento correto de botões, posicionamento de textos e a aplicação consistente do header em todas as páginas, o que compromete a experiência e a transmissão da emoção proposta pelo design original.

## What Changes
- **Home Page**: Alterar a borda superior do container de botões para um formato orgânico (onda) utilizando SVG ou CSS avançado.
- **Home Page**: Alinhar o texto "Mayara & Rychell" em relação ao topo do container de botões, e não apenas centralizado na tela.
- **Botões (Global)**: Atualizar o arredondamento de todos os botões para não serem 100% (`rounded-full`), mas sim `rounded-md` ou `rounded-lg` conforme o mockup.
- **Header (Global)**: Criar um componente de Header consistente e aplicá-lo em todas as páginas internas (Lista de Presentes, Detalhes, etc.), contendo o ícone de voltar `<` e o título centralizado.
- **Lista de Presentes**: Ajustar paddings, margins, bordas e cores dos cards para remover o aspecto "cru" e adicionar detalhes de design (sombras suaves, bordas delicadas, espaçamentos consistentes) para refletir o mockup.

## Impact
- Affected specs: Complementa a spec `refactor-mockup-fidelity`.
- Affected code: `apps/web/src/app/page.tsx`, `apps/web/src/app/presentes/page.tsx`, `apps/web/src/app/presentes/[id]/gift-detail-client.tsx`, componentes globais de botão e layout.

## MODIFIED Requirements
### Requirement: Home Page Orgânica e Alinhada
A Home Page SHALL possuir o container inferior com borda superior orgânica (curva/onda) e o texto principal alinhado em relação a esse container.

### Requirement: Botões e Estilo
Todos os botões do sistema SHALL possuir bordas levemente arredondadas (`rounded-lg` ou `rounded-md`), abandonando o formato em pílula (`rounded-full`).

### Requirement: Header e Navegação
As páginas internas SHALL utilizar um Header padronizado com botão de voltar e título centralizado.
