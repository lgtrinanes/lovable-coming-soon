import coastalVillage from "@/assets/asset-coastal-village.jpg";
import nauticalProps from "@/assets/asset-nautical-props.jpg";
import oceanShader from "@/assets/asset-ocean-shader.jpg";

export interface StudioAsset {
  id: string;
  image: string;
  price: string;
  /** Link direto para a página do produto na Fab da Unreal */
  fabUrl: string;
  tags: string[];
  title: { pt: string; en: string };
  description: { pt: string; en: string };
}

/**
 * COMO ADICIONAR UM ASSET:
 * 1. Coloque a imagem de capa em src/assets/ e importe acima.
 * 2. Copie um bloco abaixo e edite title, description, tags, price e fabUrl.
 */
export const studioAssets: StudioAsset[] = [
  {
    id: "coastal-village",
    image: coastalVillage,
    price: "$49.99",
    fabUrl: "https://www.fab.com/",
    tags: ["Environment", "UE5", "Nanite"],
    title: {
      pt: "Vila Costeira - Kit de Ambiente",
      en: "Coastal Village - Environment Kit",
    },
    description: {
      pt: "Mais de 120 meshes modulares para construir vilas de pescadores: docas, casas, barcos e vegetação.",
      en: "120+ modular meshes to build fishing villages: docks, houses, boats and foliage.",
    },
  },
  {
    id: "nautical-props",
    image: nauticalProps,
    price: "$24.99",
    fabUrl: "https://www.fab.com/",
    tags: ["Props", "PBR", "Game Ready"],
    title: {
      pt: "Props Náuticos - Pacote PBR",
      en: "Nautical Props - PBR Pack",
    },
    description: {
      pt: "Âncoras, cordas, lampiões, caixas e barris com texturas 4K e LODs prontos para produção.",
      en: "Anchors, ropes, lanterns, crates and barrels with 4K textures and production-ready LODs.",
    },
  },
  {
    id: "ocean-shader",
    image: oceanShader,
    price: "$34.99",
    fabUrl: "https://www.fab.com/",
    tags: ["Blueprint", "Shader", "Water"],
    title: {
      pt: "Quebramar Ocean - Shader de Água",
      en: "Quebramar Ocean - Water Shader",
    },
    description: {
      pt: "Sistema de oceano com espuma dinâmica, interação com objetos e controle total via blueprint.",
      en: "Ocean system with dynamic foam, object interaction and full blueprint control.",
    },
  },
];

/** Link da loja do studio na Fab */
export const fabStoreUrl = "https://www.fab.com/";
