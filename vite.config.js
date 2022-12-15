import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		host: true,
		strictPort: false,
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
			'#': resolve(__dirname, './'),
		},
	},
});