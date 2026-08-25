import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: process.env.GITHUB_PAGES === 'true'
        ? '/developer-portfolio/'
        : '/',
    plugins: [react()],
    server: {
        port: 5173,
        host: true,
    },
    build: {
        outDir: 'dist',
        sourcemap: false,
    },
});