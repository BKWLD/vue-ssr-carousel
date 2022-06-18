# Load this plugin from it's src. Not using the root nuxt.js because that's
# intended to be used by people using the plugin. Here, we're just registering
# it for the demo.
import Vue from 'vue'
import SsrCarousel from '../../src/ssr-carousel'
Vue.component 'ssr-carousel', SsrCarousel

# The package also uses Vue Visual
import Visual from 'vue-visual'
import 'vue-visual/index.css'
Vue.component 'visual', Visual
