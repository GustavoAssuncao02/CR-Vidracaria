import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Feito por Gustavo Assunção da Silva
const authorNotice = "/* Feito por Gustavo Assunção da Silva */\n";

// Feito por Gustavo Assunção da Silva
function authorNoticePlugin() {
  return {
    name: "author-notice",
    generateBundle(_, bundle) {
      for (const file of Object.values(bundle)) {
        if (file.type === "chunk") {
          file.code = `${authorNotice}${file.code}`;
        }

        if (file.type === "asset" && typeof file.source === "string" && file.fileName.endsWith(".css")) {
          file.source = `${authorNotice}${file.source}`;
        }
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), authorNoticePlugin()],
  base: "./",
  build: {
    outDir: "docs",
  },
});
