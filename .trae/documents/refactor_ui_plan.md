# Plano de Refatoração da UI (Seguindo o Mockup)

## Sumário
Este plano detalha os passos para refatorar a interface de usuário (UI) do projeto, com o objetivo de seguir **estritamente** o design apresentado no arquivo `mockup.png`. O foco principal é a correção dos cards na listagem de presentes (removendo o padding para que a imagem ocupe toda a altura) e o alinhamento visual de todas as telas (Home, Lista, Detalhes e Confirmação). O código final também será documentado.

## Análise do Estado Atual
- **Lista de Presentes:** O componente `Card` da biblioteca de UI injeta um padding padrão (`py-4 gap-4`), o que impede a imagem de tocar as bordas superior e inferior do card. Além disso, as imagens reais do arquivo `gifts.json` não estão sendo exibidas na listagem (o código atual usa um emoji de presente).
- **Cabeçalho:** O `PageHeader` atual centraliza o título independentemente do botão de voltar, diferindo do mockup onde eles ficam lado a lado à esquerda.
- **Home:** A disposição dos textos, fontes e cores na página inicial está próxima, mas precisa de pequenos ajustes de espaçamento e tipografia para ficar idêntica ao mockup.
- **Detalhes do Presente e Modal:** A página de detalhes possui os elementos corretos (badge "Mais escolhido", inputs, checkbox), mas o estilo visual dos inputs, da badge e do modal de confirmação precisa de ajustes para ficar com o aspecto "clean" e com as cores exatas do mockup.
- **Obrigado:** A tela de sucesso necessita de ajustes finos nas fontes e nos botões para se alinhar ao padrão visual.

## Mudanças Propostas

1. **`apps/web/src/app/presentes/page.tsx` (Lista de Presentes)**
   - **O que:** Substituir o uso do `<Card>` por uma `<div>` estruturada (ou usar `p-0 gap-0 border-none`) para eliminar o padding interno.
   - **Como:** 
     - Criar um container flexível (`flex flex-row`).
     - O lado esquerdo (imagem) terá `w-32 sm:w-36 shrink-0 relative` para que o `<Image>` com `object-cover` preencha 100% da altura e largura, com `rounded-l-2xl`.
     - Implementar o componente `Image` do Next.js usando a propriedade `gift.image`.
     - O lado direito (conteúdo) terá padding interno (`p-4` ou `p-5`) e `flex-col justify-center`.
     - O card "Nos Surpreenda" terá um botão "Contribuir" com a cor de fundo secundária (dourado/bege), exatamente como no mockup.

2. **`apps/web/src/components/page-header.tsx`**
   - **O que:** Ajustar o layout do cabeçalho.
   - **Como:** Colocar o botão `<` e o título lado a lado (`flex items-center gap-3`), utilizando a fonte serifada para o título, igual ao mockup.

3. **`apps/web/src/app/presentes/[id]/gift-detail-client.tsx` (Detalhes do Presente e Modal)**
   - **O que:** Refinar a tela de detalhes e o modal de confirmação.
   - **Como:**
     - Posicionar o botão `<` flutuante sobre a imagem com fundo transparente/sutil.
     - Ajustar a cor e formato da badge "Mais escolhido" (fundo dourado/amarelo, texto escuro, cantos arredondados).
     - Estilizar os inputs ("Seu nome", "Deixe uma mensagem") com bordas suaves e arredondamento conforme o design.
     - Refatorar o `<DialogContent>` (Modal de Confirmação) para ter fundo branco, textos centralizados com tipografia correta e botões dispostos conforme o mockup ("Confirmar" em verde, "Voltar" com borda).

4. **`apps/web/src/app/page.tsx` (Home Page)**
   - **O que:** Ajustar tipografia e botões da parte inferior.
   - **Como:** Revisar as fontes e margens do texto "Mayara & Rychell" e do cartão inferior para garantir fidelidade total.

5. **`apps/web/src/app/obrigado/page.tsx` (Página de Obrigado)**
   - **O que:** Ajustar textos e estilo dos botões.
   - **Como:** Garantir a presença do ícone de coração e aplicar as classes corretas aos botões "Ver mais presentes" (primário) e "Voltar para o início" (outline).

## Premissas e Decisões
- **Cores:** Serão utilizadas as variáveis CSS existentes (`--primary` para verde e `--secondary` para bege/dourado). Caso não correspondam, as cores serão ajustadas pontualmente via Tailwind (`bg-[#...]`) para garantir a correspondência *estrita* ao mockup.
- **Imagens:** Presume-se que as imagens referenciadas em `gifts.json` estejam disponíveis. Em caso de ausência de imagem para um presente específico, será mantido um fallback discreto.
- **Documentação:** O código modificado receberá comentários JSDoc/inline explicando as escolhas de layout para facilitar a manutenção.

## Passos de Verificação
1. Abrir a rota `/presentes` e confirmar que não há padding entre a imagem e as bordas esquerda, superior e inferior do card.
2. Navegar para a rota `/presentes/[id]` e comparar visualmente o layout dos inputs, badge e modal com o arquivo `mockup.png`.
3. Testar a rota inicial (`/`) e a de sucesso (`/obrigado`) para garantir total alinhamento visual.