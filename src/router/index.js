import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Projects from '../views/Projects.vue';
import Contact from '../views/Contact.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/projects/:id/:title',
    name: 'ProjectDetail',
    component: () => import('../views/ProjectDetail.vue'),
    props: true
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  // Add a catch-all route for debugging
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Add navigation guard for debugging
router.beforeEach((to, from, next) => {
  //console.log('Navigating to:', to)
  next()
})

export default router; 