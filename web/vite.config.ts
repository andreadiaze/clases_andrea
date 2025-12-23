import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), // "@vitejs/plugin-react-swc": Babel replacement for faster compilation
    tailwindcss(), // "tailwindcss" for vite
  ],
  resolve: {
    // Path aliases
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
