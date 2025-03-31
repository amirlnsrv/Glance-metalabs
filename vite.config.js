import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: "/src/assets",
      layouts: "/src/layouts",
      common: "/src/common",
      routes: "/src/routes",
      api: "/src/api",
      constants: "/src/constants",
      store: "/src/store",
      helpers: "/src/helpers"
    },
  },
});
