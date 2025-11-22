import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Расписание К2И1(9)",
    short_name: "К2И1(9)",
    description: "Расписание занятий группы К2И1(9)",
    start_url: "/schedule",
    display: "standalone",
    background_color: "#f3f4f6",
    theme_color: "#4f46e5",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}