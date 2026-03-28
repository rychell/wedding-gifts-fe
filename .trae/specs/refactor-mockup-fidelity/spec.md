# Refactor Mockup Fidelity Spec

## Why
O projeto atual possui as funcionalidades baseadas no PRD inicial, mas a interface utiliza estilos e componentes padrão (shadcn defaults). Para atingir a experiência visual e emocional desejada para o casamento, é estritamente necessário refatorar a interface para seguir fielmente o mockup fornecido, aplicando cores específicas, tipografia serifada e layouts customizados.

## What Changes
- **BREAKING**: Atualização completa das variáveis de cor no `globals.css` (Background creme, Primary verde oliva, Secondary dourado).
- Adição de fonte Serif (ex: Playfair Display ou Lora) para títulos.
- Refatoração da Home Page (`/`): Layout full-screen com imagem de fundo, textos sobrepostos e card inferior com borda superior curva.
- Refatoração da Lista de Presentes (`/presentes`): Header customizado com botão de voltar, abas de categoria (Todos, Lua de Mel, etc.), e cards de presente horizontais com imagens à esquerda.
- Refatoração do Detalhe do Presente (`/presentes/[id]`): Imagem hero com conteúdo sobreposto (borda superior arredondada), formulário estilizado e botão de ação verde.
- Refatoração do Modal de Confirmação: Estilo limpo com botões preenchidos (Confirmar) e contornados (Voltar).
- Refatoração da Página de Obrigado (`/obrigado`): Layout centralizado com ícone de coração, fundo creme e tipografia serifada.

## Impact
- Affected specs: N/A (Atualização de UI baseada no `create-wedding-gifts-fe`)
- Affected code: `apps/web/src/app/*`, `packages/ui/src/styles/globals.css`, `apps/web/src/app/layout.tsx`

## MODIFIED Requirements
### Requirement: Estilo Global e Tipografia
O sistema SHALL utilizar a paleta de cores do mockup (Creme `#fcfaf8`, Verde Oliva `#6b805d`, Dourado `#cfa872`) e fonte Serif para títulos.

### Requirement: Home Page
A Home Page SHALL exibir uma imagem de fundo ocupando toda a tela, com nomes e data centralizados, e um card fixo/posicionado na parte inferior com borda curva contendo a mensagem de boas-vindas e os 3 botões principais de ação.

### Requirement: Cards de Presente
A lista de presentes SHALL exibir os itens em um layout horizontal (imagem à esquerda, detalhes à direita), substituindo o grid de cards verticais anterior.
