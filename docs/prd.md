Perfeito — vou consolidar tudo que definimos em um **PRD completo, enxuto e pronto para execução**, no nível de qualidade que um time de produto/engenharia conseguiria usar direto.

---

# 📄 PRD — Site de Lista de Presentes de Casamento

## 1. 🎯 Visão do Produto

Criar um site de casamento onde convidados possam **presentear o casal por meio de contribuições financeiras associadas a experiências simbólicas**, com redirecionamento para pagamento via Mercado Pago.

### Objetivo principal

* Facilitar contribuições financeiras de forma simples, emocional e sem fricção

### Objetivos secundários

* Criar uma experiência agradável e memorável
* Reduzir dúvidas dos convidados
* Maximizar taxa de conversão

---

## 2. 👤 Usuários

### Primário

* Convidados do casamento (majoritariamente mobile, via WhatsApp)

### Secundário

* Noivos (gestão indireta, sem painel admin no MVP)

---

## 3. 🧠 Proposta de valor

* Experiência simples e rápida (sem login)
* Apelo emocional (não é e-commerce tradicional)
* Pagamento seguro via Mercado Pago
* Flexibilidade (identificação opcional)

---

## 4. 🧩 Escopo do MVP

## ✔ Incluído

* Lista de presentes simbólicos com valor fixo
* Página de detalhe do presente
* Identificação opcional do convidado
* Integração com Mercado Pago (redirect)
* Página de agradecimento
* Página de evento
* Página “Nossa história”
* Botão de compartilhamento (WhatsApp)
* Presente livre (valor aberto)
* Confirmação antes do pagamento
* Microinterações (loading, feedback)

## ❌ Não incluído

* Backend próprio
* Controle de estoque
* Sistema de autenticação
* Dashboard administrativo
* Webhooks de pagamento
* Persistência de mensagens

---

## 5. 🧱 Arquitetura

### Frontend

* Next.js (recomendado)
* Mobile-first

### Dados

* JSON estático

### Pagamento

* Mercado Pago (redirect via link)

### Deploy

* Vercel ou Netlify

---

## 6. 📦 Modelo de Dados

```json
{
  "gifts": [
    {
      "id": "jantar-romantico",
      "title": "Jantar romântico 🍷",
      "description": "Ajude a gente a ter uma noite inesquecível na lua de mel.",
      "price": 300,
      "image": "/images/jantar.jpg",
      "category": "Lua de mel",
      "highlight": true
    }
  ]
}
```

---

## 7. 🧭 Fluxo do Usuário

```
Home
 ↓
Lista de presentes
 ↓
Detalhe do presente
 ↓
Confirmação (modal)
 ↓
Redirect Mercado Pago
 ↓
Agradecimento
```

---

## 8. 📱 Telas e Funcionalidades

---

## 8.1 Home

### Conteúdo

* Foto do casal
* Nome dos noivos
* Data do casamento
* Contagem regressiva
* Texto emocional
* CTA principal

### Ações

* Ir para lista de presentes
* Ir para página do evento
* Compartilhar via WhatsApp

---

## 8.2 Lista de Presentes

### Conteúdo

* Lista em formato de cards
* Imagem, título, descrição curta, valor

### Features

* Filtro por categoria (opcional)
* Card especial:

  * “Nos surpreenda” (valor aberto)

### Ações

* Abrir detalhe do presente

---

## 8.3 Detalhe do Presente

### Conteúdo

* Imagem grande
* Nome
* Descrição emocional
* Valor fixo
* Badge opcional (ex: “Mais escolhido”)

### Identificação (opcional)

* Toggle:

  * “Quero me identificar”
* Inputs:

  * Nome
  * Mensagem

### Ação principal

* Botão “Presentear com R$ X”

---

## 8.4 Modal de Confirmação

### Conteúdo

* Nome do presente
* Valor
* Nome do convidado (se houver)

### Ações

* Confirmar → redirect
* Voltar

---

## 8.5 Loading

* Exibir spinner
* Mensagem:

  * “Redirecionando para o pagamento...”

---

## 8.6 Integração Mercado Pago

### Requisitos

* Enviar:

  * Valor
  * Descrição do presente
  * Nome do convidado (se houver)

### Tipo

* Redirect via link

---

## 8.7 Página de Agradecimento

### Conteúdo

* Mensagem emocional
* Nome do convidado (se fornecido)

### Ações

* Voltar para lista
* Voltar para home

---

## 8.8 Página do Evento

### Conteúdo

* Data
* Horário
* Local
* Botão “Ver no mapa”
* Dress code (opcional)

---

## 8.9 Página “Nossa História”

### Conteúdo

* Timeline do casal
* Fotos + textos

---

## 9. 🎁 Features Especiais

### Presente livre

* Contribuição com valor aberto

### Compartilhamento WhatsApp

* Botão fixo
* Mensagem pré-formatada

### Badge “Mais escolhido”

* Destaque visual

### Feedback visual

* Estados de botão
* Animações leves

---

## 10. 🎨 Diretrizes de UX/UI

### Princípios

* Mobile-first
* Simplicidade extrema
* Baixa fricção

### Design

* Visual clean
* Tipografia elegante
* Uso de espaço em branco

### Copy

Evitar:

* “Comprar”

Usar:

* “Presentear”
* “Contribuir”

---

## 11. ⚠️ Restrições Técnicas

* Sem backend → sem controle de concorrência
* Sem confirmação automática de pagamento
* Sem persistência de dados do usuário

---

## 12. ⚠️ Riscos

| Risco                           | Mitigação                        |
| ------------------------------- | -------------------------------- |
| Pagamentos duplicados           | Aceitável no contexto            |
| Falta de controle de quem pagou | Nome opcional                    |
| Falha no retorno do pagamento   | Página de agradecimento genérica |

---

## 13. 📊 Métricas (opcional)

* Cliques em “Presentear”
* Presentes mais acessados
* Taxa de conversão (estimada)

---

## 14. 🚀 Roadmap

### MVP

* Todas as telas básicas
* Integração Mercado Pago
* Deploy

### Pós-MVP (opcional)

* Firebase/Supabase
* Controle de presentes
* Registro de mensagens
* Dashboard simples

---

## 15. 🧠 Decisões de Produto (resumo)

* ❌ Sem cotas
* ✔ Valor fixo por presente
* ✔ Identificação opcional
* ✔ Sem controle de estoque
* ✔ Frontend-only
* ✔ Checkout externo (Mercado Pago)
* ✔ Foco em experiência emocional

---

## 16. ✅ Critérios de sucesso

* Usuário consegue:

  * Escolher presente em < 30s
  * Ir para pagamento sem fricção
* Site funciona perfeitamente em mobile
* Zero necessidade de suporte manual para uso

---

Se quiser, posso agora transformar esse PRD em:

* 📁 Estrutura de projeto (pastas + componentes)
* 💻 Código inicial (Next.js pronto)
* 🎨 UI visual (tipo Figma)
* 💳 Integração real com Mercado Pago

Qual próximo passo você quer atacar?
