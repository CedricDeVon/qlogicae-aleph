import { defineConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";


const host = process.env.TAURI_DEV_HOST;

export default defineConfig({
  plugins: [
	sveltekit()
  ],
  build: {
	minify: 'esbuild',
		target: 'es2018',
		cssMinify: true,
		sourcemap: false,
		reportCompressedSize: false,
		cssCodeSplit: true
	},

	esbuild: {
		drop: ['console', 'debugger'],
		legalComments: 'none'
	},

  clearScreen: false,
  server: {
	port: 5173,
	strictPort: true,
	host: host || false,
	hmr: host
	  ? {
		  protocol: "ws",
		  host,
		  port: 5173,
		}
	  : undefined,
	watch: {
	  ignored: ["**/src-tauri/**"],
	},
  },
});
