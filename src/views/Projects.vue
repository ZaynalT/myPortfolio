<template>
  <div class="projects">
    <h1 class="main-title">Projects</h1>
    <div class="projects-grid">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../data/projects'

const projectsList = ref(projects)
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

.main-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 100%;
  height: 3px;
  background: var(--primary-color);
  border-radius: 2px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
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