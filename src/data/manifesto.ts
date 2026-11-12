// ============================================================
//  MANIFESTO — edite este arquivo para atualizar a seção.
//  • image: troque null pela sua imagem, ex.:
//      import manifestoImg from "@/assets/manifesto.jpg";
//      image: manifestoImg,
//  • imageAlt: descreva a imagem (leitura de tela / SEO).
//  • updated: data de revisão exibida abaixo da caixa de texto.
//  • paragraphs: um item por parágrafo, PT e EN.
// ============================================================

export interface ManifestoContent {
  /** null = mostra o espaço reservado para imagem. */
  image: string | null;
  imageAlt: { pt: string; en: string };
  updated: string;
  paragraphs: { pt: string; en: string }[];
  signature: { pt: string; en: string };
}

export const manifesto: ManifestoContent = {
  image: null,
  imageAlt: {
    pt: "Imagem do manifesto do Quebramar Creative Studio",
    en: "Quebramar Creative Studio manifesto image",
  },
  updated: "2026",
  paragraphs: [
    {
      pt: "Acreditamos que todo ambiente começa antes do primeiro polígono: numa maré, num cheiro de sal, numa luz que só existe no fim da tarde.",
      en: "We believe every environment begins before the first polygon: in a tide, in the smell of salt, in a light that only exists at the end of the afternoon.",
    },
    {
      pt: "Por isso fazemos arte 3D devagar e de propósito — pesquisada, testada em tempo real e otimizada para rodar bem em qualquer projeto.",
      en: "That is why we make 3D art slowly and on purpose — researched, tested in real time and optimized to run well in any project.",
    },
    {
      pt: "Cada asset que publicamos é algo que gostaríamos de ter encontrado prontos: organizados, documentados e honestos no peso técnico.",
      en: "Every asset we publish is something we would have liked to find ready: organized, documented and honest about its technical weight.",
    },
  ],
  signature: {
    pt: "— Quebramar Creative Studio",
    en: "— Quebramar Creative Studio",
  },
};
