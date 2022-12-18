import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		host: true,
		port: 3001,
	},
	preview: {
		port: 3002,
		host: true,
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
			'#': resolve(__dirname, './'),
		},
	},
});
