# Tasks
- [x] Task 1: Configuração de Tema e Tipografia
  - [x] SubTask 1.1: Atualizar `packages/ui/src/styles/globals.css` com as cores do mockup (Background creme, Primary verde oliva, Secondary dourado).
  - [x] SubTask 1.2: Adicionar e configurar uma fonte Serif (ex: Playfair Display) no `apps/web/src/app/layout.tsx` e Tailwind.
- [x] Task 2: Refatoração da Home Page
  - [x] SubTask 2.1: Modificar `apps/web/src/app/page.tsx` para usar imagem de fundo em tela cheia com tipografia atualizada.
  - [x] SubTask 2.2: Criar o layout do card inferior com borda curva contendo a mensagem de boas-vindas.
  - [x] SubTask 2.3: Estilizar os botões da Home (Primário verde, Secundário outline, WhatsApp verde).
- [x] Task 3: Refatoração da Lista de Presentes
  - [x] SubTask 3.1: Criar o Header customizado ("< Lista de Presentes") e Abas de navegação de categorias.
  - [x] SubTask 3.2: Refatorar o layout dos cards em `apps/web/src/app/presentes/page.tsx` para o formato horizontal (imagem esquerda, texto direita).
  - [x] SubTask 3.3: Criar o card especial "Nos Surpreenda" com botão dourado.
- [x] Task 4: Refatoração do Detalhe do Presente e Confirmação
  - [x] SubTask 4.1: Atualizar `apps/web/src/app/presentes/[id]/gift-detail-client.tsx` para exibir a imagem em destaque no topo com o conteúdo em um card sobreposto.
  - [x] SubTask 4.2: Estilizar os campos de input e o checkbox "Quero me identificar" conforme o mockup.
  - [x] SubTask 4.3: Refatorar o Modal de Confirmação para coincidir com as cores e fontes do mockup.
- [x] Task 5: Refatoração da Página de Obrigado
  - [x] SubTask 5.1: Atualizar `apps/web/src/app/obrigado/page.tsx` com fundo creme, ícone de coração e textos serifados.
  - [x] SubTask 5.2: Estilizar os botões finais da página de agradecimento.

# Task Dependencies
- Task 2 depends on Task 1
- Task 3 depends on Task 1
- Task 4 depends on Task 3
- Task 5 depends on Task 1