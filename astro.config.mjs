import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: 'https://nurseabroad.app',
  integrations: [tailwind({ configFile: path.join(__dirname, 'tailwind.config.mjs') })],
});
