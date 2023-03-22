import { createApp } from 'vue'
import './style.css'
import { createRouter , createWebHistory } from 'vue-router'
import App from './App.vue'
import HomePage from "./pages/HomePage.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "HomePage",
            component: HomePage
        }
    ]
})

createApp(App).use(router).mount('#app')
