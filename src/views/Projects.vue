<template>
  <div class="projects">
    <h1 class="main-title">Projects</h1>
    <div v-if="store.loading" class="loading">
      <LoadingDots />
    </div>
    <div v-else-if="store.error" class="error">{{ store.error }}</div>
    <div v-else class="projects-grid">
      <ProjectCard v-for="project in store.projects" :key="project.id" :project="project" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import ProjectCard from '../components/ProjectCard.vue'
import LoadingDots from '../components/LoadingDots.vue'
import { useProjectsStore } from '../stores/projects'

const router = useRouter()
const store = useProjectsStore()
const scrollPosition = ref(0)

// Save scroll position before unmounting
onBeforeUnmount(() => {
  if (router.currentRoute.value.name === 'ProjectDetail') {
    scrollPosition.value = window.scrollY
  }
})

// Restore scroll position when mounted
onMounted(() => {
  if (scrollPosition.value > 0) {
    window.scrollTo(0, scrollPosition.value)
  }
  store.fetchProjects()
})
</script>

<style scoped>
.projects {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.main-title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--text-color);
  position: relative;
  display: inline-block;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
}

.error {
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: #ff4444;
}

@media (max-width: 1024px) {
  .projects {
    padding: 1.5rem;
  }

  .projects-grid {
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .projects {
    padding: 1rem;
  }

  .main-title {
    font-size: 2.2rem;
  }

  .projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .projects {
    padding: 0.75rem;
  }

  .main-title {
    font-size: 2rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style> 