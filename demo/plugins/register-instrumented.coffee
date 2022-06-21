# Load this plugin from the file that was instrumented by nyc for generating
# code coverage info.
import Vue from 'vue'
import SsrCarousel from '../../instrumented/index.js'
import '../../index.css'
Vue.component 'ssr-carousel', SsrCarousel

# The package also uses Vue Visual
import Visual from 'vue-visual'
import 'vue-visual/index.css'
Vue.component 'visual', Visual
