import { createApp } from 'vue'
import '@/presentation/style.css'
import App from '@/presentation/App.vue'
import router from '@/router'


createApp(App)
  .use(router)
  .mount('#app')
