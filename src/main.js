import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import App from './App.vue'

// Import views
import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import ProjectDetail from './views/ProjectDetail.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/projects', component: Projects },
    { path: '/projects/:title', component: ProjectDetail },
    { path: '/about', component: About },
    { path: '/contact', component: Contact }
  ],
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top
    return { top: 0 }
  }
})

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app') 