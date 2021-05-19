import sveltePreprocess from 'svelte-preprocess'
import { optimizeImports, optimizeCss } from 'carbon-preprocess-svelte'
import staticAdapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [sveltePreprocess(), optimizeImports()],
  kit: {
    target: '#svelte',
    adapter: staticAdapter(),
    vite: {
      optimizeDeps: { include: ['clipboard-copy'] },
      plugins: [process.env.NODE_ENV === 'production' && optimizeCss()],
    },
  },
}

export default config
