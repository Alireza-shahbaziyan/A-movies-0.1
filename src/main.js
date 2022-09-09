import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import axios from 'axios'

import './assets/index.css'

import store from './store'

const app = createApp(App).use(store)

app.use(createPinia())
app.use(router)
// app.config.globalProperties.$axios = axios

app.mount('#app')
