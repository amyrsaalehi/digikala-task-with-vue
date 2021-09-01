import { createApp } from 'vue'
import Vue3Progress from "vue3-progress";
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

if (!localStorage.getItem('access_token')) {
    localStorage.setItem('access_token', 'mpfKW9ghVTCSuBZ7qTkSmEyvL38ShZxv')
}

const progressConfig = {
    position: "fixed",
    height: "5px",
    color: "#42b983",
};

createApp(App).use(store).use(router).use(Vue3Progress, progressConfig).mount('#app')