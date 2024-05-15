import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueHighlightJS from 'vue3-highlightjs'
import 'highlight.js/styles/solarized-light.css'

import './assets/styles/global.css';



const app = createApp(App)
app.use(router)
app.mount('#app')
app.use(VueHighlightJS)