import { createApp } from 'vue'
import Vue3Progress from "vue3-progress";
import App from '@/App.vue'
import '@/registerServiceWorker'
import router from '@/router'
import store from '@/store'
import { ACCESS_TOKEN } from '@/constants'
import { progressConfig } from '@/constants/configs';


if (!localStorage.getItem('access_token')) {
    localStorage.setItem('access_token', ACCESS_TOKEN)
}

createApp(App).use(store).use(router).use(Vue3Progress, progressConfig).mount('#app')