# Site de Lista de Presentes de Casamento Spec

## Why
Criar um site de casamento mobile-first para facilitar contribuições financeiras de forma simples, emocional e sem fricção. Os convidados poderão presentear o casal com experiências simbólicas usando o Mercado Pago sem a necessidade de um login complexo, maximizando a taxa de conversão e mantendo um apelo emocional.

## What Changes
- Inicialização do banco de dados estático em JSON (`data/gifts.json`).
- Criação do Layout principal (Header mobile e Footer).
- Desenvolvimento da Home Page (Foto, Nomes, Data, Contagem Regressiva, Navegação).
- Desenvolvimento da página "Nossa História" (Timeline simples).
- Desenvolvimento da página "O Evento" (Informações de data, local, dress code e mapa).
- Desenvolvimento da página de Lista de Presentes (Grid de cards e filtro/opção "Nos surpreenda").
- Desenvolvimento da página de Detalhes do Presente (Imagem, valor fixo, formulário opcional de identificação com Nome e Mensagem).
- Criação de Modal de Confirmação antes do redirecionamento.
- Integração de pagamento via link de redirecionamento do Mercado Pago.
- Criação da página de Agradecimento e tela de Loading.

## Impact
- Affected specs: N/A (Novo Projeto/Feature Completa baseada no PRD)
- Affected code: `apps/web/src/app/*`, `apps/web/src/components/*`, `packages/ui/src/components/*`

## ADDED Requirements
### Requirement: Páginas Estáticas e Informativas
O sistema SHALL prover páginas otimizadas para mobile contendo a Home, a História do Casal e os Detalhes do Evento.

#### Scenario: Visualização da Home
- **WHEN** usuário acessa a raiz do site
- **THEN** deve ver uma interface com a foto do casal, nomes, data do casamento, contagem regressiva e botões principais (Presentes, Evento).

### Requirement: Fluxo de Escolha de Presentes
O sistema SHALL exibir uma lista de presentes em formato de cards (lendo de JSON estático) e permitir a visualização detalhada.

#### Scenario: Escolha de presente e identificação
- **WHEN** usuário seleciona um presente na lista
- **THEN** é direcionado para a tela de detalhes onde visualiza o valor, descrição, imagem grande, e um formulário com toggle para "Quero me identificar" (Nome e Mensagem).

### Requirement: Checkout Simples via Mercado Pago
O sistema SHALL exibir um modal de confirmação e redirecionar o usuário para o Mercado Pago com o valor do presente.

#### Scenario: Redirecionamento de pagamento
- **WHEN** usuário clica em "Presentear com R$ X" e confirma no modal
- **THEN** o sistema exibe um loading "Redirecionando para o pagamento..." e envia o usuário para o checkout do Mercado Pago via link.
