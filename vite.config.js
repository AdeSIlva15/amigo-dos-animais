import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                inicio: resolve(__dirname, "html/index.html"),
                projetos: resolve(__dirname, "html/projetos.html"),
                cadastro: resolve(__dirname, "html/cadastro.html")
            }
        }
    }
});