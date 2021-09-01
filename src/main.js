import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

if (!localStorage.getItem('access_token')) {
    localStorage.setItem('access_token', 'mpfKW9ghVTCSuBZ7qTkSmEyvL38ShZxv')
}

createApp(App).use(store).use(router).mount('#app')