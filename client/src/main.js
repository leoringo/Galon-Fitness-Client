
import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const pinia = createPinia()

pinia.use(({ store }) => {
  store.router = markRaw(router)
})


app.use(vue3GoogleLogin, {
  clientId: '22205932903-7egos27m9jses0r4f1h7ufbkrrt7735b.apps.googleusercontent.com'
})
app.use(pinia)
app.use(router)

app.mount('#app')
