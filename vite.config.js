import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// const manifiestForPlugin = {
//   registerType: "prompt",
// 	includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
// 	manifest: {
// 		name: "Testing PWA",
// 		short_name: "Testing PWA Short",
// 		description: "Probando configuraciones React+PWA",
// 		icons: [
// 			{
// 				src: "/android-chrome-192x192.png",
// 				sizes: "192x192",
// 				type: "image/png",
// 			},
// 			{
// 				src: "/android-chrome-512x512.png",
// 				sizes: "512x512",
// 				type: "image/png",
// 			},
// 			{
// 				src: "/apple-touch-icon2.png",
// 				sizes: "180x180",
// 				type: "image/png",
// 				purpose: "apple touch icon",
// 			},
// 			{
// 				src: "/maskable_icon.png",
// 				sizes: "225x225",
// 				type: "image/png",
// 				purpose: "any maskable",
// 			},
// 		],
// 		theme_color: "#2f313a",
// 		background_color: "#2f313a",
// 		display: "standalone",
// 		scope: "/ARGPRO2_Clase4/",
// 		start_url: "/ARGPRO2_Clase4/",
// 		orientation: "portrait",
// 	},
// }

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({registerType:'prompt'})
  ],
  base: '/testing-pwa/'
})
