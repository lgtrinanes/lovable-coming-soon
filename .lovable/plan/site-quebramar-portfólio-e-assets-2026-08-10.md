# Site Quebramar — Portfólio e Assets

Transformar a landing "Em breve" em um site completo de uma página, mantendo o visual atual (fundo areia, azul-mar, logo, onda animada, tipografia serifada).

## Estrutura da página

```text
[ Navbar fixa: logo pequeno | Assets · Portfólio · Sobre · Contato | PT/EN ]
[ Hero: logo grande + onda animada + tagline + botão "Ver assets" ]
[ Assets à venda: grid de cards -> Fab (Unreal) ]
[ Portfólio: grid de projetos do studio ]
[ Sobre o studio: texto + imagem dos barcos ]
[ Contato: e-mail + redes ]
[ Rodapé: logo, © Quebramar ]
```

## Seções

**Hero** — logo, onda animada (mantida como está), título e subtítulo, botões para Assets e Portfólio. Ocupa a tela inteira com indicador de rolagem.

**Assets à venda** — grid responsivo (1/2/3 colunas) de cards com imagem de capa, título, descrição curta, tags (ex.: Environment, Props, Blueprint), preço e botão "Ver no Fab" que abre a página do produto na Fab da Unreal em nova aba. Entram 3–4 assets de exemplo com placeholders, prontos para você substituir.

**Portfólio** — grid de projetos (imagem, título, tipo de trabalho, ano). Clique abre um modal com descrição maior e galeria. Também com itens de exemplo.

**Sobre o studio** — bloco em duas colunas com texto de apresentação e a imagem dos barcos já existente no projeto.

**Contato** — e-mail em destaque e links de redes (ArtStation, Instagram, Fab, YouTube). Sem formulário nem backend.

## Bilíngue PT/EN

Alternador PT/EN na navbar. Todos os textos ficam em um único arquivo de traduções; o idioma escolhido é lembrado no navegador. Idioma inicial: português.

## Conteúdo dos assets

Lista fixa em um arquivo de dados no código, com campos: título, descrição, imagem, tags, preço e link do Fab — em PT e EN. Vou indicar exatamente onde editar para adicionar novos produtos.

## Detalhes técnicos

- Nova estrutura em `src/components/sections/` (Navbar, Hero, Assets, Portfolio, About, Contact, Footer) montada em `src/pages/Index.tsx`; navegação por âncora com rolagem suave.
- Design system: adicionar tokens semânticos em `index.css`/`tailwind.config.ts` para as cores do mar (areia, azul-profundo, espuma) e a fonte serifada, substituindo os estilos inline atuais do hero.
- Conteúdo em `src/data/assets.ts` e `src/data/projects.ts`; traduções em `src/i18n/translations.ts` com um contexto de idioma leve.
- Cards de asset usam `<a target="_blank" rel="noopener noreferrer">` para o Fab.
- Imagens de capa de exemplo geradas no estilo da marca; animações de entrada com framer-motion (já instalado).
- SEO: atualizar título/descrição em `index.html` para o studio (portfólio + assets Unreal) e adicionar alt text em todas as imagens.
- Continua compatível com o GitHub Pages já configurado (site de página única, sem rotas novas).
