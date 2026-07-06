import { getOptimizedImage } from "./image-manifest";

export function optimizedSrc(source: string) {
  return getOptimizedImage(source).src;
}

export function optimizedBlur(source: string) {
  return getOptimizedImage(source).blurDataURL || undefined;
}

export const HERO_IMAGES = [
  {
    source: "/colleagues-discussing-work-project.jpg",
    alt: "Colleagues discussing a work project together",
  },
  {
    source: "/programmer-night.jpg",
    alt: "Programmer working at a dual-monitor setup at night",
  },
  {
    source: "/three-dark-skinned-guy-chatting-laptop-sitting-sideways-desk-studio-black-background.jpg",
    alt: "Team collaborating around a laptop in a studio",
  },
  {
    source: "/top-view-plan-written-black-notepad-lupa-keyboard-light-bulb-pen-black-table.jpg",
    alt: "Planning workspace with notepad, keyboard, and light bulb",
  },
] as const;

export const LOGO_SOURCE = "/KATSL_Logo.3692a9b70d427f6902c5.png";
export const ABOUT_IMAGE_SOURCE = "/html-css-collage-concept-with-person.jpg";
export const FOOTER_BG_SOURCE =
  "/db60b37bc84379f89ce568b2d99841d7.5ccdace4dc596bbb0e43.png";
export const MAP_BG_SOURCE = "/map_bg_landscape.png";
