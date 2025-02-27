import { vercelPreset } from "@vercel/react-router/vite";
import { type Config } from "@react-router/dev/config";

export default {
  ssr: true,
  prerender: ["/about"],
  presets: [vercelPreset()]
} satisfies Config;
