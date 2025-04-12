import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Projects from '../views/Projects.vue';
import Contact from '../views/Contact.vue';
import ProjectDetail from '../views/ProjectDetail.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      component: Projects,
      meta: { saveScrollPosition: true }
    },
    {
      path: '/projects/:id/:title',
      name: 'ProjectDetail',
      component: ProjectDetail
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // If navigating to ProjectDetail, always scroll to top
    if (to.name === 'ProjectDetail') {
      return { top: 0 }
    }
    
    // If returning to Projects from ProjectDetail, let the component handle scroll
    if (to.name === 'Projects' && from.name === 'ProjectDetail') {
      return false
    }
    
    // For all other cases, scroll to top
    return { top: 0 }
  }
});

// Add navigation guard for debugging
router.beforeEach((to, from, next) => {
  //console.log('Navigating to:', to)
  next()
})

export default router; 