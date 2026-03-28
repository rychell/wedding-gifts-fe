# Tasks
- [x] Task 1: Setup inicial e Dados Estáticos
  - [x] SubTask 1.1: Criar o arquivo `data/gifts.json` (ou exportar do código) com a estrutura de presentes baseada no PRD (jantar, lua de mel, valor aberto, etc).
  - [x] SubTask 1.2: Definir as rotas base no Next.js (Home, `/presentes`, `/presentes/[id]`, `/historia`, `/evento`, `/obrigado`).
- [x] Task 2: Componentes Base (UI / shadcn)
  - [x] SubTask 2.1: Implementar o Layout principal (com navegação mobile-first).
  - [x] SubTask 2.2: Implementar os componentes de interface necessários com shadcn (Cards, Botões, Formulários, Modais).
- [x] Task 3: Desenvolvimento das Páginas Informativas
  - [x] SubTask 3.1: Implementar a Home com Hero Section, Foto, Data, e Contagem Regressiva.
  - [x] SubTask 3.2: Implementar a página "Nossa História" (Timeline).
  - [x] SubTask 3.3: Implementar a página "O Evento" (Localização, Horário, Botão "Ver no mapa").
- [x] Task 4: Fluxo de Lista e Detalhes de Presentes
  - [x] SubTask 4.1: Construir a Lista de Presentes iterando sobre o JSON estático em formato de cards.
  - [x] SubTask 4.2: Construir a página de Detalhe do Presente contendo a opção de identificação e campo de mensagem.
  - [x] SubTask 4.3: Implementar o Modal de Confirmação (resumo do pedido e botões de ação).
- [x] Task 5: Pagamento, Loading e Finalização
  - [x] SubTask 5.1: Implementar a tela/estado de Loading de redirecionamento.
  - [x] SubTask 5.2: Adicionar a lógica de geração de URL/redirect para o Mercado Pago ao confirmar.
  - [x] SubTask 5.3: Criar a página de Agradecimento ("Obrigado pelo presente!").
  - [x] SubTask 5.4: Adicionar um botão flutuante de compartilhamento via WhatsApp.

# Task Dependencies
- Task 4 depends on Task 1 and Task 2
- Task 5 depends on Task 4
- Task 3 depends on Task 2
