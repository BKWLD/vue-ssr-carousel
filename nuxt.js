import { join } from 'path'
export default function() {

	// Allow components to be auto-imported by Nuxt
	this.nuxt.hook('components:dirs', dirs => {
		dirs.push({
			path: join(__dirname),
			prefix: 'vue-ssr-carousel',
		})
	})

	// Add the extracted CSS globally
	this.options.css.push('vue-ssr-carousel/index.css')
}
