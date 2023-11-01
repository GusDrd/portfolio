import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import VueSmoothScroll from 'v-smooth-scroll'


const app = createApp(App)

app.use(VueSmoothScroll, {
    duration: 900
})

app.use(createPinia())

app.mount('#app')
