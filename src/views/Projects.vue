<template>
  <div class="projects" ref="projectsContainer">
    <h1>My life's work</h1>
    <div class="projects-grid">
      <router-link 
        v-for="project in projects" 
        :key="project.id" 
        :to="'/projects/' + project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')"
        class="project-card"
      >
        <div class="project-image-container" v-if="project.image">
          <img :src="project.image" :alt="project.title" class="project-image">
        </div>
        <div class="project-content">
          <h3>{{ project.title }}</h3>
          <p class="project-description">{{ project.description }}</p>
          <div class="project-tags">
            <span v-for="tag in project.tags" :key="tag" class="project-tag">{{ tag }}</span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '../data/projects'

const route = useRoute()
const projectsContainer = ref(null)

// Store scroll position before leaving
onBeforeUnmount(() => {
  if (projectsContainer.value) {
    localStorage.setItem('projectsScrollPosition', projectsContainer.value.scrollTop)
  }
})

// Restore scroll position when mounted
onMounted(() => {
  if (projectsContainer.value) {
    const savedPosition = localStorage.getItem('projectsScrollPosition')
    if (savedPosition) {
      // Use setTimeout to ensure the DOM is fully rendered
      setTimeout(() => {
        projectsContainer.value.scrollTop = parseInt(savedPosition)
      }, 0)
    }
  }
})
</script>

<style scoped>
.projects {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
  overflow-y: auto;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--text-color);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.project-card {
  background: var(--card-bg);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  box-shadow: 
    0 10px 20px rgba(0, 0, 0, 0.1),
    0 6px 6px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  color: inherit;
  position: relative;
  transform: translateY(0);
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  pointer-events: none;
  z-index: 1;
  opacity: 0.5;
}

.dark .project-card::before {
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  opacity: 0.3;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 
    0 20px 25px rgba(0, 0, 0, 0.15),
    0 10px 10px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(0, 0, 0, 0.1);
}

.project-image-container {
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
  border-bottom: 1px solid var(--border-color);
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card:hover .project-image {
  transform: scale(1.08);
}

.project-content {
  padding: 1.5rem;
  position: relative;
  z-index: 2;
  background: var(--card-bg);
}

.project-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-color);
  position: relative;
  font-weight: 600;
}

.project-description {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-color);
  margin-bottom: 1rem;
  position: relative;
  opacity: 0.9;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
}

.project-tag {
  background: var(--tag-bg);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  display: inline-block;
  position: relative;
  overflow: hidden;
  font-weight: 500;
}

.project-tag:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.25);
}

.project-tag::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: transform 0.3s ease;
}

.project-tag:hover::after {
  transform: translateX(100%);
}

.project-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.project-link {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: opacity 0.3s ease;
}

.project-link:hover {
  opacity: 0.8;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .projects {
    padding: 1.5rem;
  }

  .projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
}

@media (max-width: 768px) {
  .projects {
    padding: 1rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .project-content {
    padding: 1.25rem;
  }

  .project-title {
    font-size: 1.3rem;
  }

  .project-description {
    font-size: 0.95rem;
  }

  .project-tag {
    padding: 0.4rem 0.8rem;
    font-size: 0.85rem;
    border-radius: 20px;
  }
}

@media (max-width: 480px) {
  .projects {
    padding: 0.75rem;
  }

  .project-image-container {
    height: 180px;
  }

  .project-title {
    font-size: 1.2rem;
  }

  .project-description {
    font-size: 0.9rem;
  }

  .project-tag {
    padding: 0.35rem 0.7rem;
    font-size: 0.8rem;
    border-radius: 18px;
  }

  .project-links {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style> 