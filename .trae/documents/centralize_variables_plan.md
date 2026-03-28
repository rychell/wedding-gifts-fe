# Plano de Ação: Centralização de Variáveis do Casal

## 1. Resumo
O objetivo desta tarefa é centralizar todas as informações específicas do casamento (nomes, datas, locais, história, textos etc.) em um único arquivo de configuração. Isso permitirá que o projeto seja facilmente reutilizado e customizado para outros casais no futuro, alterando apenas um arquivo. A lista de presentes não será afetada por essa mudança, conforme solicitado.

## 2. Análise do Estado Atual
Atualmente, as informações do casal estão "chumbadas" (hardcoded) em diversos arquivos:
- **`src/app/page.tsx`**: Nomes ("Mayara & Rychell"), data ("12 de Dezembro de 2026"), número de telefone, imagem de fundo e mensagem de boas-vindas.
- **`src/app/evento/page.tsx`**: Data ("15 de Novembro de 2026" - divergente da Home), horário ("16:00 horas"), local ("Fazenda Vila Rica"), endereço, link do mapa, avisos de antecedência e estacionamento.
- **`src/app/historia/page.tsx`**: A lista completa de eventos da linha do tempo (`timelineEvents`).
- **`src/components/header.tsx` e `footer.tsx`**: Título do site ("Nosso Casamento") e o ano atual.
- **`src/app/layout.tsx`**: Metadados com o nome técnico do projeto ("wedding-gifts-fe").
- **`src/components/whatsapp-button.tsx`**: Número de telefone e mensagem padrão.
- **`src/app/obrigado/page.tsx`**: Mensagens de agradecimento.

## 3. Mudanças Propostas

### 3.1. Criar o Arquivo de Configuração
Criar o arquivo `apps/web/src/config/wedding-info.ts` (ou `.tsx` se necessário exportar componentes de ícones) que exportará um objeto constante `weddingConfig` contendo:
- **`couple`**: Nomes dos noivos.
- **`site`**: Título ("Nosso Casamento"), descrição, imagem principal, e frases de impacto (ex: "Sua presença já é o nosso maior presente...").
- **`date`**: Data no formato ISO (para o contador), data formatada (ex: "12 de Dezembro de 2026"), horário, e informações de chegada.
- **`location`**: Nome do local, endereço, URL do Google Maps, imagem representativa e informações extras (estacionamento).
- **`contact`**: Número do WhatsApp e mensagem padrão.
- **`timeline`**: O array completo com os anos, títulos, descrições e ícones da história do casal.
- **`messages`**: Textos da página de agradecimento e sufixos do contador.

### 3.2. Atualizar os Arquivos Existentes
Importar o `weddingConfig` e substituir os textos estáticos nos seguintes arquivos:
- `apps/web/src/app/page.tsx`
- `apps/web/src/app/evento/page.tsx`
- `apps/web/src/app/historia/page.tsx`
- `apps/web/src/app/obrigado/page.tsx`
- `apps/web/src/app/layout.tsx` (Atualizar `metadata.title` e `metadata.description`)
- `apps/web/src/components/header.tsx`
- `apps/web/src/components/footer.tsx`
- `apps/web/src/components/whatsapp-button.tsx`

## 4. Premissas e Decisões
- **Lista de Presentes**: Os dados de presentes continuarão vindo de `gifts.json` e a página de presentes não será parametrizada para as abas, seguindo a regra "A lista de presentes é um caso a parte".
- **Unificação da Data**: Como há uma divergência de datas entre a Home (Dez/2026) e a página O Evento (Nov/2026), vou padronizar tudo utilizando as informações da página inicial (`12 de Dezembro de 2026 às 16:00`), que é a mais visível.
- **Ícones da Linha do Tempo**: Os ícones (do pacote `lucide-react`) serão referenciados diretamente no arquivo de configuração, já que a página de História é um Server Component.

## 5. Passos de Verificação
- Garantir que o projeto compila sem erros (`npm run build` ou validação do TypeScript).
- Iniciar o servidor de desenvolvimento (`npm run dev`) e navegar pelas páginas (Home, História, Evento, Presentes, Obrigado) para confirmar que todas as informações dinâmicas estão sendo renderizadas corretamente.
- Testar os botões do WhatsApp para validar se a URL é gerada com o número e mensagem corretos definidos no novo arquivo de configuração.