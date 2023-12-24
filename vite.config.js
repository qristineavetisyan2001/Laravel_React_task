import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import VitePluginStyleImport from 'vite-plugin-style-import';
export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/scss/app.scss', 'resources/js/app.js'],
            refresh: true,
        }),
        VitePluginStyleImport(),
        react()
    ],
});


/*
      *440#
*/
