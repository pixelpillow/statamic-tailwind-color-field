import vue from "@vitejs/plugin-vue2";
import laravel from "laravel-vite-plugin";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                "resources/js/tailwind_color-fieldtype.js",
                // 'resources/css/tailwind_color-fieldtype.css'
            ],
            publicDirectory: "resources/dist",
        }),
        vue(),
    ],
});
