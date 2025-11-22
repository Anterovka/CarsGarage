// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ваши текущие настройки (images и др.)
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "avatars.mds.yandex.net" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },

  // ⚠️ Turbopack требует явного указания, если есть webpack-конфиг
  // → просто добавьте пустой объект:
  turbopack: {},

  // ❗ Если у вас есть webpack-конфиг — он всё равно не будет работать с Turbopack!
  // webpack(config) { … }  ← ← ← УДАЛИТЕ или закомментируйте при использовании Turbopack
};

export default nextConfig;