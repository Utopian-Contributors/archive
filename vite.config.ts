import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { cpSync, mkdirSync } from "fs";
import { resolve } from "path";

function copyContent(): Plugin {
  const contentDir = resolve(__dirname, "content");
  return {
    name: "copy-content",
    // During dev, serve content/ files at /content/*
    configureServer(server) {
      server.middlewares.use("/content", (req, res, next) => {
        if (req.url) {
          const filePath = resolve(contentDir, req.url.replace(/^\//, ""));
          res.setHeader("Content-Type", "text/markdown; charset=utf-8");
          import("fs").then((fs) => {
            try {
              const data = fs.readFileSync(filePath);
              res.end(data);
            } catch {
              next();
            }
          });
        } else {
          next();
        }
      });
    },
    // During build, copy content/ into dist/content/
    writeBundle() {
      const outDir = resolve(__dirname, "dist", "content");
      mkdirSync(outDir, { recursive: true });
      cpSync(contentDir, outDir, { recursive: true });
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), copyContent()],
});
