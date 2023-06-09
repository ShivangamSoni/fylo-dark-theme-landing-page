import { resolve } from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgLoader from "vite-plugin-svgr";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        svgLoader({
            exclude: ["/src/assets/logo.svg"],
        }),
        viteCompression(),
    ],
    resolve: {
        alias: [
            {
                find: "@assets",
                replacement: resolve(__dirname, "src", "assets"),
            },
            {
                find: "@components",
                replacement: resolve(__dirname, "src", "components"),
            },
            {
                find: "@features",
                replacement: resolve(__dirname, "src", "features"),
            },
            {
                find: "@layout",
                replacement: resolve(__dirname, "src", "layout"),
            },
            {
                find: "@pages",
                replacement: resolve(__dirname, "src", "pages"),
            },
            {
                find: "@data",
                replacement: resolve(__dirname, "src", "data"),
            },
            {
                find: "@utils",
                replacement: resolve(__dirname, "src", "utils"),
            },
        ],
    },
});
