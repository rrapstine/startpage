import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { viteRequire } from "vite-require";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react(), svgr(), viteRequire()],
});
