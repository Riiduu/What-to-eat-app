import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router.js'// loads from src/router/index.js


const app = createApp(App)

app.use(router)

app.mount('#app')
