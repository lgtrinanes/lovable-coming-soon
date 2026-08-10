import lighthouse from "@/assets/project-lighthouse.jpg";
import harbor from "@/assets/project-harbor.jpg";
import fisherman from "@/assets/project-fisherman.jpg";

export interface StudioProject {
  id: string;
  image: string;
  year: string;
  title: { pt: string; en: string };
  category: { pt: string; en: string };
  description: { pt: string; en: string };
}

export const studioProjects: StudioProject[] = [
  {
    id: "lighthouse",
    image: lighthouse,
    year: "2025",
    title: { pt: "Farol da Ponta Norte", en: "North Point Lighthouse" },
    category: { pt: "Ambiente / Cinematic", en: "Environment / Cinematic" },
    description: {
      pt: "Cena cinematográfica em tempo real produzida em Unreal Engine 5, com iluminação Lumen, céu volumétrico e materiais de rocha esculpidos à mão.",
      en: "Real-time cinematic scene built in Unreal Engine 5 with Lumen lighting, volumetric skies and hand-sculpted rock materials.",
    },
  },
  {
    id: "harbor",
    image: harbor,
    year: "2024",
    title: { pt: "Armazém do Porto", en: "Harbor Warehouse" },
    category: { pt: "Ambiente / Interior", en: "Environment / Interior" },
    description: {
      pt: "Interior industrial abandonado com foco em atmosfera: luz volumétrica, poeira e decals de desgaste criados sob medida.",
      en: "Abandoned industrial interior focused on atmosphere: volumetric light, dust and custom-made wear decals.",
    },
  },
  {
    id: "fisherman",
    image: fisherman,
    year: "2024",
    title: { pt: "O Velho Pescador", en: "The Old Fisherman" },
    category: { pt: "Personagem estilizado", en: "Stylized character" },
    description: {
      pt: "Personagem estilizado com rig completo, blendshapes faciais e materiais otimizados para jogos.",
      en: "Stylized character with full rig, facial blendshapes and game-optimized materials.",
    },
  },
];
