import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig(({mode})=>{
 const local=(p:string)=>new URL(p,import.meta.url).pathname.replace(/^\/(\w:)/,'$1');
 if(mode==='website')return {plugins:[react(),tailwindcss()],base:'./',resolve:{alias:{'@':local('./src')}},build:{outDir:'../compsoc-website',emptyOutDir:true,copyPublicDir:false,assetsInlineLimit:(file:string)=>file.endsWith('.woff2')||undefined,rolldownOptions:{input:local('./website.html'),output:{format:'iife',entryFileNames:'assets/website.js'}}}};
 const portable=mode!=='modular';
 return {plugins:[react(),tailwindcss()],base:'./',resolve:{alias:{'@':local('./src'),...(portable?{'./feature-loader':local('./src/feature-loader-portable.ts')}: {})}},build:{outDir:portable?'dist':'dist/production',rolldownOptions:{output:{format:portable?'iife':'es',entryFileNames:'assets/showcase.js',chunkFileNames:'assets/[name]-[hash].js'}}}};
});
